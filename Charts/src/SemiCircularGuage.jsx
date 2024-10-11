/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series] = useState([44,67, 83]);
  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              // This function can return the total or any custom value
              return 194;
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
