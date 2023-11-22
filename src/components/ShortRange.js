import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const ShortRange = () => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://lazy-blue-dibbler-ring.cyclic.app/api/data/daily?lat=5.62518719526291&long=-0.22263491962881826"
                );
                const data = JSON.parse(response.data);
                console.log(data);
                const dailyData = data.daily.map((day) => {
                    const date = new Date(day.date);
                    return {
                        date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                        evapotranspiration: day.evapotr,
                        fieldCapacity: day.fcat,
                        maximumTemperature: day.maxtemp,
                        minimumTemperature: day.mintemp,
                        peakWindGust: day.pwindgust,
                        skinTemperature: day.skin_temp,
                        soilMoisture1: day.soil_moist_1,
                        soilMoisture2: day.soil_moist_2,
                        soilMoisture3: day.soil_moist_3,
                        soilMoisture4: day.soil_moist_4,
                        soilTemperature1: day.soil_temp_1,
                        soilTemperature2: day.soil_temp_2,
                        soilTemperature3: day.soil_temp_3,
                        soilTemperature4: day.soil_temp_4,
                        sunshine: day.sunshine,
                    };
                });
                setChartData(dailyData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData) {
            renderChart();
        }
    }, [chartData]);

    const renderChart = () => {
        const labels = chartData.map((day) => day.date);

        const chartConfig = {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Evapotranspiration",
                        data: chartData.map((day) => day.evapotranspiration),
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                    {
                        label: "Field Capacity",
                        data: chartData.map((day) => day.fieldCapacity),
                        fill: false,
                        borderColor: "rgb(255, 99, 132)",
                        tension: 0.1,
                    },
                    {
                        label: "Maximum Temperature (°C)",
                        data: chartData.map((day) => day.maximumTemperature),
                        fill: false,
                        borderColor: "rgb(153, 102, 255)",
                        tension: 0.1,
                    },
                    {
                        label: "Minimum Temperature (°C)",
                        data: chartData.map((day) => day.minimumTemperature),
                        fill: false,
                        borderColor: "rgb(0, 0, 255)",
                        tension: 0.1,
                    },
                    {
                        label: "Peak Wind Gust (m/s)",
                        data: chartData.map((day) => day.peakWindGust),
                        fill: false,
                        borderColor: "rgb(255, 159, 64)",
                        tension: 0.1,
                    },
                    {
                        label: "Skin Temperature (°C)",
                        data: chartData.map((day) => day.skinTemperature),
                        fill: false,
                        borderColor: "rgb(128, 0, 0)",
                        tension: 0.1,
                    },
                    {
                        label: "Soil Moisture 1",
                        data: chartData.map((day) => day.soilMoisture1),
                        fill: false,
                        borderColor: "rgb(178, 34, 34)",
                        tension: 0.1,
                    },
                    {
                        label: "Soil Moisture 2",
                        data: chartData.map((day) => day.soilMoisture2),
                        fill: false,
                        borderColor: "rgb(240, 128, 128)",
                        tension: 0.1,
                    },
                    {
                        label: "Soil Moisture 3",
                        data: chartData.map((day) => day.soilMoisture3),
                        fill: false,
                        borderColor: "rgb(0, 255, 0)",
                        tension: 0.1,
                    },
                    {
                        label: "Soil Moisture 4",
                        data: chartData.map((day) => day.soilMoisture4),
                        fill: false,
                        borderColor: "rgb(0, 128, 0)",
                        tension: 0.1,
                    },
                    {
                        label: "Sunshine",
                        data: chartData.map((day) => day.sunshine),
                        fill: false,
                        borderColor: "rgb(255, 215, 0)",
                        tension: 0.1,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },        };


        const renderChart = () => {
            const labels = chartData.map((day) => day.date);

            const chartConfig = {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Evapotranspiration",
                            data: chartData.map((day) => day.evapotranspiration),
                            fill: false,
                            borderColor: "rgb(75, 192, 192)",
                            tension: 0.1,
                        },
                        // ... rest of the datasets
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const ctx = chartRef.current.getContext("2d");
            new Chart(ctx, chartConfig);
        };

        return <canvas ref={chartRef} />;
        };    
    return <canvas ref={chartRef} />;
};

export default ShortRange;
