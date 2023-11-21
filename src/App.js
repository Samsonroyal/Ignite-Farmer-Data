import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherStats from './components/WeatherStatistics';
import MyWeatherComponent from './components/Weather'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherStats />} />
        <Route path="/weather" element={<MyWeatherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
