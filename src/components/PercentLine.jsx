import React from "react";
import { Line } from "react-chartjs-2";

function PercentLine(props) {
  const testdata = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Percent Change",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <div>
      <Line data={testdata} />
    </div>
  );
}

export default PercentLine;
