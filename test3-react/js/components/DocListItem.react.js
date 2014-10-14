/**
  * @jsx React.DOM
  */

var router = require('../router.js');
var React = require('react/addons');

var DocListItem = React.createClass({

    render: function(){
        var d = this.props.doc;

        var classes = React.addons.classSet({
            'doclist-item': true,
            'deleted': d.deletePending
          });

        return(
            <p className={classes}>doc: {d.id} {d.get('name')} 
                <a className="action open" onClick={this._navigate} href="#">⬈</a> 
                <a className="action delete" onClick={this._delete} href="#">❌</a>
            </p>
        );
    },

    _navigate: function(){
        this.props.view(this.props.doc);
        return false;
    },

    _delete: function(){
        this.props.delete(this.props.doc);
        return false;
    }
});

module.exports = DocListItem;