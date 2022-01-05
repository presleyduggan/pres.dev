import React from 'react';
import {Bar} from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  
function PercentGraph(props) {

    function colors(data)
    {
        let arr = []
        for(let i = 0; i < data.length; i++)
        {
            if(data[i] > 0)
            {
/*                 arr.push("#00b33c")
 */        
                arr.push("forestgreen")

}
            else
            {
                /*arr.push("#e60000")*/
                arr.push("firebrick")
            }
        }
        return arr;
    }

    const testdata = {
        labels: props.names,
        datasets: [
          {
            label: 'Percent Change',
            axis: 'y',
            color: "red",
            hoverBackgroundColor: '#1d4f79',
            data: props.percent,
            backgroundColor: colors(props.percent)

          }
        ]
    }

    return ( 
        <div>
        <Bar data={testdata} />
        </div>
     );
}

export default PercentGraph;
