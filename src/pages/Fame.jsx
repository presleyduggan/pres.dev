import React, { useEffect } from "react";
import Stonkbar from "../components/Stonkbar";
import Josh2021 from "../images/fame/josh.JPG";
import Sean2022 from "../images/fame/sean.jpg";

function Stonks() {
  useEffect(() => {
    document.title = "Stonks Hall of Fame";
  }, []);

  return (
    <div>
      <Stonkbar></Stonkbar>
      <br />
      <br />
      <br />
      <h1 className="text-4xl font-semibold">Stonks Hall of Fame</h1>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className="text-4xl font-semibold">2021</h1>
        <div className="text-xl font-semibold">
          <h3>Joshua Moore</h3>
          <h3>$F</h3>
          <h3>Start Price: $9.00</h3>
          <h3>End Price: $20.77</h3>
        </div>
        <h3 className="text-green-500">130.78%</h3>
        <div>
          <img
            className="flex content-center mx-auto"
            src={Josh2021}
            alt="Josh 2021"
            height={400}
            width={500}
          />
          <br></br>
          <br></br>
          <p className="text-black text-lg">
            “As betting at the race ring adds neither strength nor speed to the
            horse, so the exchange of shares in the stock market adds no capital
            to business, no increase in the production and no purchasing power
            to the market.” -Henry Ford, 1926
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-4xl font-semibold">2022</h1>
        <div className="text-xl font-semibold">
          <h3>Sean Flignor</h3>
          <h3>$IBM</h3>
          <h3>Start Price: $133.66</h3>
          <h3>End Price: $140.89</h3>
        </div>
        <h3 className="text-green-500">5.41%</h3>
        <div>
          <img
            className="flex content-center mx-auto"
            src={Sean2022}
            alt="Sean2022"
            height={400}
            width={500}
          />
          <br></br>
          <br></br>
          <p className="text-black text-lg">
            “Water Covers Two-Thirds of the Earth… I cover the rest” -Deion
            Sanders
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Stonks;
