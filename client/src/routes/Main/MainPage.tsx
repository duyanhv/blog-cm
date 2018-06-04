import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router';
import UsersRoute from './Users/UsersRoute';
import ProfilePage from './Profile/ProfilePage';
import RolesPage from './Roles/RolesPage';
import CompanyPage from './Company/CompanyPage';
import SideBar from '../../layouts/Sidebar/Sidebar';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import PageHeader from '../../layouts/PageHeader/PageHeader';
import UploadImagePage from './Upload/UploadImagePage';
import './MainPage.less';
import UserPermissions from '../../constants/user-permissions.constant';
import { Authorize } from '../../components';
import { AppState } from '../../redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainPageState } from '../../redux/ui/main-page';
import { ProfileState } from '../../redux/profile';
import { AppSettingsState } from '../../redux/app-settings';
import { TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { UploadImagePageState } from '../../redux/ui/upload-image-page';
import BlogPage from './Blog/BlogPage';

interface MainPageProps extends RouteComponentProps<any>, I18nextProviderProps {
  appSettings: AppSettingsState;
  mainPage: MainPageState;
  profile: ProfileState;
  uploadImagePage: UploadImagePageState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class MainPage extends React.Component<MainPageProps, any> {
  render(): JSX.Element {
    const { match } = this.props;
    const RedirectNotFound = () => <Redirect to="/error/400" />;
    return (
      <div className="main-page">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible={true}
            collapsed={this.props.mainPage.isSidebarCollapsed}
            breakpoint="lg"
            width={288}
            className="sider"
          >
            <SideBar {...this.props} />
          </Layout.Sider>

          <Layout>
            <Layout.Header style={{ padding: 0 }}>
              <Header />
            </Layout.Header>

            <Layout.Content>
              <PageHeader {...this.props} />
              <Switch>
                <Route
                  exact={true}
                  path={`${match.url}/`}
                  component={ProfilePage}
                />
                <Route path={`${match.url}/profile`} component={ProfilePage} />
                <Route
                  path={`${match.url}/users`}
                  component={Authorize(UsersRoute, UserPermissions.USERS_VIEW)}
                />
                <Route
                  path={`${match.url}/roles`}
                  component={Authorize(RolesPage, UserPermissions.ROLES_VIEW)}
                />
                <Route
                  path={`${match.url}/company`}
                  component={Authorize(CompanyPage, UserPermissions.USERS_VIEW)}
                />
                <Route
                  path={`${match.url}/uploadImages`}
                  component={UploadImagePage}
                />
                <Route
                  path={`${match.url}/blog`}
                  component={Authorize(BlogPage, UserPermissions.USERS_VIEW)}
                />
                <Route component={RedirectNotFound} />
              </Switch>
            </Layout.Content>

            <Layout.Footer style={{ padding: 0 }}>
              <Footer />
            </Layout.Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  appSettings: state.appSettings,
  profile: state.profile,
  mainPage: state.ui.mainPage,
  uploadImagePage: state.ui.uploadImgPage,
});

export default connect(mapStateToProps)(MainPage);
