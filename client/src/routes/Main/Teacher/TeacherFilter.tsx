import * as React from 'react';
import { Row, Col, Input, Button, Icon, Select } from 'antd';
import { TranslationFunction } from 'react-i18next';
import './TeacherFilter.less';
import { TeacherPageState } from '../../../redux/ui/teacher-page';

interface TeacherFilterProps extends TeacherPageState {
  handleSearchChange: (value: string) => void;
  handleFilterChange: (value: string) => void;
  showAddTeacherModal: any;
  t: TranslationFunction;
}

const TeacherFilter = (props: TeacherFilterProps) => {
  return (
    <div className="teacher-filter">
      <Row type="flex">
        <Col lg={12} md={24} xs={24}>
          <div className="search">
            <Input.Search
              className="search-input"
              style={{ width: '96%' }}
              placeholder={`${props.t('TeacherFilter.search')} ...`}
              defaultValue={props.name}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                props.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
          </div>
        </Col>

        <Col lg={12} md={24} xs={24}>
          <div className="filter">
            <Select
              onChange={value => props.handleFilterChange(value as any)}
              className="select"
              style={{ width: '96%' }}
              placeholder={props.t('TeacherFilter.filter')}
              allowClear={true}
            >
              <Select.Option key="math" value="math">Math</Select.Option>
              <Select.Option key="physic" value="physic">Physic</Select.Option>
              <Select.Option key="chemistry" value="chemistry">Chemistry</Select.Option>
              <Select.Option key="literature" value="literature">Literature</Select.Option>
              <Select.Option key="english" value="english">English</Select.Option>
              <Select.Option key="biology" value="biology">Biology</Select.Option>
            </Select>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="add">
            <Button type="primary" onClick={() => props.showAddTeacherModal({})}>
              <Icon type="plus" />
              {props.t('TeacherFilter.add')}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TeacherFilter;
