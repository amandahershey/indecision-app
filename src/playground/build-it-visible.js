// React component state

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
    hidden: true
    }
  }
  toggle(){
    this.setState((prevState) => {
      return{
        hidden: !prevState.hidden
      }
    });
    console.log(this.state.hidden);
  }
  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>{this.state.hidden ? 'Show details' : 'Hide details'}</button>
        {!this.state.hidden && <p>These are the deets</p>}
      </div>
    );
  }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let hidden = true;
// const toggle = () => {
//   hidden = !hidden;
//   render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//   const display = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{hidden ? 'Show details' : 'Hide details'}</button>
//       {!hidden && <p>These are the deets</p>}
//     </div>
//   );
//
//   ReactDOM.render(display, appRoot);
// };
//
// render();
