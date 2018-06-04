import {
  ToggleSidebar,
  TOGGLE_SIDEBAR,
  OpenKeyChange,
  OPEN_KEY_CHANGE,
} from './action';
import MainPageState from './state';
import { handleActions } from 'redux-actions';

const initialState: MainPageState = {
  isSidebarCollapsed: false,
  openKeys: ['user-management'],
};

const toggleSidebarReducer = (state: MainPageState, action: ToggleSidebar) => {
  return {
    ...state,
    isSidebarCollapsed: action.payload.isSidebarCollapsed,
  };
};

const openKeyChangeReducer = (state: MainPageState, action: OpenKeyChange) => {
  return {
    ...state,
    openKeys:
      action.payload.openKeys.length > 1
        ? [action.payload.openKeys[action.payload.openKeys.length - 1]]
        : [action.payload.openKeys[0]],
  };
};

const mainPageReducer = handleActions<MainPageState, any>(
  {
    [TOGGLE_SIDEBAR]: toggleSidebarReducer,
    [OPEN_KEY_CHANGE]: openKeyChangeReducer,
  },
  initialState,
);
export { mainPageReducer, initialState };
