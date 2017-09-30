import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import Home from '../../routes/home';

import renderer from 'react-test-renderer';

describe('routes/home.js', () => {
  const props = {
    navigation: {
      push: jest.fn()
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <Home {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should navigate to the info view', () => {
    const wrapper = shallow(
      <Home {...props} />
    );

    expect(wrapper).toBeDefined();

    wrapper.find('Button').simulate('press');
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
});
