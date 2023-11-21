import React, { useState, useEffect, useRef } from 'react';
import * as Chart from 'chart.js';
import axios from 'axios';
import '../styles/Card.css';

const WeatherCard = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://b2b.ignitia.se/api/ocp/forecast/longrange', {
          headers: {
            'auth-key': '4rKtCc6YvWnsS8EPzCEb9SuS3xEzp5KM',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
          },
          params: {
            lat: 5.65178,
            lon: 5,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overlap-group">
      <div className="weather-card-header">
        <div className="text-wrapper-12">Weather Forecast</div>
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
