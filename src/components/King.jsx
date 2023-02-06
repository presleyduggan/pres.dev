import React from "react";

import david from "../images/stonkers/2023/david.JPEG";
import dhiraj from "../images/stonkers/2023/dhiraj.jpg";
import jack from "../images/stonkers/2023/jack.jpg";
import jawsh from "../images/stonkers/2023/josh.jpg";
import logan from "../images/stonkers/2023/logan.JPEG";
import mark from "../images/stonkers/2023/mark.jpg";
import mitch from "../images/stonkers/2023/mitch.jpg";
import poles from "../images/stonkers/2023/poles.JPG";
import presley from "../images/stonkers/2023/presley.jpg";
import rex from "../images/stonkers/2023/rex.png";
import sean from "../images/stonkers/2023/sean.JPEG";

function King(props) {
  /* useEffect(() => {
        fetch("/api/stonks", {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
        }).then(response => response.json()).then(data => {setTodos(data["king"])
        })
      }, []); */

  function kingPic(king) {
    switch (king) {
      case "David":
        return (
          <img
            src={david}
            className="king"
            alt="david"
            height="400"
            width="300"
          ></img>
        );
      case "Dhiraj":
        return (
          <img
            src={dhiraj}
            className="king"
            alt="dhiraj"
            height="400"
            width="300"
          ></img>
        );
      case "Jack":
        return (
          <img
            src={jack}
            className="king"
            alt="Jack"
            height="400"
            width="300"
          ></img>
        );
      case "Jawsh":
        return (
          <img
            src={jawsh}
            className="king"
            alt="Josh"
            height="400"
            width="300"
          ></img>
        );
      case "Logan":
        return (
          <img
            src={logan}
            className="king"
            alt="Logan"
            height="400"
            width="300"
          ></img>
        );
      case "Mark":
        return (
          <img
            src={mark}
            className="king"
            alt="Mark"
            height="400"
            width="300"
          ></img>
        );
      case "Mitch":
        return (
          <img
            src={mitch}
            className="king"
            alt="Mitch"
            height="400"
            width="300"
          ></img>
        );
      case "Poles":
        return (
          <img
            src={poles}
            className="king"
            alt="Poles"
            height="400"
            width="300"
          ></img>
        );
      case "Presley":
        return (
          <img
            src={presley}
            className="king"
            alt="Presley"
            height="400"
            width="300"
          ></img>
        );
      case "Rex":
        return (
          <img
            src={rex}
            className="king"
            alt="rex"
            height="400"
            width="300"
          ></img>
        );
      case "Sean":
        return (
          <img
            src={sean}
            className="king"
            alt="Sean"
            height="400"
            width="300"
          ></img>
        );
      default:
        return;
    }
  }

  function notSean(king) {
    switch (king) {
      //case "Sean":
      //  return <h3>Long live King Sean, first of his name!</h3>;
      case "Loading...":
        return;
      default:
        return;
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold text-black">
        Your current Stonks KING: {props.theKing}{" "}
      </h1>
      <br />
      <div className="flex justify-center">{kingPic(props.theKing)}</div>
      <br></br>
      <br></br>
      <div className="flex justify-center">{notSean(props.theKing)}</div>
    </div>
  );
}

export default King;
