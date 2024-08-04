import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Barcharthori = ({  Positive, Negative }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Destroy previous chart instance if exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create new chart instance
        if (chartRef.current ) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    // labels: label1,
                    datasets: [
                      {
                        label: 'Positive',
                        data: Positive,
                        
                      },
                      {
                        label: 'Negative',
                        data: Negative,
                      }  
                    ]
                },
                options: {
                    indexAxis: 'y',
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    elements: {
                    bar: {
                        borderWidth: 2,
                    }
                    },
                    responsive: true,
                    plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Horizontal Bar Chart'
                    }
                    }
                },
            });
        }

        return () => {
            // Cleanup: Ensure chart instance is destroyed on unmount
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, );

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Barcharthori;

