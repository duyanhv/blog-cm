import * as React from 'react';
import TeacherFilter from './TeacherFilter';
import TeacherTable from './TeacherTable';
import AddNewTeacherForm from './AddNewTeacherForm';
import { TranslationFunction, translate } from 'react-i18next';
import './TeacherPage.less';
import { AppSettingsState } from '../../../redux/app-settings';
import { AppState } from '../../../redux';
import { connect } from 'react-redux';
import { Modal, Alert } from 'antd';
import {
  TeacherPageState,
  openAddTeacherModal,
  closeAddTeacherModal,
  fetchData,
  searchChange,
  filterChange,
  errorHappen,
  updateTeacher,
  createNewTeacher,
} from '../../../redux/ui/teacher-page';
import { ProfileState } from '../../../redux/profile';
import { Dispatch } from 'redux';
import * as _ from 'lodash';

interface TeacherPageProps extends TeacherPageState {
  profile: ProfileState;
  appSettings: AppSettingsState;
  dispatch: Dispatch<any>;
  t: TranslationFunction;
}

class TeacherPage extends React.Component<TeacherPageProps, any> {
  componentDidMount(): void {
    this.props.dispatch(
      fetchData({
        name: this.props.name,
        subject: this.props.subject,
        pageNumber: this.props.pageNumber,
        pageSize: this.props.pageSize,
        sortBy: this.props.sortBy,
        asc: this.props.asc,
      }),
    );
  }

  handleSearchChange = (value: string) => {
    const debounced = _.debounce(
      () => this.props.dispatch(searchChange(value)),
      1000,
    );
    debounced();
  };

  handleFilterChange = (value: string) => {
    this.props.dispatch(filterChange(value));
  };

  showAddTeacherModal = (currentTeacher: any) => {
    this.props.dispatch(openAddTeacherModal(currentTeacher));
  };

  closeAddTeacherModal = () => {
    this.props.dispatch(closeAddTeacherModal());
  };

  handleTableChange = (pagination: any, _filters: any, sorter: any) => {
    this.props.dispatch(
      fetchData({
        name: this.props.name,
        subject: this.props.subject,
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
        sortBy: sorter.field ? sorter.field : this.props.sortBy,
        asc: sorter.order
          ? sorter.order === 'ascend'
            ? true
            : false
          : this.props.asc,
      }),
    );
  };

  onCreateTeacherFormSubmit = () => {
    if (this.props.currentTeacher._id) {
      if (
        !this.props.currentTeacher.firstName ||
        !this.props.currentTeacher.lastName ||
        !this.props.currentTeacher.email ||
        !this.props.currentTeacher.phone ||
        !this.props.currentTeacher.dob ||
        !this.props.currentTeacher.subject
      ) {
        this.props.dispatch(
          errorHappen(this.props.t('TeacherPage.fillInAllFields')),
        );
      } else {
        this.props.dispatch(updateTeacher(this.props.currentTeacher));
      }
    } else {
      if (
        !this.props.currentTeacher.firstName ||
        !this.props.currentTeacher.lastName ||
        !this.props.currentTeacher.email ||
        !this.props.currentTeacher.phone ||
        !this.props.currentTeacher.dob ||
        !this.props.currentTeacher.subject
      ) {
        this.props.dispatch(
          errorHappen(this.props.t('UserListPage.fillInAllFields')),
        );
      } else {
        this.props.dispatch(createNewTeacher(this.props.currentTeacher));
      }
    }
  };

  render(): JSX.Element {
    return (
      <div className="teacher-page">
        <TeacherFilter
          handleSearchChange={this.handleSearchChange}
          showAddTeacherModal={this.showAddTeacherModal}
          handleFilterChange={this.handleFilterChange}
          {...this.props}
        />

        <TeacherTable
          handleTableChange={this.handleTableChange}
          showAddTeacherModal={this.showAddTeacherModal}
          {...this.props}
        />

        <Modal
          width={992}
          title={this.props.t('TeacherPage.add')}
          okText={this.props.t('TeacherPage.ok')}
          cancelText={this.props.t('TeacherPage.cancel')}
          onOk={this.onCreateTeacherFormSubmit}
          onCancel={this.closeAddTeacherModal}
          visible={this.props.addTeacherModalVisible}
        >
          {this.props.errorMessage ? (
            <Alert
              message={this.props.errorMessage}
              type="error"
              showIcon={true}
            />
          ) : null}

          <AddNewTeacherForm {...this.props} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    ...state.ui.teacherPage,
    appSettings: state.appSettings,
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(translate()(TeacherPage) as any);
