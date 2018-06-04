import { createAction } from 'redux-actions';
// import { getErrorMessage } from '../../../helpers';

export const TOGGLE_SIDEBAR = 'MAIN_PAGE/TOGGLE_SIDEBAR';
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;

export const OPEN_KEY_CHANGE = 'MAIN_PAGE/OPEN_KEY_CHANGE';
export type OPEN_KEY_CHANGE = typeof OPEN_KEY_CHANGE;

export interface ToggleSidebar {
  type: TOGGLE_SIDEBAR;
  payload: { isSidebarCollapsed: boolean };
}

export interface OpenKeyChange {
  type: OPEN_KEY_CHANGE;
  payload: {
    openKeys: string[];
  };
}

export const toggleSidebar = createAction(
  TOGGLE_SIDEBAR,
  (isSidebarCollapsed: boolean) => ({
    isSidebarCollapsed,
  }),
);

export const openKeyChange = createAction(
  OPEN_KEY_CHANGE,
  (openKeys: string[]) => ({
    openKeys,
  }),
);
