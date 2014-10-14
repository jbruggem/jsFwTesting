/**
  * @jsx React.DOM
  */

var React = require('react/addons');
var DocViewActionCreator = require('../actions/DocViewActionCreator');

var HomePage = React.createClass({

    render: function(){
   
        return(
            <div className="Home">
                <h1>Home page </h1>
                <a  onClick={this._toList} href="docs">docs</a>
            </div>
        );
    },

    _toList: function(){
        DocViewActionCreator.viewDocList();
        return false;
    },

});

module.exports = HomePage;