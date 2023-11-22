import React from "react";
import "../App.css";
import SideNav from "../components/SideNav";
import TopNavbar from "../components/TopNavbar";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCard from "../components/ChartComponent";
import LongRange from "../components/LongRange";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopNavbar/>
      <div className="dashboard-container">
         <div className="dashboard-header">
          <p>23 October 2023</p>
         <WeatherCard /> 
         </div>

         <div className="dashboard-body"> 
         
         
         </div>



       
        

      <img className="vector" alt="Vector" src="vector-4.svg" />
      <img className="planner" alt="Planner" src="planner.png" />
      <div className="div-wrapper">
        <div className="text-wrapper-31">Alert</div>
      </div>
      <div className="overlap-6">
        <div className="text-wrapper-32">Send</div>
      </div>

      

       
      
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
        <div className="text-wrapper-20">Water Levels ssss</div>
          <LongRange/>
     
      </div>
        
      

      <SideNav />  
         </div>



  
      </div>
  );
};
