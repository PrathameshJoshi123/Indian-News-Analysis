import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (data) => {
    // Sample data for the line chart
    const data = {
        labels: data.label,
        datasets: [
            {
                label: 'Sales Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    // Configuration options for the chart
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h2>Line Chart Example</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
