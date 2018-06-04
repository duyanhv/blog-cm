import * as React from 'react';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import { CustomSearch } from './CustomSearch';
import { Notification } from './Notification';
import { LanguagePicker } from './LanguagePicker';
import './Header.less';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../redux/state';
// import { push } from 'react-router-redux';
// import { RouteUrls } from '../../routes/routes.constant';
import { logout } from '../../redux/profile/action';
import { Link } from 'react-router-dom';
import { ProfileState } from '../../redux/profile';
import { ProfilePageState } from '../../redux/ui/profile-page';
import { AppSettingsState } from '../../redux/app-settings';
import { MainPageState, toggleSidebar } from '../../redux/ui/main-page';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction, translate } from 'react-i18next';

interface HeaderProps extends I18nextProviderProps {
  profile: ProfileState;
  profilePage: ProfilePageState;
  appSettings: AppSettingsState;
  mainPage: MainPageState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

const Header = (props: HeaderProps) => {
  const onLogout = () => {
    // props.dispatch(push(`${props.appSettings.appBaseUrl}${RouteUrls.Login}`));
    props.dispatch(logout());
  };

  const menu: JSX.Element = (
    <Menu className="user-menu" selectedKeys={[]}>
      <Menu.Item>
        <Link to="/admin/main/profile" className="user-menu-item">
          <Icon type="user" className="user-menu-item-icon" />
          {props.t('Header.profile')}
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Icon type="setting" className="user-menu-item-icon" />
        {props.t('Header.settings')}
      </Menu.Item>

      <Menu.Item key="triggerError">
        <Icon type="close-circle" className="user-menu-item-icon" />
        {props.t('Header.report')}
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="logout">
        <div onClick={onLogout}>
          <Icon type="logout" className="user-menu-item-icon" />
          {props.t('Header.logout')}
        </div>
      </Menu.Item>
    </Menu>
  );

  const imageSrc: string = props.profilePage.imageSrc;

  return (
    <div className="header">
      <Icon
        className="trigger"
        type={props.mainPage.isSidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() =>
          props.dispatch(toggleSidebar(!props.mainPage.isSidebarCollapsed))
        }
      />

      <div className="header-right">
        <CustomSearch {...props} />

        <LanguagePicker
          {...props}
        />

        <div className="notification">
          <Notification />
        </div>

        <Dropdown overlay={menu}>
          <span className="avatar">
            <Avatar className="avatar-image" src={imageSrc} />
            <span className="avatar-name">{props.profile.fullName}</span>
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    profile: state.profile,
    profilePage: state.ui.profilePage,
    appSettings: state.appSettings,
    mainPage: state.ui.mainPage,
  };
};

export default connect(mapStateToProps)(translate()(Header));
