import React from 'react';
import { render } from 'react-dom';
import Toolbar from './components/Toolbar/Toolbar.js';

render(
  <Toolbar
    className='Toolbar Toolbar--deep-purple'
    textContent='React Component Catalog'
    homeURL='#'
  />,
  document.getElementById('Toolbar')
);