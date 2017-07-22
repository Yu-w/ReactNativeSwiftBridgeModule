/* @flow */

import React from 'react';
import { StyleSheet, Text, View, NativeModules, NativeEventEmitter } from 'react-native';

const calendarManagerEmitter = new NativeEventEmitter(NativeModules.CalendarManager);

export default class App extends React.Component {

  _subscriptions = []

  componentDidMount() {
    const CalendarManager = NativeModules.CalendarManager;
    console.log('PROPERTIES');
    console.log(CalendarManager);

    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', Date.now(), (res) => {
      console.log('CALLBACK');
      console.log(res);
    });

    this._subscriptions.push(
      calendarManagerEmitter.addListener(
          'EventReminder',
          (reminder) => {
              console.log('EVENT EMITTER');
              console.log('name: ' + reminder.name);
              console.log('location: ' + reminder.location);
              console.log('date: ' + reminder.date);
          }
      )
    );

    CalendarManager.addPromisedEvent('Yu Wang')
    .then((res) => {
      console.log('PROMISE CALLBACK')
      console.log(res);
    });
  }

  componentWillUnmount() {
    this._subscriptions = [];
    calendarManagerEmitter.removeListeners();
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
