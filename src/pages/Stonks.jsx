import React, { Component } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import "../styles/Stonks.css"



function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <div class="centered">
            <StonkTable/>
            </div>
        </div>
     );
}

export default Stonks;