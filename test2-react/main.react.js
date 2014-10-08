/**
  * @jsx React.DOM
  */
      
var Portal = React.createClass({
  newMessage: function(msg){
    this.setState({
      messages: Array.concat(this.state.messages,[msg])
    });
  },
  getInitialState: function(){
    return {
      ploup: 4,
      messages: []
    };
  },
  render: function(){
    return (
      <div className="row interface">
        <Stream messages={this.state.messages} />
        <Main />
      </div>
      );
  }
})

var Stream = React.createClass({
  getInitialState: function(){
    return {
      filterText: ""
    };
  },
  handleUserInput: function(filterText) {
    this.setState({
        filterText: filterText
    });
  },
  render: function(){
    var lines = [];
    var filter = this.state.filterText.toLowerCase();
    this.props.messages.forEach(function(msg){
      if(msg.name.toLowerCase().indexOf(filter) === -1 && msg.msg.toLowerCase().indexOf(filter) === -1 )
        return;
      lines.push(<StreamElement text={msg.msg} author={msg.name} key={msg.key} />)
    }.bind(this));

    return (
        <div className="col-md-5" >
          <h2>live</h2>
          <p className="lead">while it's happening.</p>
          <SearchStream filterText={this.state.filterText} onUserInput={this.handleUserInput} />
          <div className="stream" id="stream-container">
            {lines}
          </div>
        </div>
      );
  }
})

var SearchStream = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
        this.refs.filterTextInput.getDOMNode().value
    );
  },
  render: function(){
    return (
      <form className="form-inline">
        <div className="form-group form-group-sm">
          <input className="form-control" type="text" placeholder="search..." 
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}  />
        </div>
      </form>
    )
  }
})

var Main = React.createClass({
  render: function(){
    return (
        <div className="col-md-7 mainContainer">
          <h2>main</h2>
          <p className="lead">in ze react.</p>
        </div>
      );
  }
})


var StreamElement = React.createClass({
  render: function() {
    return (
      <blockquote className="fluxBox">
        <p>{this.props.text}</p>
        <small>{this.props.author}</small>
      </blockquote>
    );
  }
});


var MESSAGES = [

{"key":"1", "name": "John Carter", "msg":"Quand le ciel bas et lourd pèse comme un couvercle  Sur l'esprit gémissant en proie aux longs ennuis,  Et que de l'horizon embrassant tout le cercle  II nous verse un jour noir plus triste que les nuits;"},

{"key":"2", "name": "John Hancock",  "msg":"Quand la terre est changée en un cachot humide,  Où l'Espérance, comme une chauve-souris,  S'en va battant les murs de son aile timide  Et se cognant la tête à des plafonds pourris;"},

{"key":"3", "name": "Kaizer Soze",  "msg":" Quand la pluie étalant ses immenses traînées  D'une vaste prison imite les barreaux,  Et qu'un peuple muet d'infâmes araignées  Vient tendre ses filets au fond de nos cerveaux,"}

];

Portal = React.renderComponent(
  <Portal />,
  document.getElementById('portalContainer')
);

Portal.setState({messages: MESSAGES});



// MESSAGES.push({"key":"4", "name": "SpongeBob SquarePants",  "msg":"Ploup"})
// Portal.newMessage({"key":"4", "name": "SpongeBob SquarePants",  "msg":"Ploup"})