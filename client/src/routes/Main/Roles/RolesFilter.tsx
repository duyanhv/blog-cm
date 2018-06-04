import * as React from 'react';
import { Button, Icon, Input, TreeSelect, Row, Col } from 'antd';
import './RolesFilter.less';
import { ProfileState } from '../../../redux/profile';
import UserPermissions from '../../../constants/user-permissions.constant';
import { RolePageState } from '../../../redux/ui/role-page';
import { TranslationFunction } from 'react-i18next';
import { I18nextProviderProps } from 'react-i18next/src/I18nextProvider';

interface RolesFilterProps extends I18nextProviderProps {
  rolePage: RolePageState;
  profile: ProfileState;
  showRoleModal: any;
  handleFilterChange: any;
  handleSearchChange: any;
  t: TranslationFunction;
}

const RolesFilter = (props: RolesFilterProps) => {
  // Generate Permissions Tree for Filter
  const keys = Object.keys(UserPermissions);
  const allPermissions = keys.map(item => UserPermissions[item]);
  const typesOfPermissions: string[] = [];
  for (const item of allPermissions) {
    const typeOfPermissions = item.split('.')[0];
    if (typesOfPermissions.indexOf(typeOfPermissions) === -1) {
      typesOfPermissions.push(typeOfPermissions);
    }
  }
  const data: any[] = [];
  for (const item of typesOfPermissions) {
    data.push({
      key: item,
      label: props.t(`permissions.${item}Management`),
      value: allPermissions
        .filter(element => element.indexOf(item) === 0)
        .join(', '),
      children: allPermissions
        .filter(element => element.indexOf(item) === 0)
        .map(element2 => {
          return {
            label: props.t(`permissions.${element2}`),
            value: element2,
          };
        }),
    });
  }

  return (
    <div className="roles-filter">
      <Row type="flex">
        <Col lg={12} md={24} xs={24}>
          <div className="search">
            <Input.Search
              className="search-input"
              style={{ width: '96%' }}
              placeholder={`${props.t('RolesFilter.search')} ...`}
              defaultValue={props.rolePage.search}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                props.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
          </div>
        </Col>

        <Col lg={12} md={24} xs={24}>
          <div className="filter">
            <TreeSelect
              treeData={data}
              placeholder={`${props.t('RolesFilter.filter')} ...`}
              style={{ width: '96%' }}
              treeCheckable={true}
              showCheckedStrategy={TreeSelect.SHOW_PARENT}
              allowClear={true}
              treeDefaultExpandAll={true}
              defaultValue={props.rolePage.filter}
              onChange={(value, label) => {
                if (value.length === 1) {
                  props.handleFilterChange(value[0].split(', '));
                } else if (value.length === 2) {
                  const permissions = [
                    ...value[0].split(', '),
                    ...value[1].split(', '),
                  ];
                  props.handleFilterChange(permissions);
                } else {
                  props.handleFilterChange(value);
                }
              }}
            />
          </div>
        </Col>
      </Row>

      <Row type="flex">
        <Col lg={6}>
          <div className="add">
            {props.profile.permissions.indexOf(UserPermissions.ROLES_CREATE) >
            -1 ? (
              <Button
                type="primary"
                onClick={() =>
                  props.showRoleModal({ permissions: [], isDefault: false })
                }
              >
                <Icon type="plus" />
                {props.t('RolesFilter.create')}
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RolesFilter;
