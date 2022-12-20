import React, { useEffect, useState } from "react";
import Stonkbar from "../components/Stonkbar";
import ChangePassword from "../components/ChangePassword";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorBar from "../components/ErrorBar";
import ValidBar from "../components/ValidBar";

function Info(props) {
  let [error, setError] = useState("");
  let [valid, setValid] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Change Password";
  }, []);

  let [allowed, setAllowed] = useState(isUserAuthenticated());

  /* useEffect(() => {
    if (!allowed) {
      navigate("/Stonks/Login");
    }
  }, []); */

  function isUserAuthenticated() {
    var check = JSON.parse(sessionStorage.getItem("logged_in"));

    // verify session key

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
            return true;
          } else {
            //console.log("session key is bad");
            navigate("/Stonks/Login");
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
      <a href="/Dashboard" className=" text-purple-600">
        Return to Dashboard
      </a>
      <br />
      <br />
      <div>
        {error !== "" && <ErrorBar error={error}></ErrorBar>}
        {valid !== "" && <ValidBar valid={valid}></ValidBar>}
      </div>
      <div className="sm:min-h-screen grid content-center ">
        <ChangePassword setValid={setValid} setError={setError} />
        <div className="flex justify-center text-xs">
          Note: Your password cannot be viewed by me. It is hashed and
          unrecoverable.
        </div>
      </div>
    </div>
  );
}

export default Info;
