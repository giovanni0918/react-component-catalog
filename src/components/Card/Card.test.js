import React from 'react';
import Card from './Card';
import Button from '../Button/Button.js';
import renderer from 'react-test-renderer';

const SampleCard = (
  <Card
    className='Card'
    heading='Google Pixel'
    copy='Copper mug pork belly skateboard, freegan echo park fixie stumptown. Celiac banh mi tumblr fanny pack, intelligentsia live-edge glossier skill. Fanny pack pinterest celiac raw denim. Venmo master cleanse seitan williamsburg fab, mixtape sriracha synth lyft.'>
    <Button
      className='Button Button--primary'
      onClick={() => console.log('button inside a card')}
      textContent='button inside a card'
    />
  </Card>
);

test('It should always render a div', () => {
  const component = renderer.create(SampleCard);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should have a prop children of type=array', () => {
  const component = renderer.create(SampleCard);
  let tree = component.toJSON();
  expect(Array.isArray(tree.children)).toBe(true);
  expect(tree.children.length).toBeGreaterThanOrEqual(2);
});