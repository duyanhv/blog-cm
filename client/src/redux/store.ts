import {
  combineReducers,
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import runSagas from './saga';
import localStorageMiddleware from './middlewares/local-storage.middleware';
import { appSettingsReducer } from './app-settings';
import { loginPageReducer } from './ui/login-page';
import { profileReducer } from './profile';
import createHistory from 'history/createBrowserHistory';
import { AppState } from '.';
import { mainPageReducer } from './ui/main-page';
import { rolePageReducer } from './ui/role-page';
import { userListPageReducer } from './ui/user-list-page';
import { companyPageReducer } from './ui/company-page';
import { profilePageReducer } from './ui/profile-page';
import { uploadImgPageReducer } from './ui/upload-image-page';
import { blogPageReducer } from './ui/blog-page';
import { teacherPageReducer } from './ui/teacher-page';
import menuConfigPageReducer from './ui/menuconfig-page/reducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const historyRouterMiddleware = routerMiddleware(history);

// create store
const store = reduxCreateStore<AppState>(
  combineReducers({
    appSettings: appSettingsReducer,
    profile: profileReducer,
    ui: combineReducers({
      loginPage: loginPageReducer,
      mainPage: mainPageReducer,
      rolePage: rolePageReducer,
      userListPage: userListPageReducer,
      companyPage: companyPageReducer,
      profilePage: profilePageReducer,
      uploadImgPage: uploadImgPageReducer,
      blogPage: blogPageReducer,
      teacherPage: teacherPageReducer,
      menuConfigPage: menuConfigPageReducer,
    }),
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      historyRouterMiddleware,
      sagaMiddleware,
      localStorageMiddleware,
    ),
  ),
);

// run sagas
runSagas(sagaMiddleware);

export { store, history };
