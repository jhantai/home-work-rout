import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h2>Выберите страницу</h2>
            <a href="/weather"><input type="button" value='Прогноз погоды'/></a>
            <a href="/current"><input type="button" value='Курс валют'/></a>
        </div>
    );
};

export default HomePage;