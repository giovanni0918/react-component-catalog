import React from 'react';
import Toolbar from './Toolbar';
import renderer from 'react-test-renderer';

const SampleToolbar = (
  <Toolbar
    className='Toolbar Toolbar--deep-purple'
    textContent='React Component Catalog'
    homeURL='#'
  />
);

test('It should always render a header', () => {
  const component = renderer.create(SampleToolbar);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should only contain children of type=a', () => {
  const component = renderer.create(SampleToolbar);
  let tree = component.toJSON();
  const isLink = (nodeChild) => nodeChild.type === 'a';
  expect(tree.children.every(isLink)).toBe(true);
});