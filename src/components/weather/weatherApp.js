import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';
import '../../css/weather.css';
import { Grid, Cell } from 'react-mdl';

const API_KEY = '553de38aa965b554fa2e8d0cf9bec224';

class WeatherApp extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault(); //отмена перезагрузки страницы
    const city = e.target.elements.city.value; //город по выбранному элементу (делегирование) и элементу-аттрибуту name="city"
    const country = e.target.elements.country.value;
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    //console.log(data);

    if (city && country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please input search values...'
      });
    }
  };

  render() {
    return (
      <Grid>
        <Cell col={6}>
          <Info />
        </Cell>
        <Cell col={6}>
          <Form loadWeather={this.getWeather} />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            sunrise={this.state.humidity}
            sunset={this.state.description}
            error={this.state.error}
          />
        </Cell>
      </Grid>
    );
  }
}

export default WeatherApp;
