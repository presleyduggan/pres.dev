import React, { useEffect } from "react";
import Stonkbar from "../components/Stonkbar";
import "../styles/Shame.css";
import Rex2021 from "../images/shame/rex3.jpg";
import Poles2022 from "../images/shame/poles.jpeg";

function Stonks() {
  useEffect(() => {
    document.title = "Stonks Hall of Shame";
  }, []);

  return (
    <div>
      <Stonkbar></Stonkbar>
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-semibold">Stonks Hall of Shame</h1>
      <br></br>
      <br></br>
      <br></br>

      <h1 className="text-4xl font-semibold">2021</h1>
      <div className="text-xl font-semibold">
        <h3>Rex W.</h3>
        <h3>$AJAX/$CZOO</h3>
        <h3>Start Price: $11.52</h3>
        <h3>End Price: $6.04</h3>
      </div>
      <h3 className="text-red-500">-47.57%</h3>
      <p>
        $SPY was up <span className="text-green-500">&nbsp;28.79%&nbsp;</span>{" "}
        that year
      </p>
      <img
        src={Rex2021}
        className="flex content-center mx-auto"
        alt="Rex 2021"
        height={350}
        width={350}
      />
      <br></br>
      <br></br>
      <p>“Wait, I thought you said stonks only go up”</p>
      <br></br>
      <br></br>
      <br></br>

      <h1 className="text-4xl font-semibold">2022</h1>
      <div className="text-xl font-semibold">
        <h3>Alex P</h3>
        <h3>$ROKU</h3>
        <h3>Start Price: $228.2</h3>
        <h3>End Price: $40.70</h3>
      </div>
      <h3 className="text-red-500">-82.16%</h3>
      <p>
        $SPY was down <span className="text-red-500">&nbsp;-19.48%&nbsp;</span>{" "}
        that year
      </p>
      <img
        src={Poles2022}
        className="flex content-center mx-auto"
        alt="Poles 2022"
        height={350}
        width={350}
      />
      <br></br>
      <br></br>
      <p>“I don’t even like dumbass Roku”</p>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Stonks;
