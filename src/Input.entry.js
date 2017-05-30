import React from 'react';
import { render } from 'react-dom';
import Input from './components/Input/Input.js';

render(
  <Input
    className='Input'
    type='email'
    id='email'
    includeLabel={false}
    name='email'
    onBlur={(event) => console.info({ 'blurredAt': new Date().toTimeString().substring(0, 8) })}
    onChange={(event) => console.log({ 'value': event.target.value })}
    onFocus={(event) => console.info({ 'focusedAt': new Date().toTimeString().substring(0, 8) })}
    required={true}
  />,
  document.getElementById('Input')
);