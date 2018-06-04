import * as React from 'react';
import { Table, Tooltip, Button, Checkbox } from 'antd';
import './UserTable.less';
import { AppSettingsState } from '../../../../redux/app-settings';
import { UserListPageState } from '../../../../redux/ui/user-list-page';
import { ProfileState } from '../../../../redux/profile';
import UserPermissions from '../../../../constants/user-permissions.constant';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction } from 'react-i18next';

interface UserTableProps extends I18nextProviderProps {
  profile: ProfileState;
  appSettings: AppSettingsState;
  userListPage: UserListPageState;
  handleTableChange: any;
  showAddUserModal: any;
  t: TranslationFunction;
}

const UserTable = (props: UserTableProps) => {
  const actionButtons = (record: any) => {
    return (
      <div className="action-buttons">
        {props.profile.permissions.indexOf(UserPermissions.ROLES_EDIT) > -1 ? (
          <Tooltip title={props.t('UserTable.edit')}>
            <Button
              type="primary"
              icon="edit"
              className="button"
              onClick={() => props.showAddUserModal(record)}
            />
          </Tooltip>
        ) : null}
      </div>
    );
  };

  const columns = [
    {
      title: props.t('UserTable.username'),
      dataIndex: 'username',
      key: 'username',
      sorter: true,
    },
    {
      title: props.t('UserTable.email'),
      dataIndex: 'email',
      key: 'email',
      sorter: true,
    },
    {
      title: props.t('UserTable.fullName'),
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: true,
    },
    {
      title: props.t('UserTable.roles'),
      dataIndex: 'roles',
      key: 'roles',
      render: (value, record, index) => value.join(', '),
    },
    {
      title: props.t('UserTable.isActive'),
      dataIndex: 'isActive',
      key: 'isActive',
      className: 'isActive',
      render: value => <Checkbox checked={value} />,
    },
    {
      title: props.t('UserTable.actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: (value, record, index) => actionButtons(record),
    },
  ];

  return (
    <div className="user-table">
      <Table
        size="middle"
        loading={props.userListPage.isBusy}
        columns={columns}
        dataSource={props.userListPage.data}
        rowKey={record => (record as any).username}
        onChange={(pagination, filters, sorter) =>
          props.handleTableChange(pagination, filters, sorter)
        }
        pagination={{
          total: props.userListPage.total,
          current: props.userListPage.pageNumber,
          showSizeChanger: true,
          pageSize: props.userListPage.pageSize,
          pageSizeOptions: props.appSettings.gridPage.pageSizes.map(item =>
            String(item),
          ),
        }}
      />
    </div>
  );
};

export default UserTable;
