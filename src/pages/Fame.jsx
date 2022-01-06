import React from 'react';
import Stonkbar from '../components/Stonkbar';
import Josh2021 from '../images/fame/josh.JPG';
import "../styles/Fame.css"




function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <br/>
            <br/>
            <br/>
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
            <p>“As betting at the race ring adds neither strength nor speed to the horse, 
                so the exchange of shares in the stock market adds no capital to business, 
                no increase in the production and no purchasing power to the market.” -Henry Ford, 1926</p>
            <br></br>
            <br></br>
            <br></br>



        </div>
     );
}

export default Stonks;