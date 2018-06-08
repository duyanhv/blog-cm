import * as React from 'react';
import { Row, Col, Input, Button, Icon } from 'antd';
import { TranslationFunction } from 'react-i18next';
import './TeacherFilter.less';

interface TeacherFilterProps {
  handleSearchChange: (value: string) => void;
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
              defaultValue="Test" // props.teacherPage.search
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                props.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
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
