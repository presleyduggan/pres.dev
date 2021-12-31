import React, { Component } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import "../styles/Stonks.css"
import { CustomProvider } from 'rsuite';




function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>Test</h1>
            <div className="center2">
                <CustomProvider theme="dark">
                <StonkTable/>
                </CustomProvider>
            </div>
        </div>
     );
}

export default Stonks;