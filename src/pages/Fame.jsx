import React, { Component } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import "../styles/Stonks.css"
import { CustomProvider } from 'rsuite';
import Josh2021 from '../images/fame/josh.JPG';




function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>Stonks Hall of Fame</h1>
            <br></br>
            <br></br>
            <br></br>

            <h1>2021</h1>
            <h3>Joshua Moore</h3>
            <h3>$F</h3>
            <h3 style={{color: "green"}}>130.78%</h3>
            <img src={Josh2021} alt="Josh 2021" height={400} width={500}/>
            <br></br>
            <br></br>
            <br></br>


        </div>
     );
}

export default Stonks;