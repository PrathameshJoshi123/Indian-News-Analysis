import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barcharthori = ({ Positive, Negative }) => {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Positive vs Negative',
      },
    },
  };

  const labels = ['Sentiment']; // Single label for single data points

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Positive",
        data: [Positive], // Single data point
        backgroundColor: 'green',
      },
      {
        label: "Negative",
        data: [Negative], // Single data point
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="App">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Barcharthori;
