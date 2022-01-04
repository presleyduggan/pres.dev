import React, { Component } from 'react';
import Stonkbar from '../components/Stonkbar';
import "../styles/Stonks.css"
import Rex2021 from '../images/shame/rex.jpeg';



function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>Stonks Hall of Shame</h1>
            <br></br>
            <br></br>
            <br></br>

            <h1>2021</h1>
            <h3>Rex W.</h3>
            <h3>$AJAX/$CZOO</h3>
            <h3 style={{color: "red"}}>-47.57%</h3>
            <p>$SPY was up <span style={{color: "green"}}>28.79%</span> that year</p>
            <img src={Rex2021} alt="Rex 2021" height={500} width={350}/>
            <br></br>
            <br></br>
            <br></br>


        </div>
     );
}

export default Stonks;