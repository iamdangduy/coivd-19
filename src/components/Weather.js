import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";

function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState(0);

    const [weather1, setWeather1] = useState('');
    const [city1, setCity1] = useState('');
    const [temp1, setTemp1] = useState(0);

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=4fbcb0f0ec6f42a9b084388c81f36889')
          .then(response => response.json())
          .then(data => {
            setWeather(data.weather[0].main);
            setCity(data.name);
            setTemp(data.main.temp);
          })
      }, [])

      useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=4fbcb0f0ec6f42a9b084388c81f36889')
          .then(response => response.json())
          .then(data => {
            setWeather1(data.weather[0].main);
            setCity1(data.name);
            setTemp1(data.main.temp);
            // console.log((data.main.temp).toFixed(1));
          })
      }, [])

    return (
        <div className="Weather">
            <h3 className='mb-3'>Thời tiết<span className="badge badge-info ml-2">Today</span></h3>
            
            <div className="row">
                <div className="col-6 weather-child" style={{padding: '0px'}}>
                    <img className="weather-img" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Hanoi_skyline_at_night.jpg"></img>
                </div>
                
                <div className="col-3" style={{background: 'lightblue', height: '430px'}}>
                    <div className="information" style={{marginTop: '140px'}}>
                        <h1 style={{textAlign: 'center'}}>{city}, VietNam</h1>
                        <h3 style={{textAlign: 'center'}}>{weather}</h3>
                        <h1 style={{textAlign: 'center'}}>{temp - 273.15}°C</h1>
                    </div>
                </div>
                <div className="col-3" style={{background: 'black', height: '430px'}}>
                    <div className="information" style={{marginTop: '140px'}}>
                        <h1 style={{textAlign: 'center', color: 'white'}}>{city1}, France</h1>
                        <h3 style={{textAlign: 'center', color: 'white'}}>{weather1}</h3>
                        <h1 style={{textAlign: 'center', color: 'white'}}>{(temp1 - 273.15).toFixed(1)}°C</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;