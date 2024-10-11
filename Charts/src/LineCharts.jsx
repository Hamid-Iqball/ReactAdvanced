
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false, // No filling under the line
        borderColor: 'rgb(75, 192, 192)', // Line color
        tension: 0.1, // Curvature of the line
      },
    ],
  };

  // Default options (you can customize if needed)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart Example',
      },
    },
  };

  return (
    <div className='w-96 h-60'>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
