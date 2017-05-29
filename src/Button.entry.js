import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './components/Button/Button.js';

render(
  <Button
    className='Button Button--primary'
    onClick={(event) => console.log('Button Button--primary')}
    textContent='hello' />,
  document.getElementById('Button')
);