Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _jsxFileName='src/App.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var calendarManagerEmitter=new _reactNative.NativeEventEmitter(_reactNative.NativeModules.CalendarManager);var

App=function(_React$Component){_inherits(App,_React$Component);function App(){var _ref;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.

_subscriptions=[],_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:'componentDidMount',value:function componentDidMount()

{
var CalendarManager=_reactNative.NativeModules.CalendarManager;
console.log('PROPERTIES');
console.log(CalendarManager);

CalendarManager.addEvent('Birthday Party','4 Privet Drive, Surrey',Date.now(),function(res){
console.log('CALLBACK');
console.log(res);
});

this._subscriptions.push(
calendarManagerEmitter.addListener(
'EventReminder',
function(reminder){
console.log('EVENT EMITTER');
console.log('name: '+reminder.name);
console.log('location: '+reminder.location);
console.log('date: '+reminder.date);
}));



CalendarManager.addPromisedEvent('Yu Wang').
then(function(res){
console.log('PROMISE CALLBACK');
console.log(res);
});
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._subscriptions=[];
calendarManagerEmitter.removeListeners();
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:49}},'Open up App.js to start working on your app!')));


}}]);return App;}(_react2.default.Component);exports.default=App;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff',
alignItems:'center',
justifyContent:'center'}});