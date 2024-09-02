import {Component} from "react";
import './App.css';
// import Clock from "./components/Clock";
import SecondClock from "./components/SecondClock";

/*
* // NOTE Mounting LifeCycle in class components
* constructor()
* static getDerivedStateFromProps(props,state)
* render()
* componentDidMount()
* */

class App extends Component {
  //   first
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = {date: new Date(),showClock : true, color:false};
    this.clockChange = this.clockChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
  }
    //   second
  static getDerivedStateFromProps(props,state){
      console.log("App.js - getDerivedStateFromProps()");
      return state;
  }

    //   forth
  componentDidMount() {
    console.log("App.js - componentDidMount()");
    // this.timer = setInterval(()=> this.tick(),1000);
  }

  tick(){
      this.setState({date: new Date()});
  }

  componentWillUnmount(){
      console.log("App.js - componentWillUnmount()");
      clearInterval(this.timer);
  }

  clockChange(){
      this.setState({showClock : !this.state.showClock});
  }

  colorChange(){
      this.setState({color:!this.state.color});
  }

    //   third
  render(){
    console.log("App.js - render()");
    const {date,showClock,color} = this.state;
    return (
        <div className="App">
          <p>سلام دوست عزیز</p>
            {
                showClock ? (
                    <SecondClock date={date} color={color}/>
                ) : null
            }
            <hr/>
            <button onClick={this.clockChange}>نمایش ساعت</button>
            <button onClick={this.colorChange}>تغییر رنک</button>
        </div>
    );
  }
}

export default App;
