import { SagaMiddleware } from 'redux-saga';
import { loginPageSaga } from './ui/login-page';
import profileSaga from './profile/saga';
import { loadAppSettingsSaga } from './app-settings';
import { rolePageSaga } from './ui/role-page';
import { userListPageSaga } from './ui/user-list-page';
import { companyPageSaga } from './ui/company-page';
import { profilePageSaga } from './ui/profile-page';
import { uploadImgPageSaga } from './ui/upload-image-page';
import { teacherPageSaga } from './ui/teacher-page';
import blogPageSaga from './ui/blog-page/saga';
const runSagas = (sagaMiddleware: SagaMiddleware<{}>) => {
  sagaMiddleware.run(profileSaga);
  sagaMiddleware.run(loginPageSaga);
  sagaMiddleware.run(loadAppSettingsSaga);
  sagaMiddleware.run(rolePageSaga);
  sagaMiddleware.run(userListPageSaga);
  sagaMiddleware.run(companyPageSaga);
  sagaMiddleware.run(profilePageSaga);
  sagaMiddleware.run(uploadImgPageSaga);
  sagaMiddleware.run(blogPageSaga);
  sagaMiddleware.run(teacherPageSaga);
};

export default runSagas;
