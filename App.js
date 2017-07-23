/* @flow */

import React from 'react';
import { StyleSheet, Text, View, NativeModules, NativeEventEmitter } from 'react-native';

const CalendarManager = NativeModules.CalendarManager;

import type EmitterSubscription from 'EmitterSubscription';

export default class App extends React.Component {

  _subscription: ?EmitterSubscription = null;

  componentDidMount() {
    console.log('PROPERTIES');
    console.log(CalendarManager);

    this._subscription = new NativeEventEmitter(CalendarManager).addListener(
      'EventReminder',
      (res: Object) => {
        console.log('EVENT EMITTER');
        console.log('name: ' + res.name);
        console.log('location: ' + res.location);
        console.log('date: ' + res.date);
      }
    );

    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', Date.now(), (res: Object) => {
      console.log('CALLBACK');
      console.log(res);
    });

    CalendarManager.addPromisedEvent('Yu Wang')
    .then((res: Object) => {
      console.log('PROMISE CALLBACK');
      console.log(res);
    });
  }

  componentWillUnmount() {
    this._subscription && this._subscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
