import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../screen/home/module/homePage';

test('renders correctly', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
