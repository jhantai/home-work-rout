// import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css';
import React, {useEffect, useState} from "react";
import HomePage from "./pages/HomePage/HomePage";
import CurrentPage from "./pages/Currents/CurrentPage";
import WeatherPage from "./pages/Weather/WeatherPage";


function App() {

        return (
            <div className="app1">
                <div className="App">
                    {/*test*/}
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/weather" element={<WeatherPage />} />
                        <Route exact path="/current" element={<CurrentPage />} />
                    </Routes>
                </div>
            </div>
        );
}

export default App;
