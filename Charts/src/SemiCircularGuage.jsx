
import Chart from 'react-apexcharts';

const SemiCircularGuage = () => {
  const options = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        // Controls the radial gauge to be half-circle
        startAngle: -180,
        endAngle: 0,
        hollow: {
          margin: 0,
          size: '70%',
          background: 'transparent',
          position: 'front',
        },
        dataLabels: {
          name: {
            fontSize: '24px',
            color: undefined,
            offsetY: 50,
          },
          value: {
            fontSize: '30px',
            color: '#fff',
            offsetY: 10,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#FDD835'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Score'],
  };

  const series = [70]; // Set the value for the gauge

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default SemiCircularGuage;
