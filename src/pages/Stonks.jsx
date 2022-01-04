import React, { Component, useEffect, useState } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import King from "../components/King"
import "../styles/Stonks.css"
import { CustomProvider } from 'rsuite';




function Stonks() {

    let [theKing, settheKing] = useState("Loading...")

    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>2022 Stonks Competition</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className='tables'>
                <CustomProvider theme="dark">
                <StonkTable sendKing={settheKing} />
                </CustomProvider>
                <br></br>
                <br></br>
                <br></br>

                <King theKing={theKing}/>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
     );
}

export default Stonks;