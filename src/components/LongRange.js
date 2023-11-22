import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const openAIKey = process.env.REACT_APP_OPENAI_API_KEY;


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
      generateTextFromWeatherData(chartData); // Call function to generate text
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

  const generateTextFromWeatherData = async () => {
    const weatherSummary = 'Generate a simple weather summary highlighting the numbers and what the farmer should focus on(a layman) be concise and brief as possible. Maximum three sentences'; // Replace with your generated weather summary or description

    try {
      const openAIResponse = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`, // Use backticks for string interpolation
        },
        body: JSON.stringify({
          prompt: weatherSummary,
          max_tokens: 150, // Adjust the max_tokens based on the length of text you want
        }),
      });

      if (!openAIResponse.ok) {
        throw new Error(`OpenAI API request failed with status: ${openAIResponse.status}`);
      }

      const responseData = await openAIResponse.json();
      console.log(responseData.choices[0]?.text); // Log or use the generated text
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  return <canvas id="chartCanvas" />;
};

export default LongRange;
