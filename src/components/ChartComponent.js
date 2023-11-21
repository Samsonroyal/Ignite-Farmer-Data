import React, { useState, useEffect,  useRef } from 'react';
import * as Chart from 'chart.js';
import '../styles/Card.css';

const WeatherCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch weather data from an API or other source
    const fetchData = async () => {
      const response = await fetch('https://b2b.ignitia.se/api/xxxxx/forecast/longrange', {
        headers: {
          'auth-key': process.env.REACT_APP_IGNITIA_API_KEY,
        },
      });
      const data = await response.json();
      setData(data);
    };
    
    fetchData();
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: data.map((item) => item.date),
        datasets: [
          {
            label: 'Temperature (°C)',
            data: data.map((item) => item.temperature),
            borderColor: '#ff0000',
            borderWidth: 2,
          },
          {
            label: 'Rainfall (mm)',
            data: data.map((item) => item.rainfall),
            borderColor: '#0099cc',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2>Weather Forecast</h2>
      </div>
      <div className="weather-card-body">
        <canvas ref={chartRef} className="weather-card-chart" />
        <div className="weather-card-legend">
          <div className="weather-card-legend-item">
            <div className="weather-card-legend-item-color temperature-color" />
            <div className="weather-card-legend-item-label">Temperature (°C)</div>
          </div>
          <div className="weather-card-legend-item">
            <div className="weather-card-legend-item-color rainfall-color" />
            <div className="weather-card-legend-item-label">Rainfall (mm)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
