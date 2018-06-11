class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0, sum: 0, doubleClick: 0
    };
  }
  render() {
    var incre = this.increment.bind(this);
    var decre = this.decrement.bind(this);
    var dblclick = this.countDoubleClick.bind(this);
    return (
      <div>
        <button onClick={incre}>&#10133;</button>
        <output onDoubleClick={dblclick}>{this.state.counter}</output>
        <output onDoubleClick={dblclick}>{this.state.sum}</output>
        <output onDoubleClick={dblclick}>{this.state.doubleClick}</output>
        <button onClick={decre}>&#10134;</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
      sum: this.state.sum + 1,
    })
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
      sum: this.state.sum + 1,
    })
  }
  countDoubleClick(){
    this.setState({
      doubleClick: this.state.doubleClick + 1
    })
  }
}

ReactDOM.render(
  <App/>, document.getElementById("app"));