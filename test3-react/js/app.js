/**
  * @jsx React.DOM
  */
console.log("starting");

var React = require('react');
var DocApp = require('./components/DocApp.react');
var Server = require('./utils/SimulatedServer');
var router = require('./router.js');

Server.connect();

var docApp = React.renderComponent(<DocApp />, document.getElementById('react'));


