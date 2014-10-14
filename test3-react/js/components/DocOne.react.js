/**
  * @jsx React.DOM
  */

var React = require('react/addons');
var DocViewActionCreator = require('../actions/DocViewActionCreator');

var DocOne = React.createClass({


    render: function(){
        var d = this.props.doc;
        
        var classes = React.addons.classSet({
            'doc-one': true,
            'deleted': d.deletePending
          });

        return(
            <p className={classes}>One doc: {d.id} {d.get('name')} 
                <br /><a className="delete" onClick={this._delete} href="#">❌</a>
                <br /><a className="action open" onClick={this._toList} href="/docs">to list</a>
            </p>
        );
    },

    _toList: function(){
        DocViewActionCreator.viewDocList();
        return false;
    },

    _delete: function(){
        this.props.delete(this.props.doc);
        return false;
    }
});

module.exports = DocOne;