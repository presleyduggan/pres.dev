import React, { useEffect, useState } from "react";
import Stonkbar from "../components/Stonkbar";
import ChangePassword from "../components/ChangePassword";
import { Navigate, useNavigate } from "react-router-dom";

function Info(props) {
  let [error, setError] = useState("");
  let [valid, setValid] = useState("");

  const navigate = useNavigate();

  function changePWD() {
    var send = {
      username: JSON.parse(sessionStorage.getItem("user")),
      password: password,
      api_key: process.env.REACT_APP_API_KEY,
    };

    if (
      password === "" ||
      confirmPassword === "" ||
      confirmPassword !== password
    ) {
      setError(
        "Erorr: Please make sure password is not empty, and that both match."
      );
      return;
    }
    //var send[password] = password;
    fetch("http://192.168.0.9:5000/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["error"] !== "") {
          //
          setValid([data["message"]]);
        } else {
          setError(data["error"]);
        }
      });
  }

  useEffect(() => {
    document.title = "Change Password";
  }, []);

  let [allowed, setAllowed] = useState(isUserAuthenticated());

  useEffect(() => {
    if (!allowed) {
      navigate("/Stonks/Login");
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
      <div>
        {error !== "" && <ErrorBar error={error}></ErrorBar>}
        {valid !== "" && <ValidBar valid={valid}></ValidBar>}
      </div>
      <br />
      <br />
      <div className="sm:min-h-screen grid content-center ">
        <ChangePassword changePWD={changePWD} />
      </div>
    </div>
  );
}

export default Info;
