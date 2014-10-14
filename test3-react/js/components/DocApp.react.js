/**
  * @jsx React.DOM
  */

var React = require('react');
var DocList = require('./DocList.react');
var DocOne = require('./DocOne.react');
var HomePage = require('./HomePage.react');
var Constants = require('../constants/Constants');
var Views = Constants.Views;
var DocStore = require('../stores/DocStore');

function getState(){
    return {
        activeView: DocStore.getCurrentView()
    };
}

var DocApp = React.createClass({

    getInitialState: function(){
        return getState();
    },

    componentDidMount: function() {
        DocStore.addChangeListener(Constants.Events.CHANGE_VIEW,this._onChange);
    },

    componentWillUnmount: function() {
        DocStore.removeChangeListener(Constants.Events.CHANGE_VIEW,this._onChange);
    },

    _onChange: function(){
        console.log("DocApp onChange");
        this.setState(getState());
    },


    render: function() {
        console.log(this.state.activeView);
        switch(this.state.activeView.type){
            case Views.DOC_ONE:
                console.log("doc one");
                view = ( <DocOne doc={this.state.activeView.data} /> );
            break;
            case Views.DOC_LIST:
                console.log("doc list");
                view = ( <DocList /> );
            break;
            case Views.HOME:
            default:
                view = ( <HomePage /> );
            break;
        }

        return (
            <div className="docapp">
                {view}
            </div>
        );
    }
});
module.exports = DocApp;