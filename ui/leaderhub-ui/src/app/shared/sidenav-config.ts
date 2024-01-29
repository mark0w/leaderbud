import { SidenavItem } from '../models/sidenav-item.model';
import { VIEWS_CONFIG } from './views-config';

export const SIDENAV_ITEMS: SidenavItem[] = [
  new SidenavItem('Home', ''),
  new SidenavItem('Leaderboards', `${VIEWS_CONFIG.LEADERBOARDS.path}`),
  new SidenavItem('Statistics', `${VIEWS_CONFIG.STATISTICS.path}`),
  new SidenavItem('Settings', `${VIEWS_CONFIG.SETTINGS.path}`),
];
