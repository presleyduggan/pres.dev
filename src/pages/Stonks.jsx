import React, { Component } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import "../styles/Stonks.css"



function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>Test</h1>
            <div className="center2">
                <StonkTable/>
            </div>
        </div>
     );
}

export default Stonks;