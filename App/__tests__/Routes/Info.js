import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars

import Info from '../../Routes/Info';

import renderer from 'react-test-renderer';

describe('Routes/Info.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Info navigator={{}} />
    );

    expect(tree).toMatchSnapshot();
  });
});
