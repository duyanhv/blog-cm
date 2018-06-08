import * as React from 'react';
import { Modal, Tabs, Alert, Checkbox, Tree } from 'antd';
import UserTable from './UserTable';
import UserFilter from './UserFilter';
import { RouteComponentProps } from 'react-router';
import './UserListPage.less';
import { AppState } from '../../../../redux';
import { connect } from 'react-redux';
import { AppSettingsState } from '../../../../redux/app-settings';
import {
  UserListPageState,
  fetchData,
  searchChange,
  filterChange,
  openAddUserModal,
  closeAddUserModal,
  fetchRoles,
  addUserTabChange,
  updateUser,
  createNewUser,
  userInfoChange,
  fetchingError,
} from '../../../../redux/ui/user-list-page';
import { Dispatch } from 'redux';
import _ from 'lodash';
import UserPermissions from '../../../../constants/user-permissions.constant';
import { ProfileState } from '../../../../redux/profile';
import { FindAllUsersDetailDto } from '../../../../service-proxies/service-proxies';
import { AddNewUserForm } from './AddNewUserForm';
import { translate, TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface UserListPageProps
  extends RouteComponentProps<any>,
    I18nextProviderProps {
  appSettings: AppSettingsState;
  userListPage: UserListPageState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class UserListPage extends React.Component<UserListPageProps, any> {
  defaultPageNumber: number = 1;

  async componentDidMount(): Promise<any> {
    this.props.dispatch(fetchRoles());
    this.props.dispatch(
      fetchData({
        pageNumber: this.props.userListPage.pageNumber,
        pageSize: this.props.userListPage.pageSize,
        sortBy: this.props.userListPage.sortBy,
        asc: this.props.userListPage.asc,
      }),
    );
  }

  handleTableChange = async (
    pagination: any,
    _filters: any,
    sorter: any,
  ): Promise<void> => {
    this.props.dispatch(
      fetchData({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
        sortBy: sorter.field ? sorter.field : this.props.userListPage.sortBy,
        asc: sorter.order
          ? sorter.order === 'ascend'
            ? true
            : false
          : this.props.userListPage.asc,
      }),
    );
  };

  handleSearchChange = async (value: any): Promise<void> => {
    const debounced = _.debounce(
      () => this.props.dispatch(searchChange(value)),
      1000,
    );
    debounced();
  };

  handleFilterChange = async (value: any) => {
    this.props.dispatch(filterChange(value));
  };

  showAddUserModal = (record: FindAllUsersDetailDto) => {
    this.props.dispatch(openAddUserModal(record));
  };

  closeAddUserModal = () => {
    this.props.dispatch(closeAddUserModal());
  };

  handleCreateUserFormSubmit = async (): Promise<void> => {
    if (this.props.userListPage.currentUser._id) {
      if (
        !this.props.userListPage.currentUser.username ||
        !this.props.userListPage.currentUser.firstName ||
        !this.props.userListPage.currentUser.middleName ||
        !this.props.userListPage.currentUser.lastName ||
        !this.props.userListPage.currentUser.email
      ) {
        this.props.dispatch(
          fetchingError(this.props.t('UserListPage.fillInAllFields')),
        );
      } else {
        this.props.dispatch(updateUser(this.props.userListPage.currentUser));
      }
    } else {
      if (
        !this.props.userListPage.currentUser.username ||
        !this.props.userListPage.currentUser.password ||
        !this.props.userListPage.currentUser.firstName ||
        !this.props.userListPage.currentUser.middleName ||
        !this.props.userListPage.currentUser.lastName ||
        !this.props.userListPage.currentUser.email
      ) {
        this.props.dispatch(
          fetchingError(this.props.t('UserListPage.fillInAllFields')),
        );
      } else {
        this.props.dispatch(createNewUser(this.props.userListPage.currentUser));
      }
    }
  };

  render(): JSX.Element {
    const permissions = Object.keys(UserPermissions).map(
      item => UserPermissions[item],
    );

    return (
      <div className="user-list-page">
        <UserFilter
          handleSearchChange={this.handleSearchChange}
          handleFilterChange={this.handleFilterChange}
          showAddUserModal={this.showAddUserModal}
          {...this.props}
        />

        <UserTable
          handleTableChange={this.handleTableChange}
          showAddUserModal={this.showAddUserModal}
          {...this.props}
        />

        <Modal
          title={this.props.t('UserListPage.add')}
          okText={this.props.t('UserListPage.ok')}
          cancelText={this.props.t('UserListPage.cancel')}
          onOk={this.handleCreateUserFormSubmit}
          onCancel={this.closeAddUserModal}
          visible={this.props.userListPage.addUserModalVisible}
        >
          {this.props.userListPage.errorMessage ? (
            <Alert
              message={this.props.userListPage.errorMessage}
              type="error"
              showIcon={true}
            />
          ) : null}

          <Tabs
            activeKey={this.props.userListPage.openTabKey}
            onChange={activeKey =>
              this.props.dispatch(addUserTabChange(activeKey))
            }
          >
            <Tabs.TabPane
              tab={this.props.t('UserListPage.userInfo')}
              key="user-info"
            >
              <AddNewUserForm
                closeModal={this.closeAddUserModal}
                {...this.props}
              />
            </Tabs.TabPane>

            <Tabs.TabPane
              tab={this.props.t('UserListPage.roles')}
              key="user-roles"
            >
              <div className="checkbox-group">
                <Checkbox.Group
                  value={this.props.userListPage.currentUser.roles}
                  options={this.props.userListPage.roles.map(item => ({
                    value: item.name,
                    label: item.name,
                  }))}
                  onChange={checkedValue =>
                    this.props.dispatch(userInfoChange({ roles: checkedValue }))
                  }
                />
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane
              tab={this.props.t('UserListPage.permissions')}
              key="user-permissions"
            >
              <Tree
                checkable={true}
                multiple={true}
                defaultExpandAll={true}
                checkedKeys={this.props.userListPage.currentUser.permissions}
                onCheck={(checkedKeys, event: any) =>
                  this.props.dispatch(
                    userInfoChange({
                      permissions: checkedKeys.filter(
                        item => item.indexOf('.') !== -1,
                      ),
                    }),
                  )
                }
              >
                <Tree.TreeNode
                  title={this.props.t('permissions.UsersManagement')}
                  key="Users"
                >
                  {permissions
                    .filter(ite => ite.indexOf('Users') === 0)
                    .map(item => (
                      <Tree.TreeNode
                        title={this.props.t(`permissions.${item}`)}
                        key={item}
                      />
                    ))}
                </Tree.TreeNode>

                <Tree.TreeNode
                  title={this.props.t('permissions.RolesManagement')}
                  key="Roles"
                >
                  {permissions
                    .filter(ite => ite.indexOf('Roles') === 0)
                    .map(item => (
                      <Tree.TreeNode
                        title={this.props.t(`permissions.${item}`)}
                        key={item}
                      />
                    ))}
                </Tree.TreeNode>
              </Tree>
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  appSettings: appState.appSettings,
  userListPage: appState.ui.userListPage,
  profile: appState.profile,
});

export default connect(mapStateToProps)(translate()(UserListPage));
