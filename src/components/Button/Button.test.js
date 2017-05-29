import React, { Component } from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

/**
 * Checks that the Button renders correctly
 */
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

/**
 * Checks that the Button is passed a textContent
 */
test('It should have a prop children of type=array', () => {
  const component = renderer.create(
    <Button
      className='Button Button--primary'
      onClick={() => { console.log('hello') }}
      textContent='hello' />
  );
  let tree = component.toJSON();
  expect(tree).toHaveProperty('children');
  expect(Array.isArray(tree.children)).toBe(true);
  expect(tree.children.length).toBe(1);
});

/**
 * Checks that the Button is passed an onClick handler
 */
test('It should have a prop onClick of type=function', () => {
  const component = renderer.create(
    <Button
      className='Button Button--primary'
      onClick={() => { console.log('hello') }}
      textContent='hello' />
  );
  let tree = component.toJSON();
  expect(tree.props).toHaveProperty('onClick');
  expect(typeof tree.props.onClick).toBe('function');
})