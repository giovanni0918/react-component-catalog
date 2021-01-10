import React from 'react';
import renderer from 'react-test-renderer';

import { Spinner } from './Spinner';

const SampleSpinner1 = (
    <Spinner status={"Loading"} />
);

const SampleSpinner2 = (
    <Spinner status={"Success"} />
);

test('It should render a div with className of Spinner-wrapper', () => {
    const testRenderer = renderer.create(<Spinner status={"Loading"} />);
    const tree = testRenderer.toJSON();
    const testInstance = testRenderer.root;
    expect(tree.props).toHaveProperty("className");
    expect(testInstance.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
});

test('It should not render anything', () => {
    const testRenderer = renderer.create(SampleSpinner2);
    const tree = testRenderer.toJSON();
    const testInstance = testRenderer.root;
    expect(testInstance.children.length).toBe(0);
    expect(tree).toMatchSnapshot();
});
