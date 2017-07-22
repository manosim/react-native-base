import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars

import { shallow } from 'enzyme';

import NavigationBar from '../../Navigation/NavigationBar';

describe('Navigation/NavigationBar.js', () => {
  it('renders correctly without any children', () => {
    const props = {
      navState: {
        routeStack: []
      },
      routeMapper: {
        Title: () => {},
        LeftButton: () => {},
        RightButton: () => {},
      }
    };

    const wrapper = shallow(
      <NavigationBar {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(0);
  });

  it('renders correctly with routes', () => {
    const props = {
      navState: {
        routeStack: [
          {
            displayNavBar: true
          },
          {
            displayNavBar: false
          }
        ]
      },
      routeMapper: {
        Title: () => {},
        LeftButton: () => {},
        RightButton: () => {},
      }
    };

    const wrapper = shallow(
      <NavigationBar {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(0);
  });
});
