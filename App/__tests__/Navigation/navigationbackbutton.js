import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import NavigationBackButton from '../../Navigation/NavigationBackButton';

describe('Navigation/NavigationBackButton.js', () => {
  it('renders correctly', () => {
    const props = {
      navigator: {
        pop: jest.fn(),
      },
    };

    const wrapper = shallow(
      <NavigationBackButton {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(1);

    wrapper.find('TouchableHighlight').simulate('press');
    expect(props.navigator.pop).toHaveBeenCalledTimes(1);
  });
});
