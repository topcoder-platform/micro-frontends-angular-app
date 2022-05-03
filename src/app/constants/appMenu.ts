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
    title: 'Auth Demo',
    path: '/micro-frontends-angular-route/auth',
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: 'No Sidebar Demo',
    path: '/micro-frontends-angular-route/no-sidebar',
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: 'View All Notifications',
    path: '/notifications',
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
];

export default appMenu;
