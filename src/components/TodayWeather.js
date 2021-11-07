import '../styles/TodayWeather.css';

const TodayWeather = () => {
    return (
        <div className="today_weather">
            <div className="current_info_container">
                <h3 className="location_header text_center">Burnaby, BC</h3>
                <h1 className="text_center">25<span>&#xb0;</span></h1>
                <h3 className="text_center">Mostly Sunny</h3>
            </div>
        </div>
    )
}

export default TodayWeather;