import Home from '../Routes/Home';
import Info from '../Routes/Info';

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
