import '../styles/CurrentWeatherContainer.css';
import Clock from './Clock';
import TodayWeather from './TodayWeather';

const CurrentWeatherContainer = () => {
    return (
        <div className="current_weather_container">
            <Clock/>
            <TodayWeather/>
        </div>
    );
}

export default CurrentWeatherContainer;