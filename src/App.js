import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherStats from './components/WeatherStatistics';
import MyWeatherComponent from './components/Weather'
import { Dashboard } from './pages/Dashboard';
import LongRange from './components/LongRange';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherStats />} />
        <Route path="/weather" element={<MyWeatherComponent />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/longrange" element={<LongRange/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
