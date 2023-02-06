import React, { useEffect, useState } from "react";
import Stonkbar from "../components/Stonkbar";
import Spy from "../components/Spy";

function Info(props) {
  useEffect(() => {
    document.title = "Random SPY";
  }, []);

  return (
    <div className="min-h-screen">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Spy className="sm:min-h-screen grid content-center " />
    </div>
  );
}

export default Info;
