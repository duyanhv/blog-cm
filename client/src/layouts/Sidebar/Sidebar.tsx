import * as React from 'react';
import { Menu, Icon } from 'antd';
import { RouteComponentProps, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SmallLogo from '../SmallLogo/SmallLogo';
import './Sidebar.less';
import { MainPageState, openKeyChange } from '../../redux/ui/main-page';
import { ProfileState } from '../../redux/profile';
import { AppState } from '../../redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import sidebarMenu from '../../constants/sidebar.constant';
import { checkOnePermission, checkAllPermissions } from '../../helpers';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction, translate } from 'react-i18next';

interface SidebarProps extends RouteComponentProps<any>, I18nextProviderProps {
  appBaseUrl: string;
  mainPage: MainPageState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class Sidebar extends React.Component<SidebarProps, any> {
  handleOpenChange = (openKeys: string[]) => {
    this.props.dispatch(openKeyChange(openKeys));
  };

  renderSubmenu = (submenu: any) => {
    if (
      checkOnePermission(submenu.permissions, this.props.profile.permissions)
    ) {
      return (
        <Menu.SubMenu
          key={submenu.key}
          title={
            <span>
              <Icon type={submenu.icon} />
              <span>{this.props.t(submenu.title)}</span>
            </span>
          }
          className="submenu"
        >
          {submenu.items.map(item => this.renderMenuItem(item))}
        </Menu.SubMenu>
      );
    } else {
      return;
    }
  };

  renderMenuItem = (menuitem: any) => {
    if (
      checkAllPermissions(menuitem.permissions, this.props.profile.permissions)
    ) {
      return (
        <Menu.Item key={`${this.props.appBaseUrl}${menuitem.key}`} className="submenu-item">
          <Link to={`${this.props.appBaseUrl}${menuitem.path}`}>
            <span>{this.props.t(menuitem.title)}</span>
          </Link>
        </Menu.Item>
      );
    } else {
      return;
    }
  };

  render(): JSX.Element {
    const openKeys = this.props.mainPage.isSidebarCollapsed
      ? {}
      : { openKeys: this.props.mainPage.openKeys };

    return (
      <div className="sidebar-menu">
        {this.props.mainPage.isSidebarCollapsed ? <SmallLogo /> : <Logo />}

        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          {...openKeys}
          onOpenChange={this.handleOpenChange}
          selectedKeys={[this.props.history.location.pathname]}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {sidebarMenu.map(submenu => this.renderSubmenu(submenu))}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  appBaseUrl: state.appSettings.appBaseUrl,
  mainPage: state.ui.mainPage,
  profile: state.profile,
});

export default connect(mapStateToProps)(translate()(Sidebar));
