import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import renderer from 'react-test-renderer';

import Info from '../../routes/info';

describe('routes/info.js', () => {
  const props = {
    navigation: {}
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <Info {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
