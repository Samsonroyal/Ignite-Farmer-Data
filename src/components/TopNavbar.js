import React from 'react';

const TopNavbar = () => {
    return (
        <div className="overlap">
            <img className="ellipse" alt="Ellipse" src="../Ellipse 11.png" />
            <div className="text-wrapper">Ignite Dashboard</div>
            <div className="wrapper">
                <div className="overlap-group1">
                    <img className="vector" alt="Vector" src="../vector-3.svg" />
                    <input className="searchbar" type="text" placeholder="Search" />
                </div>
            </div>
            <div className="text-wrapper-2">Welcome back Kwame.</div>        </div>

    );
};

export default TopNavbar;
