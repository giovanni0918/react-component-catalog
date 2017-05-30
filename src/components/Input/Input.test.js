import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

const SampleInput = (
  <Input
    className='Input'
    type='email'
    id='email'
    name='email'
    onChange={(event) => console.log('value', event.target.value)}
  />
);

test('It should always render an input', () => {
  const component = renderer.create(SampleInput);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});