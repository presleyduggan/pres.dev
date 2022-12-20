import React, { useEffect, useState } from "react";
import PasswordGate from "../components/PasswordGate";
import "../styles/Playground.css";

function Playground(props) {
  let [allowed, setAllowed] = useState(isUserAuthenticated());

  function isUserAuthenticated() {
    var check = JSON.parse(sessionStorage.getItem("mordor"));
    //console.log(check);
    if (check != null) {
      return check;
    }
  }

  useEffect(() => {
    document.title = "Playground";
  }, []);

  if (!allowed)
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="pwdbox">
          <PasswordGate />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  else
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>You walked into Mordor...</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
}

export default Playground;
