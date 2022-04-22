import React, { useEffect } from "react";
import Stonkbar from "../components/Stonkbar";

function Info(props) {
  useEffect(() => {
    document.title = "Stonks Info";
  }, []);

  return (
    <div>
      <Stonkbar />
      <br />
      <br />
      <br />

      <p>
        The stonks competition is a yearly challenge that is done by my friends
        and I. We each pick a stock and set the initial price as the close price
        on December 31st (or last trading day of the year). Whichever stock has
        the highest % return at the end of the year wins!
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Info;
