import React, { Component } from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('should always render a button', () => {
    const buttons = lockScreen().find("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});