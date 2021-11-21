import '../styles/CurrentWeatherContainer.css';
import Clock from './Clock';
import TodayWeather from './TodayWeather';

const CurrentWeatherContainer = ({date, setDate}) => {
    return (
        <div className="current_weather_container">
            <Clock date={date} setDate={setDate}/>
            <TodayWeather/>
        </div>
    );
}

export default CurrentWeatherContainer;