import React, { useEffect, useState } from "react";
import Stonkbar from "../components/Stonkbar";
import Login from "../components/Login";
import { Navigate, useNavigate } from "react-router-dom";

function Info(props) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  let [allowed, setAllowed] = useState(isUserAuthenticated());

  useEffect(() => {
    if (allowed) {
      navigate("/Dashboard");
    }
  }, []);

  function isUserAuthenticated() {
    var check = JSON.parse(sessionStorage.getItem("logged_in"));

    // verify session key

    if (check) {
      var send = {
        api_key: process.env.REACT_APP_API_KEY,
        username: JSON.parse(sessionStorage.getItem("user")),
        session: JSON.parse(sessionStorage.getItem("session_key")),
      };
      fetch("http://192.168.0.9:5000/api/session", {
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
            console.log("session key is good");
            //return <Navigate to="/Dashboard" />;
            navigate("/Dashboard");
            return true;
          } else {
            console.log("session key is bad");
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
      <br />
      <div className="sm:min-h-screen grid content-center ">
        <Login />
      </div>
    </div>
  );
}

export default Info;
