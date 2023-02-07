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
      <br />
      <br />
      <p>
        {" "}
        Thank you&nbsp;
        <a
          href="https://www.instagram.com/realfakejackheavey/"
          className="text-blue-500"
        >
          @realfakejackheavey
        </a>
        &nbsp;for the quick backend logic
      </p>
    </div>
  );
}

export default Info;
