import React, { useEffect, useState } from "react";
import Stonkbar from "../components/Stonkbar";
import Login from "../components/Login";
import ValidBar from "../components/ValidBar";
import ErrorBar from "../components/ErrorBar";
import { Navigate, useNavigate } from "react-router-dom";

function Info(props) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  let [allowed, setAllowed] = useState(isUserAuthenticated());
  let [error, setError] = useState("");
  let [valid, setValid] = useState("");

  useEffect(() => {
    if (allowed) {
      navigate("/Dashboard");
    }
  }, []);

  function isUserAuthenticated() {
    var check = JSON.parse(sessionStorage.getItem("logged_in"));

    // verify session key

    var undef;
    if (JSON.parse(sessionStorage.getItem("session_key") === typeof undef)) {
      //console.log("undefined");
      return false;
    }

    if (check) {
      var send = {
        api_key: process.env.REACT_APP_API_KEY,
        username: JSON.parse(sessionStorage.getItem("user")),
        session: JSON.parse(sessionStorage.getItem("session_key")),
      };
      fetch("https://presleyduggan.pythonanywhere.com/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(send),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data === "allow") {
            // it is in fact... not secure ;)
            //console.log("session key is good");
            //return <Navigate to="/Dashboard" />;
            navigate("/Dashboard");
            return true;
          } else {
            //console.log("session key is bad");
            return false;
          }
        });
    }
  }

  return (
    <div>
      <div>
        <Stonkbar />
      </div>

      <br />
      <br />
      <div>
        {error !== "" && <ErrorBar error={error}></ErrorBar>}
        {valid !== "" && <ValidBar valid={valid}></ValidBar>}
      </div>
      <br />
      <div className="sm:min-h-screen grid content-center ">
        <Login setError={setError} />
      </div>
    </div>
  );
}

export default Info;
