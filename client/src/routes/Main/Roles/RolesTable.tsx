import * as React from 'react';
import { Table, Button, Popconfirm, Tooltip, Checkbox } from 'antd';
import * as moment from 'moment';
import './RolesTable.less';
import { ProfileState } from '../../../redux/profile';
import UserPermissions from '../../../constants/user-permissions.constant';
import { checkAllPermissions } from '../../../helpers';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';
import { TranslationFunction } from 'react-i18next';

interface RolesTableProps extends I18nextProviderProps {
  profile: ProfileState;
  showRoleModal: any;
  showDeleteModal: any;
  onDeleteModalSubmit: any;
  closeDeleteModal: any;
  isBusy: boolean;
  data: any;
  total: number;
  pageSize: number;
  pageSizes: string[];
  pageNumber: number;
  handleTableChange: any;
  t: TranslationFunction;
}

const RolesTable = (props: RolesTableProps) => {
  const actionButtons = (record: any) => {
    return (
      <div className="action-buttons">
        {checkAllPermissions(
          [UserPermissions.ROLES_EDIT],
          props.profile.permissions,
        ) ? (
          <Tooltip title={props.t('RolesTable.edit')}>
            <Button
              type="primary"
              icon="edit"
              className="button"
              onClick={() => props.showRoleModal(record)}
            />
          </Tooltip>
        ) : null}

        {checkAllPermissions(
          [UserPermissions.ROLES_EDIT],
          props.profile.permissions,
        ) ? (
          <Popconfirm
            title={`${props.t('RolesTable.rus')} ?`}
            okText={props.t('RolesTable.ok')}
            cancelText={props.t('RolesTable.cancel')}
            overlayStyle={
              props.profile.permissions.indexOf(UserPermissions.ROLES_DELETE) >
              -1
                ? {}
                : { display: 'none' }
            }
            onConfirm={props.onDeleteModalSubmit}
            onCancel={props.closeDeleteModal}
          >
            <Tooltip title={props.t('RolesTable.delete')}>
              <Button
                icon="delete"
                className="button"
                onClick={() => props.showDeleteModal(record)}
              />
            </Tooltip>
          </Popconfirm>
        ) : null}
      </div>
    );
  };

  const columns = [
    {
      title: props.t('RolesTable.rolename'),
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: props.t('RolesTable.default'),
      dataIndex: 'isDefault',
      key: 'isDefault',
      className: 'isDefault',
      render: value => <Checkbox checked={value} />,
    },
    {
      title: props.t('RolesTable.createdBy'),
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: props.t('RolesTable.createdAt'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: true,
      render: value => moment(value.toDate()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: props.t('RolesTable.lastModifiedBy'),
      dataIndex: 'lastModifiedBy',
      key: 'lastModifiedBy',
    },
    {
      title: props.t('RolesTable.lastModifiedAt'),
      dataIndex: 'lastModifiedAt',
      key: 'lastModifiedAt',
      sorter: true,
      render: value =>
        value ? moment(value.toDate()).format('YYYY-MM-DD HH:mm:ss') : '',
    },
    {
      title: props.t('RolesTable.actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: (value, record, index) => actionButtons(record),
    },
  ];

  return (
    <div className="roles-table">
      <Table
        size="middle"
        loading={props.isBusy}
        rowKey={record => (record as any).name}
        columns={columns}
        dataSource={props.data}
        onChange={(pagination, filters, sorter) =>
          props.handleTableChange(pagination, filters, sorter)
        }
        pagination={{
          total: props.total,
          showSizeChanger: true,
          pageSize: props.pageSize,
          current: props.pageNumber,
          pageSizeOptions: props.pageSizes,
        }}
      />
    </div>
  );
};

export default RolesTable;
