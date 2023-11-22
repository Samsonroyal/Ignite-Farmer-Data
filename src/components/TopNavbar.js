import React from 'react';

const TopNavbar = () => {
    return (
        <div className="navbar">
            <image className="ellipse" alt="Ellipse" src="../Ellipse 11.png" />
            <div className="navbar-title">Ignite Dashboard</div>
            <div className="searchbar-holder">
               
                    <input className="searchbar" type="text" placeholder="Search" />
               
            </div>
            <div className="navbar-welcome">Welcome back Kwame.
            <span role="img" alt="hello">
            👋
          </span>
            </div>        </div>

    );
};

export default TopNavbar;
