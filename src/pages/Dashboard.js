import React from "react";
import "../App.css";
import SideNav from "../components/SideNav";
import TopNavbar from "../components/TopNavbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCard from "../components/ChartComponent";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopNavbar    />
        <div className="text-wrapper-3">23 October 2023</div>
        <WeatherCard />
      
      <div className="overlap-2">
        <div className="rectangle" />
        <div className="text-wrapper-12">Plant Activity</div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="text-wrapper-13">Weekly</div>
        <img className="img" alt="Ellipse" src="ellipse-12.svg" />
        <img className="ellipse-8" alt="Ellipse" src="ellipse-13.svg" />
        <img className="ellipse-9" alt="Ellipse" src="ellipse-14.svg" />
        <div className="text-wrapper-14">Final growth</div>
        <div className="text-wrapper-15">Vegetation</div>
        <div className="text-wrapper-16">Seed Phase</div>
        <div className="text-wrapper-17">week 1</div>
        <div className="text-wrapper-18">week 2</div>
        <div className="text-wrapper-19">week 3</div>
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="line-2" alt="Line" src="line-2.svg" />
        <img className="line-3" alt="Line" src="line-3.svg" />
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-20">Water Levels</div>
        <div className="text-wrapper-21">Tomato</div>
        <div className="overlap-4">
          <div className="overlap-5">
            <img className="mark-area" alt="Mark area" src="mark-area.svg" />
            <img className="line-4" alt="Line" src="line-4.svg" />
            <img className="line-5" alt="Line" src="line-5.svg" />
            <img className="line-6" alt="Line" src="line-6.svg" />
            <img className="line-7" alt="Line" src="line-7.svg" />
            <div className="text-wrapper-22">850</div>
          </div>
          <p className="element">
            <span className="span">0</span>
            <span className="text-wrapper-23">mm</span>
          </p>
          <div className="text-wrapper-24">250</div>
          <div className="text-wrapper-25">650</div>
        </div>
        <div className="text-wrapper-26">Jan</div>
        <div className="text-wrapper-27">Feb</div>
        <div className="text-wrapper-28">Mar</div>
        <div className="text-wrapper-29">Jul</div>
        <div className="text-wrapper-30">Jun</div>
      </div>
      <img className="vector" alt="Vector" src="vector-4.svg" />
      <img className="planner" alt="Planner" src="planner.png" />
      <div className="div-wrapper">
        <div className="text-wrapper-31">Alert</div>
      </div>
      <div className="overlap-6">
        <div className="text-wrapper-32">Send</div>
      </div>
      <SideNav />    
      </div>
  );
};
