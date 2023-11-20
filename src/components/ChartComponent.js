// ChartComponent.js
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js'; // Import the necessary chart controller

const ChartComponent = ({ data }) => {
    useEffect(() => {
        Chart.register(...registerables); // Register all chart controllers

        const chart = new Chart('chart', {
            type: 'line',
            data: {
                labels: data.map((item) => item.date),
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: data.map((item) => item.temperature),
                    },
                ],
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return <canvas id="chart" />;
};

export default ChartComponent;