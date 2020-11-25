/**
 * Angular app side menu structure
 */
import angularIcon from '../assets/images/angular-grey.svg';
import angularActiveIcon from '../assets/images/angular-green.svg';
import homeIcon from '../assets/images/home.svg';
import homeActiveIcon from '../assets/images/home-green.svg';

const appMenu = [
  {
    title: 'Angular App',
    path: '/micro-frontends-angular-route',
    icon: angularIcon,
    activeIcon: angularActiveIcon,
  },
  {
    title: 'Home',
    path: '/micro-frontends-angular-route/home',
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
];

export default appMenu;