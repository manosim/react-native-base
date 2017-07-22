import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import Home from '../../routes/home';

import renderer from 'react-test-renderer';

describe('routes/home.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home navigator={{}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should navigate to the info view', () => {
    const props = {
      navigator: {
        push: jest.fn()
      }
    };

    const wrapper = shallow(
      <Home {...props} />
    );

    expect(wrapper).toBeDefined();

    wrapper.find('Button').simulate('press');
    expect(props.navigator.push).toHaveBeenCalled();
  });
});
