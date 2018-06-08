import * as React from 'react';
import { Table, Tooltip, Button } from 'antd';
import './TeacherTable.less';
import { TranslationFunction } from 'react-i18next';
import { AppSettingsState } from '../../../redux/app-settings';

interface TeacherTableProps {
  t: TranslationFunction;
  appSettings: AppSettingsState;
  handleTableChange: any;
  showAddTeacherModal(currentTeacher: any): void;
}

const TeacherTable = (props: TeacherTableProps) => {
  const actionButtons = (record: any) => {
    return (
      <div className="action-buttons">
        <Tooltip title={props.t('TeacherTable.edit')}>
          <Button
            type="primary"
            icon="edit"
            className="button"
            onClick={() => props.showAddTeacherModal(record)}
          />
        </Tooltip>
      </div>
    );
  };

  const columns = [
    {
      title: props.t('TeacherTable.fullName'),
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: true,
    },
    {
      title: props.t('TeacherTable.email'),
      dataIndex: 'email',
      key: 'email',
      sorter: true,
    },
    {
      title: props.t('TeacherTable.phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: props.t('UserTable.actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: (value, record, index) => actionButtons(record),
    },
  ];

  return (
    <div className="teacher-table">
      <Table
        size="middle"
        loading={false} // props.userListPage.isBusy
        columns={columns}
        dataSource={[{fullName: 'Test', email: 'test@email.com', phone: '0123456789'}]} // props.userListPage.data
        rowKey={record => (record as any).fullname}
        onChange={(pagination, filters, sorter) =>
          props.handleTableChange(pagination, filters, sorter)
        }
        pagination={{
          total: 10, // props.userListPage.total
          current: 1, // props.userListPage.pageNumber
          showSizeChanger: true,
          pageSize: 5, // props.userListPage.pageSize
          pageSizeOptions: props.appSettings.gridPage.pageSizes.map(item =>
            String(item),
          ),
        }}
      />
    </div>
  );
};

export default TeacherTable;
