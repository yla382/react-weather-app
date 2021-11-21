import './App.css';
import CurrentWeatherContainer from './components/CurrentWeatherContainer';
import WeeklyWeatherContainer from './components/WeeklyWeatherContainer';
import desert from './img/desert.jpg';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${desert})`, backgroundSize: "cover"}}>
        <CurrentWeatherContainer/>
        <WeeklyWeatherContainer/>
    </div>
  );
}

export default App;