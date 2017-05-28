import React, { Component } from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('It should always render a button', () => {
  const component = renderer.create(
    <Button
      className='Button Button--primary'
      onClick={() => { console.log('hello') }}
      textContent='hello' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});