import 'react-native';
import { View } from 'react-native';
import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';

import SceneContainer from '../../Navigation/SceneContainer';

describe('Navigation/SceneContainer.js', () => {
  it('renders correctly', () => {
    const props = {
      navigator: {},
      route: {
        component: View
      }
    };

    const wrapper = shallow(
      <SceneContainer {...props} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().length).toEqual(1);
  });
});
