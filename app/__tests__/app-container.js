import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { BackAndroid } from 'react-native';

import AppContainer from '../app-container';

import renderer from 'react-test-renderer';

describe('app-container.js', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AppContainer />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should press the BackAndroid button(with history)', function () {
    let backCallback = null;

    spyOn(BackAndroid, 'addEventListener').and.callFake((callbackName, callback) => {
      backCallback = callback;
    });

    const wrapper = shallow(<AppContainer />);
    const pop = jest.fn();

    wrapper.instance().navigator = {
      getCurrentRoutes: () => [{}, {}],
      pop
    };

    backCallback();

    expect(wrapper).toBeDefined();
    expect(pop).toHaveBeenCalledTimes(1);
    expect(BackAndroid.addEventListener).toHaveBeenCalledTimes(1);

    BackAndroid.addEventListener.calls.reset();
  });

  it('should press the BackAndroid button(without history)', function () {
    let backCallback = null;

    spyOn(BackAndroid, 'addEventListener').and.callFake((callbackName, callback) => {
      backCallback = callback;
    });

    const wrapper = shallow(<AppContainer />);
    const pop = jest.fn();

    wrapper.instance().navigator = {
      getCurrentRoutes: () => [],
      pop
    };

    backCallback();

    expect(wrapper).toBeDefined();
    expect(pop).not.toHaveBeenCalled();
    expect(BackAndroid.addEventListener).toHaveBeenCalledTimes(1);

    BackAndroid.addEventListener.calls.reset();
  });

  it('should test the SceneContainer', function () {
    const route = {
      id: 'test-view',
      title: 'Test Me',
    };

    const navigator = {
      getCurrentRoutes: () => 2,
    };

    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toBeDefined();

    const navigatorComponent = wrapper.find('Navigator');

    navigatorComponent.props().renderScene(route, navigator);
  });


  it('should press the SceneContainer onBack', function () {
    const route = {
      index: 1
    };

    const navigator = {
      pop: jest.fn()
    };

    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toBeDefined();

    const navigatorComponent = wrapper.find('Navigator');
    const sceneContainer = navigatorComponent.props().renderScene(route, navigator);

    sceneContainer.props.onBack();

    expect(navigator.pop).toHaveBeenCalled();
    expect(navigator.pop).toHaveBeenCalledTimes(1);
  });

});
