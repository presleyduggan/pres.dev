import React, { useState } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import King from "../components/King"
import PercentGraph from '../components/PercentGraph';
import PercentLine from '../components/PercentLine';
import styles from "../styles/Stonks.module.css"
import { CustomProvider } from 'rsuite';




function Stonks() {

    let [theKing, settheKing] = useState("Loading...")
    let [spyPercent, setspyPercent] = useState("Loading...")
    let [names, setnames] = useState("Loading...")
    let [percent, setpercent] = useState(0)


    function spyFormat(spy){
        switch(true){
            case spy === "Loading...":
                return <h2 style={{color: "black"}}></h2>
            case spy >= 0:
                return <h2 style={{color: "black"}}>$SPY is currently up <span style={{color: "green"}}>{spy}%</span> YTD</h2>
            case (spy <= 0):
                return <h2 style={{color: "black"}}>$SPY is currently down <span style={{color: "red"}}>{spy}</span>% YTD</h2>
            default:
                return <h2 style={{color: "black"}}>Yo someone tell papa P there is a bug?</h2>
        }
    }

    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <h1>2022 Stonks Competition</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.tables}>
                <CustomProvider theme="dark">
                <StonkTable sendKing={settheKing} sendSpy={setspyPercent} sendNames ={setnames} sendPercent={setpercent}/>
                </CustomProvider>
                <br></br>
                <br></br>
                <br></br>
                <span>{spyFormat(spyPercent)}</span>
                <br></br>
                <br></br>
                <br></br>
                <PercentGraph percent={percent} names={names}/>
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