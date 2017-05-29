import React from 'react';
import { render } from 'react-dom';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.js';

render(
  <ButtonGroup
    className='ButtonGroup'
    buttons={[
      {
        'className': 'Button',
        onClick() { console.log('button') },
        'textContent': 'button'
      },
      {
        'className': 'Button Button--default',
        onClick() { console.log('default') },
        'textContent': 'default'
      },
      {
        'className': 'Button Button--primary',
        onClick() { console.log('primary') },
        'textContent': 'primary'
      },
      {
        'className': 'Button Button--info',
        onClick() { console.log('info') },
        'textContent': 'info'
      },
      {
        'className': 'Button Button--success',
        onClick() { console.log('success') },
        'textContent': 'success'
      },
      {
        'className': 'Button Button--warning',
        onClick() { console.log('warning') },
        'textContent': 'warning'
      },
      {
        'className': 'Button Button--danger',
        onClick() { console.log('danger') },
        'textContent': 'danger'
      }
    ]} />,
  document.getElementById('ButtonGroup')
);