import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import NavigationButton from '../../navigation/navigation-button';

describe('navigation/navigation-button.js', () => {
  it('renders correctly', () => {
    const props = {
      navigator: {
        push: jest.fn(),
        getCurrentRoutes: () => [
          { id: 'test' },
          { id: 'another-test' },
        ],
      },
    };

    const wrapper = shallow(
      <NavigationButton {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(1);

    wrapper.find('TouchableHighlight').simulate('press');
    expect(props.navigator.push).toHaveBeenCalled();
  });

  it('does not push if already in same view', () => {
    const props = {
      navigator: {
        push: jest.fn(),
        getCurrentRoutes: () => [
          { id: 'test' },
          { id: 'home-view' },
        ],
      },
    };

    const wrapper = shallow(
      <NavigationButton {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(1);

    wrapper.find('TouchableHighlight').simulate('press');
    expect(props.navigator.push).not.toHaveBeenCalled();
  });
});
