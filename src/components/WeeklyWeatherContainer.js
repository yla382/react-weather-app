import '../styles/WeeklyWeatherContainer.css';
import {Sunny, Cloudy, PartCloudy, Snowing, Raining} from './SvgComponents';

const WeeklyWeatherContainer = () => {
    return (
        <div className="weekly_weather_container">
            <div className="day_container">
                <p>Sunday</p>
                <p>11/07</p>
                <Sunny/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Monday</p>
                <p>11/08</p>
                <Cloudy/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Tuesday</p>
                <p>11/09</p>
                <PartCloudy/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Wednesday</p>
                <p>11/10</p>
                <Snowing/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Thursday</p>
                <p>11/11</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Friday</p>
                <p>11/12</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>Saturday</p>
                <p>11/13</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
        </div>
    )
}

export default WeeklyWeatherContainer;