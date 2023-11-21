import React, { Component } from "react";

    const API_KEY = "3f5852a9443b6b90e654b45036936dbc";

    class MyWeatherComponent extends Component {
        state = {
            weatherData: ""
        };

        componentDidMount() {
            this.fetchWeatherData();
        }

        fetchWeatherData = () => {
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
            )
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        weatherData: data
                    });
                });
        };

        render() {
            const { weatherData } = this.state;

            return (
                <div className="card">
                    <table>
                        <tbody>
                            <tr>
                                <td>City:</td>
                                <td>{weatherData.name}</td>
                            </tr>
                            <tr>
                                <td>Temperature:</td>
                                <td>{weatherData.main && weatherData.main.temp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    export default MyWeatherComponent;

