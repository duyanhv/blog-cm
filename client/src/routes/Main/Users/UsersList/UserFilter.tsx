import * as React from 'react';
import { Select, Button, Icon, Input, Row, Col } from 'antd';
import './UserFilter.less';
import _ from 'lodash';
import { UserListPageState } from '../../../../redux/ui/user-list-page';
import { TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface UserFilterProps extends I18nextProviderProps {
  userListPage: UserListPageState;
  handleSearchChange: (value: any) => void;
  handleFilterChange: (value: any) => void;
  showAddUserModal: any;
  t: TranslationFunction;
}

const UserFilter = (props: UserFilterProps) => {
  return (
    <div className="user-filter">
      <Row type="flex">
        <Col lg={12} md={24} xs={24}>
          <div className="search">
            <Input.Search
              className="search-input"
              style={{ width: '96%' }}
              placeholder={`${props.t('UserFilter.search')} ...`}
              defaultValue={props.userListPage.search}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                props.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
          </div>
        </Col>

        <Col lg={12} md={24} xs={24}>
          <div className="filter">
            <Select
              onChange={value => props.handleFilterChange(value)}
              className="select"
              style={{ width: '96%' }}
              placeholder={props.t('UserFilter.filter')}
              allowClear={true}
              defaultValue={props.userListPage.filter}
            >
              {props.userListPage.roles.map(item => (
                <Select.Option value={item.name} key={item.name}>
                  {_.startCase(item.name)}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="add">
            <Button type="primary" onClick={() => props.showAddUserModal({})}>
              <Icon type="plus" />
              {props.t('UserListPage.add')}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserFilter;
