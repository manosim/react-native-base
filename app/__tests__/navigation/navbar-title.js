import 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import NavbarTitle from '../../navigation/navbar-title';

describe('navigation/navbar-title.js', () => {
  it('renders correctly', () => {
    const props = {
      route: {
        title: 'View Title',
      },
    };

    const wrapper = shallow(
      <NavbarTitle {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(1);
  });
});
