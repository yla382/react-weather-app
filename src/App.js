import './App.css';
import CurrentWeatherContainer from './components/CurrentWeatherContainer';
import WeeklyWeatherContainer from './components/WeeklyWeatherContainer';
import station from './img/station.jpg';

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi.pelmorex.com/api/v1/observation/placecode/cabc0308',
};


function App() {
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div className="App" style={{ backgroundImage: `url(${station})`}}>
        <CurrentWeatherContainer/>
        <WeeklyWeatherContainer/>
    </div>
  );
}

export default App;