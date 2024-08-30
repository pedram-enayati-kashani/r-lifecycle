import {Component} from "react";

/*
* // Note update lifeCycle
* - static getDerivedStateFromProps(props,state)
* - shouldComponentUpdate(nextProps,nextState);
* - render()
* - getSnapshotBeforeUpdate(prevProps,prevState);
* - componentDidUpdate();
* */

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("Clock.jsx - constructor()");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Clock.jsx - getDerivedStateFromProps()");
        return state;
    }

    shouldComponentUpdate(nextProp,nextState){
        console.log("Clock.jsx - shouldComponentUpdate()");
        return this.props.date !== nextProp.date;
    }

    componentDidMount() {
        console.log("Clock.jsx - componentDidMount()");
    }

    componentWillUnmount(){
        console.log("Clock.jsx - componentWillUnmount()");
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Clock.jsx - getSnapshotBeforeUpdate()");
        return {prevProps,prevState}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Clock.jsx - componentDidUpdate()");
        console.log(snapshot);
    }

    render(){
        console.log("Clock.jsx - render")
        const {date,color} = this.props;
        const style = {
            color: color ? "tomato" : "black",
        }
        return (
            <>
                <p style={style}>ساعت در حال حاظر برابر : {date.toLocaleTimeString()}</p>
            </>
        );
    }
}

export default Clock;