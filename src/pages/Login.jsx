import React, { useEffect } from "react";
import Stonkbar from "../components/Stonkbar";
import Login from "../components/Login";

function Info(props) {
  useEffect(() => {
    document.title = "Login";
  }, []);

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
