import { Line } from "react-chartjs-2";
import React from "react";

export const Diagram = () => (
  <div>
    <div className="your-financial-cost">
      Your Financial Cost Comparison
    </div>
    <div className="chart-div">
      <Line
        data={DATA}
        options={OPTIONS}
        width={485}
        height={300}
      />
    </div>
  </div>
);

const DATA = {
  labels: ['1', '5', '10', '15', '20', '20', '25'],
  datasets: [
    {
      label: 'With Solar',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '#4B53FF',
      borderColor: '#4B53FF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4B53FF',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [11, 12, 13, 15, 18, 22, 28]
    },
    {
      label: 'Without Solar',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '#AEAEAE',
      borderColor: '#AEAEAE',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#AEAEAE',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 3, 9, 15, 30, 40, 50]
    }
  ]
};

const OPTIONS = {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Cost (incl. electricity bill)',
      },
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Year',
      },
      gridLines : {
        display : false,
      },
    }],
  },
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 10,
    },
  },
  tooltips: {
    enabled: false,
  },
  plugins: {
    filler: {
      propagate: true,
    },
  },
};