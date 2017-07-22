import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars

import Routes from '../../Navigation/Routes';

describe('Navigation/Routes.js', () => {
  it('checks if all routes have all required properties', () => {
    expect(Object.keys(Routes).length).toBe(2);

    Object.keys(Routes).forEach((key) => {
      expect(Routes[key]().id).toBeDefined();
      expect(Routes[key]().title).toBeDefined();
      expect(Routes[key]().component).toBeDefined();
      expect(typeof Routes[key]().displayNavBar).toBe('boolean');
    });
  });
});
