import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars

import Info from '../../routes/info';

import renderer from 'react-test-renderer';

describe('routes/info.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Info navigator={{}} />
    );

    expect(tree).toMatchSnapshot();
  });
});
