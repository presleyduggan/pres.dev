//import React, { useEffect } from "react";
import Stonkbar from "../components/Stonkbar";
//import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import SimpleDashboard from "../components/SimpleDashboard";
import StockPicker from "../components/StockPicker";
import TickBox from "../components/TickBox";
import ErrorBar from "../components/ErrorBar";
import ValidBar from "../components/ValidBar";
import { Navigate, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ChoiceDashboard from "../components/ChoiceDashboard";
//import isUserAuthenticated from "../components/Auth.js";

function Info(props) {
  let [error, setError] = useState("");
  let [valid, setValid] = useState("");
  let [checked, setCheck] = useState(false);
  let [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  let [stock, setStock] = useState("Loading...");
  let [status, setStatus] = useState("Loading...");
  let [stockLabel, setStockLabel] = useState("");
  let [userStats, setUserStats] = useState(Array.from({ user: "", stock: "" }));
  const navigate = useNavigate();
  /* let [allowed, setAllowed] = useState(
    isUserAuthenticated(
      process.env.REACT_APP_API_KEY,
      JSON.parse(sessionStorage.getItem("user")),
      JSON.parse(sessionStorage.getItem("session_key"))
    )
  ); */

  function test() {
    setError("");
    setValid("");
    //console.log("box checked = " + checked);
    //console.log(stock);
    if (!checked) {
      setError("Error: Confirmation of Stock not being dogshit is not checked");
      return;
    }
    if (stockLabel === "") {
      setError("Error: Stock was not input");
      return;
    }
    var send = {
      user: user,
      stock: stockLabel,
      api_key: process.env.REACT_APP_API_KEY,
    };
    //var send[password] = password;
    fetch("https://presleyduggan.pythonanywhere.com/api/pick_stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //console.log(data instanceof String);
        if (
          // if you don't want to refactor your backend... just write bad javascript
          data instanceof String &&
          data.includes("Error:")
        ) {
          setError(data);
          return;
        } else if (data instanceof Object && data["error"] !== "") {
          setError(data["error"]);
          return;
        } else {
          setValid(data);
          setStock(stockLabel);
          setStatus("Pending");
          return;
        }
      });
  }

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
            //navigate("/Dashboard");
            return true;
          } else {
            navigate("/Stonks/Login");
            //console.log("session key is bad");
            return false;
          }
        });
    }
  }

  // fetch current Stock
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate("/Stonks/Login");
    }
  });

  useEffect(() => {
    //console.log("key = " + process.env.REACT_APP_API_KEY);
    var send = { user: user, api_key: process.env.REACT_APP_API_KEY };
    fetch("https://presleyduggan.pythonanywhere.com/api/get_stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log("data =" + data);
        if (data["error"] !== "") {
          setError(data["error"]);
          return;
        }
        if (data["stock"] === "") {
          setStatus("n/a");
          setStock("Not Picked");
          return;
        }
        //console.log(data);

        setStatus(data["status"]);
        setStock(data["stock"]);
        return;
      });
  }, []);

  useEffect(() => {
    //console.log("key = " + process.env.REACT_APP_API_KEY);
    var send = { api_key: process.env.REACT_APP_API_KEY };
    fetch("https://presleyduggan.pythonanywhere.com/api/stock-selections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log("data =" + data);
        var data2 = JSON.stringify(data);
        var stockList = JSON.parse(data2);
        //console.log(stockList);
        setUserStats(Array.from(stockList));
      });
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <Stonkbar />
      </div>
      <br />
      <br />
      <br />
      <div>
        <SimpleDashboard user={user} status={status} stock={stock} />
      </div>
      <br />
      <div>
        <ChoiceDashboard stats={userStats} />
      </div>
      <br />
      <a href="/Stonks/change-password" className=" text-purple-600">
        Change password
      </a>
      <br />
      {/*  */}
      {error !== "" && <ErrorBar error={error}></ErrorBar>}
      {valid !== "" && <ValidBar valid={valid}></ValidBar>}
      <br />
      <br />
      <br />
      <div className="container mx-auto sm:px-6 lg:px-8 flex justify-center font-semibold">
        <p>You can use the form below to pick your Stock for the next year:</p>
      </div>
      <br />
      <br />
      <div className="container mx-auto sm:px-6 lg:px-8 flex justify-center font-semibold">
        <StockPicker setStock={setStockLabel}></StockPicker>
      </div>
      <br />
      <br />
      <div className="container mx-auto sm:px-6 lg:px-8 flex justify-center font-semibold">
        <TickBox setCheck={setCheck} checked={checked}></TickBox>
      </div>
      <br />
      <br />
      <div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={test}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Info;
