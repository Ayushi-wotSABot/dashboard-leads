import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const SalesFunnel = () => {
  const data = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        label: 'Sales',
        data: [7, 5, 8, 4, 7, 8, 5, 3, 7, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines for y-axis
        },
        ticks: {
          stepSize: 3, // Define steps between tick marks
          max: 12,      // Ensure the y-axis max is 12
        },
        suggestedMax: 12, // Suggest the y-axis to stretch to 12
      },
      x: {
        grid: {
          display: false, // Remove grid lines for x-axis
        },
      },
    },
  };

  return (
    <>
      <h3 className="text-lg font-semibold mb-4 "><strong>SALES FUNNEL</strong></h3>
      <Bar data={data} options={options} />
    </>
  );
};

export default SalesFunnel;
