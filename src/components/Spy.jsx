import React, { useState } from "react";

function Spy(props) {
  let [spyStock, setSpyStock] = React.useState("");

  function getSpyStock() {
    setSpyStock("Picking random stock...");

    fetch("https://presleyduggan.pythonanywhere.com/api/random-spy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSpyStock("$" + data["stock"]);
      });
  }

  return (
    <div>
      <p className="font-bold text-2xl">{spyStock}</p>
      <br />
      <br />
      <br />
      <button
        type="button"
        onClick={getSpyStock}
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Generate $SPY Stock
      </button>
    </div>
  );
}

export default Spy;
