import React from 'react';
import Stonkbar from '../components/Stonkbar';
import "../styles/Shame.css"
import Rex2021 from '../images/shame/rex3.jpg';



function Stonks() {
    return ( 
        <div>
            <Stonkbar></Stonkbar>
            <br/>
            <br/>
            <br/>
            <h1>Stonks Hall of Shame</h1>
            <br></br>
            <br></br>
            <br></br>

            <h1>2021</h1>
            <h3>Rex W.</h3>
            <h3>$AJAX/$CZOO</h3>
            <h3 style={{color: "red"}}>-47.57%</h3>
            <p>$SPY was up <span style={{color: "green"}}>&nbsp;28.79%&nbsp;</span> that year</p>
            <img src={Rex2021} alt="Rex 2021" height={350} width={350}/>
            <br></br>
            <br></br>
            <p>“Wait, I thought you said stonks only go up”</p>
            <br></br>
            <br></br>
            <br></br>


        </div>
     );
}

export default Stonks;