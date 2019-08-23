class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  componentDidMount(){
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if(!isNaN(count)){
        this.setState(() => ({ count }));
      }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count -1
      };
    });
  }
  handleReset(){
    this.setState(() => {
      return {
        count: 0
      };
    });
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// // Challenge:
// // Make button '-1' - setup minusOne fn and register - log 'minusOne'
// // Make reset button 'reset' - setup reset fn - log 'reset'
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(template2, appRoot);
// };
//
// renderCounterApp();
