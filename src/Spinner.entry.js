import React from 'react';
import { render } from 'react-dom';
import {Spinner} from './components/Spinner/Spinner';

render(
  <Spinner status="Loading"></Spinner>,
  document.getElementById('Spinner')
);