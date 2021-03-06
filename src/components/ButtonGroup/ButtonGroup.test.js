import React from 'react';
import ButtonGroup from './ButtonGroup';
import renderer from 'react-test-renderer';

/**
 * ButtonGroup sample usage
 */
const SampleButtonGroup = (
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
    ]} />
);

/**
 * Checks that the ButtonGroup renders correctly
 */
test('It should always render a div', () => {
  const component = renderer.create(SampleButtonGroup);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Checks that the ButtonGroup is passed a buttons array
 */
test('It should have a prop children of type=array', () => {
  const component = renderer.create(SampleButtonGroup);
  let tree = component.toJSON();
  expect(Array.isArray(tree.children)).toBe(true);

});

/**
 * Checks that each child in prop children is of type=button
 */
test('It should only contain children of type=button', () => {
  const component = renderer.create(SampleButtonGroup);
  let tree = component.toJSON();
  const isButton = (childNode) => childNode.type === 'button';
  expect(tree.children.every(isButton)).toBe(true);
});