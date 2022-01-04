import React, { useEffect, useState, State } from 'react';

import david from "../images/stonkers/david.jpeg";
import jack from "../images/stonkers/jack.heic";
import jawsh from "../images/stonkers/jack.heic";
import mark from "../images/stonkers/mark.JPG"
import mitch from "../images/stonkers/mitch.JPG"
import poles from "../images/stonkers/mitch.JPG"
import presley from "../images/stonkers/mitch.JPG"
import rex from "../images/stonkers/mitch.JPG"
import sean from "../images/stonkers/mitch.JPG"

function King(props) {

    let [todos, setTodos] = useState([])
    let [showSecret, setShowSecret] = useState("Loading...")
    let [color, setColor] = useState("red")


    /* useEffect(() => {
        fetch("/api/stonks", {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
        }).then(response => response.json()).then(data => {setTodos(data["king"])
        })
      }, []); */

    function kingPic(king){
        switch(king){
            case "David":
                return <img src={david} height="400" width="300"></img>
            case "Jack":
                return <img src={jack} height="400" width="300"></img>
            case "Jawsh":
                return <img src={jawsh} height="400" width="300"></img>
            case "Mark":
                return <img src={mark} height="400" width="300"></img>
            case "Mitch":
                return <img src={mitch} height="400" width="300"></img>
            case "Poles":
                return <img src={poles} height="400" width="300"></img>
            case "Presley":
                return <img src={presley} height="400" width="300"></img>
            case "Rex":
                return <img src={rex} height="400" width="300"></img>
            case "Sean":
                return <img src={sean} height="400" width="300"></img>
            default:
                return <h1></h1>
        }
    }

    return ( 
        <div>
            <h1 style={{color: "black"}}>Your current Stonks KING: {props.theKing} </h1>
            <span>

                {kingPic(props.theKing)}
            </span>

        </div>
        
     );
}

export default King;