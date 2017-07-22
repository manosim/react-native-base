import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars

import RouteMapper from '../../navigation/route-mapper';

describe('navigation/route-mapper.js', () => {
  it('has all properties', () => {
    expect(Object.keys(RouteMapper).length).toEqual(3);
  });

  it('has a back(left) button', () => {
    const route = {};
    const index = 1;
    const navigator = {};

    const Component = RouteMapper.LeftButton(route, navigator, index);
    expect(Component).toBeDefined();
    expect(typeof Component).toEqual('object');
  });

  it('should render the title', () => {
    const route = {};

    const Component = RouteMapper.Title(route);
    expect(Component).toBeDefined();
    expect(typeof Component).toEqual('object');
  });

  it('should hide the back(left) button if no history', () => {
    const route = {};
    const index = 0;
    const navigator = {};

    const Component = RouteMapper.LeftButton(route, navigator, index);
    expect(Component).toBeDefined();
    expect(typeof Component).toEqual('object');
  });

  it('has a right button', () => {
    const route = {};
    const index = 1;
    const navigator = {};

    const Component = RouteMapper.RightButton(route, navigator, index);
    expect(Component).toBeDefined();
    expect(typeof Component).toEqual('object');
  });

  it('should hide the right button if in home', () => {
    const route = {
      id: 'home-view'
    };
    const index = 1;
    const navigator = {};

    const Component = RouteMapper.RightButton(route, navigator, index);
    expect(Component).toBeDefined();
    expect(typeof Component).toEqual('object');
  });
});
