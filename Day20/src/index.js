

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './App.jsx';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
  <h1 className="head">Calorie Read Only</h1>
  <Cards
  heading="Fried Rice"
  para="you have consumed 90 cals today"
  />
  <Cards
  heading="Lassania"
  para="you have consumed 200 cals today"
  />
  <Cards
  heading="Pani Puri"
  para="you have consumed 10 cals today"
  />
  <Cards
  heading="Browne"
  para="you have consumed 180 cals today"
  />
  <Cards
  heading="Fried Rice"
  para="you have consumed 90 cals today"
  />
  <Cards
  heading='Lassania'
  para="you have consumed 200 cals today"
  />
  <Cards
  heading="Burger"
  para="you have consumed 69 calsz today"
  />
  <Cards
  heading="Coke"
  para="you have consumed 500 cals today"
  />
  </>,
  document.getElementById('root')
);
