// WeatherStats.js
import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import '../styles/Card.css';

const WeatherStats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://b2b.ignitia.se/api/ocp/forecast/longrange', {
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
        <div className='container'>
        <div className="weather-card">
            <div className="card-header">
                <h2>You Are Welcome to Ignite Farmer Dashboard</h2>
            </div>
            <div className="card-body">
                {data.length > 0 ? (
                    <ChartComponent data={data} />
                ) : (
                    <p>Go to the dashboard route to access the command center..</p>
                )}
            </div>
        </div>
        </div>
        
    );
};

export default WeatherStats;