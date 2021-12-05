import '../styles/WeeklyWeatherContainer.css';
import {Sunny, Cloudy, PartCloudy, Snowing, Raining} from './SvgComponents';
import {days, months} from "../consts"

const WeeklyWeatherContainer = ({weekDict}) => {
    return (
        <div className="weekly_weather_container">
            <div className="day_container">
                <p>{days[weekDict[0].getDay()]}</p>
                <p>{weekDict[0].getMonth() + 1}/{weekDict[0].getDate()}</p>
                <Cloudy/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[1].getDay()]}</p>
                <p>{weekDict[1].getMonth() + 1}/{weekDict[1].getDate()}</p>
                <PartCloudy/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[2].getDay()]}</p>
                <p>{weekDict[2].getMonth() + 1}/{weekDict[2].getDate()}</p>
                <Snowing/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[3].getDay()]}</p>
                <p>{weekDict[3].getMonth() + 1}/{weekDict[3].getDate()}</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[4].getDay()]}</p>
                <p>{weekDict[4].getMonth() + 1}/{weekDict[4].getDate()}</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[5].getDay()]}</p>
                <p>{weekDict[5].getMonth() + 1}/{weekDict[5].getDate()}</p>
                <Raining/>
                <p>20<span>&#xb0;</span></p>
            </div>
            <div className="day_container">
                <p>{days[weekDict[6].getDay()]}</p>
                <p>{weekDict[6].getMonth() + 1}/{weekDict[6].getDate()}</p>
                <Sunny/>
                <p>20<span>&#xb0;</span></p>
            </div>
        </div>
    )
}

export default WeeklyWeatherContainer;