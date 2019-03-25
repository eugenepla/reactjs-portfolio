import React from 'react';

const Form = props => (
  <form onSubmit={props.loadWeather}>
    <input type="text" name="city" placeholder="Город" />
    <input type="text" name="country" placeholder="Country..." />
    <button>Получить погоду</button>
  </form>
);

export default Form;