import React from 'react'; // eslint-disable-line no-unused-vars

import NavigationTitle from './navbar-title';
import NavigationButton from './navigation-button';
import NavigationBackButton from './navigation-back-button';

export default {

  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    return (
      <NavigationBackButton
        index={index}
        navigator={navigator}
        direction="left"
      />
    );
  },

  RightButton(route, navigator, index, navState) {
    if (route.id === 'home-view') {
      return null;
    }

    return (
      <NavigationButton
        route={route}
        index={index}
        navigator={navigator}
        direction="right"
      />
    );
  },

  Title(route, navigator, index, navState) {
    return (
      <NavigationTitle route={route} />
    );
  },

};
