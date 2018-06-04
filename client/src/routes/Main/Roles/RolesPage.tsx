import * as React from 'react';
import { Modal, Tabs, Input, Tree, Alert, Checkbox } from 'antd';
import RolesTable from './RolesTable';
import RolesFilter from './RolesFilter';
import './RolesPage.less';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/state';
import ProfileState from '../../../redux/profile/state';
import { RouteComponentProps } from 'react-router-dom';
import UserPermissions from '../../../constants/user-permissions.constant';
import * as _ from 'lodash';
import { AppSettingsState } from '../../../redux/app-settings';
import { Dispatch } from 'redux';
import {
  fetchData,
  roleNameChange,
  rolePermissionsChange,
  openRoleModal,
  closeRoleModal,
  createRole,
  updateRole,
  openDeleteModal,
  closeDeleteModal,
  RolePageState,
} from '../../../redux/ui/role-page';
import {
  deleteRole,
  filterChange,
  searchChange,
  roleModalTabChange,
  roleIsDefaultChange,
  fetchingError,
} from '../../../redux/ui/role-page/action';
import { translate, TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface RolesPageProps
  extends RouteComponentProps<any>,
    I18nextProviderProps {
  profile: ProfileState;
  rolePage: RolePageState;
  appSettings: AppSettingsState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class RolesPage extends React.Component<RolesPageProps, any> {
  async componentDidMount(): Promise<void> {
    this.props.dispatch(
      fetchData({
        pageNumber: this.props.rolePage.pageNumber,
        pageSize: this.props.rolePage.pageSize,
        sortBy: this.props.rolePage.sortBy,
        asc: this.props.rolePage.asc,
      }),
    );
  }

  handleRoleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.dispatch(roleNameChange((e.target as any).value));
  };

  handlePermissionsChange = (newPermissions: string[]) => {
    this.props.dispatch(rolePermissionsChange(newPermissions));
  };

  handleRoleDefaultChange = (e: any) => {
    this.props.dispatch(roleIsDefaultChange(e.target.checked));
  };

  showRoleModal = (record: any) => {
    this.props.dispatch(openRoleModal(record));
  };

  closeRoleModal = () => {
    this.props.dispatch(closeRoleModal());
  };

  onRoleModalSubmit = async (): Promise<void> => {
    if (!this.props.rolePage.currentRole._id) {
      if (!this.props.rolePage.currentRole.name) {
        this.props.dispatch(
          fetchingError(this.props.t('RolesPage.fillInAllFields')),
        );
      } else {
        this.props.dispatch(createRole(this.props.rolePage.currentRole));
      }
    } else {
      this.props.dispatch(updateRole(this.props.rolePage.currentRole));
    }
  };

  showDeleteModal = (record: any) => {
    this.props.dispatch(openDeleteModal(record));
  };

  closeDeleteModal = () => {
    this.props.dispatch(closeDeleteModal());
  };

  onDeleteModalSubmit = async (): Promise<void> => {
    this.props.dispatch(deleteRole(this.props.rolePage.currentRole._id));
  };

  handleFilterChange = async (values: string[]): Promise<void> => {
    this.props.dispatch(filterChange(values));
  };

  handleSearchChange = async (value: string): Promise<void> => {
    const debounced = _.debounce(
      () => this.props.dispatch(searchChange(value)),
      1000,
    );
    debounced();
  };

  handleTableChange = async (
    pagination: any,
    filters: any,
    sorter: any,
  ): Promise<void> => {
    this.props.dispatch(
      fetchData({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
        sortBy: sorter.field ? sorter.field : this.props.rolePage.sortBy,
        asc: sorter.order
          ? sorter.order === 'ascend'
            ? true
            : false
          : this.props.rolePage.asc,
      }),
    );
  };

  render(): JSX.Element {
    const permissions = Object.keys(UserPermissions).map(
      item => UserPermissions[item],
    );
    return (
      <div className="roles-page">
        <RolesFilter
          showRoleModal={this.showRoleModal}
          handleFilterChange={this.handleFilterChange}
          handleSearchChange={this.handleSearchChange}
          {...this.props}
        />

        <RolesTable
          showRoleModal={this.showRoleModal}
          showDeleteModal={this.showDeleteModal}
          closeDeleteModal={this.closeDeleteModal}
          onDeleteModalSubmit={this.onDeleteModalSubmit}
          isBusy={this.props.rolePage.isBusy}
          data={this.props.rolePage.data}
          total={this.props.rolePage.total}
          pageNumber={this.props.rolePage.pageNumber}
          pageSize={this.props.rolePage.pageSize}
          pageSizes={this.props.appSettings.gridPage.pageSizes.map(item =>
            String(item),
          )}
          handleTableChange={this.handleTableChange}
          {...this.props}
        />

        <Modal
          className="role-modal"
          title={this.props.t('RolesPage.create')}
          okText={this.props.t('RolesPage.save')}
          cancelText={this.props.t('RolesPage.cancel')}
          onOk={this.onRoleModalSubmit}
          onCancel={this.closeRoleModal}
          visible={this.props.rolePage.roleModalVisible}
        >
          {this.props.rolePage.errorMessage ? (
            <Alert
              message={this.props.rolePage.errorMessage}
              type="error"
              showIcon={true}
            />
          ) : null}

          <Tabs
            activeKey={this.props.rolePage.openTabKey}
            onChange={activeKey =>
              this.props.dispatch(roleModalTabChange(activeKey))
            }
          >
            <Tabs.TabPane tab={this.props.t('RolesPage.rolename')} key="name">
              <div style={{ padding: '12px 0' }}>
                {this.props.t('RolesPage.rolename')}{' '}
                <span style={{ color: 'red' }}>*</span>
              </div>
              <Input
                value={this.props.rolePage.currentRole.name}
                onChange={this.handleRoleNameChange}
              />
              <Checkbox
                checked={this.props.rolePage.currentRole.isDefault}
                onChange={(e: any) => this.handleRoleDefaultChange(e)}
                style={{ padding: '24px 0' }}
              >
                {this.props.t('RolesPage.setAsDefault')}
              </Checkbox>
            </Tabs.TabPane>

            <Tabs.TabPane
              tab={this.props.t('RolesPage.permissions')}
              key="permissions"
            >
              <Tree
                checkable={true}
                multiple={true}
                defaultExpandAll={true}
                checkedKeys={this.props.rolePage.currentRole.permissions}
                onCheck={(checkedKeys, e) =>
                  this.handlePermissionsChange(checkedKeys)
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

const mapStateToProps = (state: AppState) => ({
  appSettings: state.appSettings,
  profile: state.profile,
  rolePage: state.ui.rolePage,
});

export default connect(mapStateToProps)(translate()(RolesPage));
