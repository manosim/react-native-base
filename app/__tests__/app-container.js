import 'react-native';
import renderer from 'react-test-renderer';
import { BackHandler } from 'react-native'; // eslint-disable-line no-duplicate-imports
import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer, mapStateToProps } from '../app-container';

describe('app-container.js', () => {
  const props = {
    dispatch: jest.fn(),
    nav: {
      index: 2,
    },
  };

  beforeEach(() => {
    props.dispatch.mockReset();
  });

  it('test the mapStateToProps function', () => {
    const state = {
      navigation: {},
    };

    const caseProps = mapStateToProps(state);

    expect(caseProps.nav).toEqual({});
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AppContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should press the BackHandler button(with history)', () => {
    let backCallback = null;

    spyOn(
      BackHandler,
      'addEventListener'
    ).and.callFake((callbackName, callback) => {
      backCallback = callback;
    });

    const wrapper = shallow(<AppContainer {...props} />);

    backCallback();

    expect(wrapper).toBeDefined();
    expect(BackHandler.addEventListener).toHaveBeenCalledTimes(1);
    expect(props.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should press the BackHandler button(without history)', () => {
    const caseProps = {
      ...props,
      nav: {
        index: 0,
      },
    };
    let backCallback = null;

    spyOn(
      BackHandler,
      'addEventListener'
    ).and.callFake((callbackName, callback) => {
      backCallback = callback;
    });

    const wrapper = shallow(<AppContainer {...caseProps} />);
    const pop = jest.fn();

    backCallback();

    expect(wrapper).toBeDefined();
    expect(pop).not.toHaveBeenCalled();
    expect(BackHandler.addEventListener).toHaveBeenCalledTimes(1);
    expect(props.dispatch).toHaveBeenCalledTimes(0);

    BackHandler.addEventListener.calls.reset();
  });
});
