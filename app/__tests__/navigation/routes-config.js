import React from 'react'; // eslint-disable-line no-unused-vars

import RoutesConfigs, {
  navigationOptions,
} from '../../navigation/routes-config';

describe('navigation/routes-config.js', () => {
  it('checks if all routes have all required properties', () => {
    expect(Object.keys(RoutesConfigs).length).toBe(2);

    Object.keys(RoutesConfigs).forEach(key => {
      expect(RoutesConfigs[key].screen).toBeDefined();
    });
  });
});
