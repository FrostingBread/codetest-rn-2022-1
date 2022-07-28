import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalCardList from '~/components/horizontalCardList';

test('test Assessment point 999999', () => {
  const tree = renderer
    .create(
      <HorizontalCardList
        data={[
          {
            name: 'Assessment A',
            image: 'https://via.placeholder.com/150"',
            point: 99999999,
          },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('test Assessment point 0', () => {
  const tree = renderer
    .create(
      <HorizontalCardList
        data={[
          {
            name: 'Assessment B',
            image: 'https://via.placeholder.com/150"',
            point: 0,
          },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
