import { useState } from "react";
import './App.css';
import CurrentWeatherContainer from './components/CurrentWeatherContainer';
import WeeklyWeatherContainer from './components/WeeklyWeatherContainer';
import desert from './img/desert.jpg';
import {getCurrentWeek} from './util';

function App() {
  const [date, setDate] = useState(new Date());
  const [weekDict, setWeekDict] = useState(getCurrentWeek());

  return (
    <div className="App" style={{ backgroundImage: `url(${desert})`, backgroundSize: "cover"}}>
        <CurrentWeatherContainer date={date} setDate={setDate}/>
        <WeeklyWeatherContainer weekDict={weekDict}/>
    </div>
  );
}

export default App;