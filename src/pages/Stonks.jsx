import React, { useState, useEffect } from 'react';
import Stonkbar from '../components/Stonkbar';
import StonkTable from '../components/StonkTable';
import StonkTableMobile from '../components/StonkTableMobile';
import King from "../components/King"
import PercentGraph from '../components/PercentGraph';
//import PercentLine from '../components/PercentLine';
//mport styles from "../styles/Stonks.css"
import { CustomProvider } from 'rsuite';




function Stonks() {

    let [theKing, settheKing] = useState("Loading...")
    let [spyPercent, setspyPercent] = useState("Loading...")
    let [names, setnames] = useState("Loading...")
    let [percent, setpercent] = useState(0)
    const [mobileWidth, setmobileWidth] = useState(isMobile());

    function getTable(isMobile)
    {
        if(isMobile)
        {
            //console.log(isMobile);
            return <StonkTableMobile sendKing={settheKing} sendSpy={setspyPercent} sendNames ={setnames} sendPercent={setpercent}/>
        }
        else
        {
            return <StonkTable sendKing={settheKing} sendSpy={setspyPercent} sendNames ={setnames} sendPercent={setpercent}/>
        }
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        //console.log("width = "+width+" and height="+height);
  
        return width;
        
      }
  
      function isMobile(){
        let width = getWindowDimensions();
        //console.log("Width = "+width);
        if(width < 420)
        {
          return(true);
        }
        else
        {
          return(false);
        }
      }
  


    function spyFormat(spy){
        switch(true){
            case spy === "Loading...":
                return <h2 style={{color: "black"}}></h2>
            case spy >= 0:
                return <h2 style={{color: "black"}}>$SPY is currently up <span style={{color: "green"}}>{spy}%</span> YTD</h2>
            case (spy <= 0):
                return <h2 style={{color: "black"}}>$SPY is currently down <span style={{color: "red"}}>{spy}%</span> YTD</h2>
            default:
                return <h2 style={{color: "black"}}>Yo someone tell papa P there is a bug?</h2>
        }
    }

    useEffect(() => {
        function handleResize() {
          setmobileWidth(isMobile(getWindowDimensions()));
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    require("../styles/Stonks.css");

    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <br/>
            <br/>
            <br/>
            <h1>2022 Stonks Competition</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="tables">
                <CustomProvider theme="dark">
                {getTable(mobileWidth)}
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