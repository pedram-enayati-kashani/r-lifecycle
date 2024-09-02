import {useEffect} from "react";

const SecondClock = ({date,color}) =>{

    // useEffect(()=>{
    //     console.log("secondClock.jsx - Mount useEffect()");
    // });

    useEffect(()=>{
        console.log("secondClock.jsx - Mount useEffect()");
        // Anonymous function
        return () => {
            console.log("secondClock.jsx - Unmount useEffect()");
        }
    },[]);

    useEffect(()=>{
        console.log("secondClock.jsx - Update useEffect()");
    },[color]);

    const style = {
        color: color ? "tomato" : "black",
    }
    return (
        <>
            <p style={style}>ساعت در حال حاظر برابر : {date.toLocaleTimeString()}</p>
        </>
    )
}

export default SecondClock;