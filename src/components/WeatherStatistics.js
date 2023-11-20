// WeatherStats.js
import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import '../styles/Card.css';

const WeatherStats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
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

    return (
        <div className="weather-card">
            <div className="card-header">
                <h2>Weather Forecast</h2>
            </div>
            <div className="card-body">
                {data.length > 0 ? (
                    <ChartComponent data={data} />
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default WeatherStats;