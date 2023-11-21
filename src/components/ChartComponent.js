import React, { useState, useEffect, useRef } from 'react';
import * as Chart from 'chart.js';
import axios from 'axios';
import '../styles/Card.css';

const WeatherCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch weather data from an API or other source
    const fetchData = async () => {
      let requestData = JSON.stringify({
        "lat": 5.65178,
        "lon": 5
      });

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://b2b.ignitia.se/api/ocp/forecast/longrange',
        headers: { 
          'auth-key': '4rKtCc6YvWnsS8EPzCEb9SuS3xEzp5KM', 
          'Content-Type': 'application/json'
        },
        data: requestData
      };

      try {
        const response = await axios.request(config);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  }, []);

  const chartRef = useRef(null);

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
