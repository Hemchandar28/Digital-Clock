import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './clock.css';

function Clock() {
    const date = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const ap = date.getHours();

    const [currentTime,setTime] = useState({h:0,m:0,s:0});
    
    useEffect(()=>{
        setTime({h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()});
    })

    // function Time1() {
    //     if(ap<=12){
    //         console.log("am");
    //     }
    //     else {
    //         console.log("pm");
    //     }
    // }

    function Time(t){
        if(t>12){
            return t-12;
        }
        return t;
    }

    function Zero(t) {
        var len = t.toString().length;
        if(len<=1){
            return '0'+t;
        }
        return t;
    }
    return(
        <>
        <div className="containert">
            <h1 className="h1t">Digital Clock</h1>
            <div className="timet">
                <div className="childt"><h2 className="h2t">{Zero(Time(currentTime.h))}</h2><h3 className="h3t">HOUR</h3></div>
                <div className="childt"><h2 className="h2t">{Zero(currentTime.m)}</h2><h3 className="h3t">MINUTES</h3></div>
                <div className="childt"><h2 className="h2t">{Zero(currentTime.s)}</h2><h3 className="h3t">SECONDS</h3></div>
            </div>
            <div className="child2t">
                <div className="datet">
                    <h4 className="h4t">{Zero(date.getDate())}-{Zero(date.getMonth())}-{Zero(date.getFullYear())}</h4>
                </div>
                <div className="dayt">
                    <h5 className="h5t">{days[date.getDay()]}</h5>                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Clock