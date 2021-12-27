import * as React from 'react';
import { ReactApexChart } from 'apexcharts';

class Graph2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Network',
        data: [{
          x: 'Dec 23 2017',
          y: null,
        },
        {
          x: 'Dec 24 2017',
          y: 44,
        },
        {
          x: 'Dec 25 2017',
          y: 31,
        },
        {
          x: 'Dec 26 2017',
          y: 38,
        },
        {
          x: 'Dec 27 2017',
          y: null,
        },
        {
          x: 'Dec 28 2017',
          y: 32,
        },
        ],
      }],
      options: {
        chart: {
          type: 'area',
          height: 350,
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        fill: {
          opacity: 0.8,
          type: 'pattern',
          pattern: {
            style: ['verticalLines', 'horizontalLines'],
            width: 5,
            height: 6,
          },
        },
        markers: {
          size: 5,
          hover: {
            size: 9,
          },
        },
        title: {
          text: 'Network Monitoring',
        },
        tooltip: {
          intersect: true,
          shared: false,
        },
        theme: {
          palette: 'palette1',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Bytes Received',
          },
        },
      },
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>

    );
  }
}

export default Graph2;
