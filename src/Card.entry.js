import React from 'react';
import { render } from 'react-dom';
import Card from './components/Card/Card.js';
import Button from './components/Button/Button.js';

render(
  <Card
    className='Card'
    heading='Google Pixel'
    copy='Copper mug pork belly skateboard, freegan echo park fixie stumptown. Celiac banh mi tumblr fanny pack, intelligentsia live-edge glossier skill. Fanny pack pinterest celiac raw denim. Venmo master cleanse seitan williamsburg fab, mixtape sriracha synth lyft.'>
    <Button
      className='Button Button--primary'
      onClick={() => console.log('button inside a card')}
      textContent='button inside a card'
    />
  </Card>,
  document.getElementById('Card')
);