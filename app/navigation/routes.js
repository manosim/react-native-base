import Home from '../routes/home';
import Info from '../routes/info';

export default {
  home() {
    return {
      id: 'home-view',
      title: 'Home',
      component: Home,
      displayNavBar: true,
    };
  },

  info() {
    return {
      id: 'info-view',
      title: 'Info',
      component: Info,
      displayNavBar: true,
    };
  },

};
