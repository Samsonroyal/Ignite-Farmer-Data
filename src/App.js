import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherStats from './components/WeatherStatistics';
import MyWeatherComponent from './components/Weather'
import { Dashboard } from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherStats />} />
        <Route path="/weather" element={<MyWeatherComponent />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
