import { useState } from "react";
import './App.css';
import CurrentWeatherContainer from './components/CurrentWeatherContainer';
import WeeklyWeatherContainer from './components/WeeklyWeatherContainer';
import desert from './img/desert.jpg';


function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App" style={{ backgroundImage: `url(${desert})`, backgroundSize: "cover"}}>
        <CurrentWeatherContainer date={date} setDate={setDate}/>
        <WeeklyWeatherContainer/>
    </div>
  );
}

export default App;