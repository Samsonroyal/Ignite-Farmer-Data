import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const LongRange = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lazy-blue-dibbler-ring.cyclic.app/api/data/long?lat=5.62518719526291&long=-0.22263491962881826"
        );
        const data = JSON.parse(response.data);
        console.log(data);
        setChartData(data.monthly);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData) {
      renderChart();
    }
  }, [chartData]);

  const renderChart = () => {
    const labels = chartData.map((month) => month.month_end);
    const rainfallData = chartData.map((month) => month.rainfall);

    const chartConfig = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Monthly Rainfall",
            data: rainfallData,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(
      document.getElementById("chartCanvas"),
      chartConfig
    );
  };

  return <canvas id="chartCanvas" />;
};

export default LongRange;
