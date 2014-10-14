/**
  * @jsx React.DOM
  */

var React = require('react');

var DocStore = require('../stores/DocStore');
var DocViewActionCreator = require('../actions/DocViewActionCreator');
var DocListItem = require('./DocListItem.react');


function getState(){
    return {
        docs: DocStore.getAll()
    }
}

var DocList = React.createClass({

    getInitialState: function(){
        return getState();
    },

    componentDidMount: function() {
        DocStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        DocStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var docs = [];
        for(var i in this.state.docs){
            docs.push(<DocListItem key={i} doc={this.state.docs[i]} delete={this._deleteDoc} view={this._viewDoc} />)
        }

        return (
            <div className="docList">
                {docs}
            </div>
        );
    },

    _viewDoc: function(doc){
        DocViewActionCreator.viewDoc(doc);
    },

    _deleteDoc: function(doc){
        console.log("Delete ",doc);
        DocViewActionCreator.removeDoc(doc);
    },

     _onChange: function() {
        //console.log("DocList state changed");
        //console.log(this.state.docs);
        this.setState(getState());
    }
});


module.exports = DocList;