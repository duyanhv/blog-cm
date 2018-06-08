import * as React from 'react';
import TeacherFilter from './TeacherFilter';
import TeacherTable from './TeacherTable';
import { TranslationFunction, translate } from 'react-i18next';
import './TeacherPage.less';
import { AppSettingsState } from '../../../redux/app-settings';
import { AppState } from '../../../redux';
import { connect } from 'react-redux';

interface TeacherPageProps {
  appSettings: AppSettingsState;
  t: TranslationFunction;
}

class TeacherPage extends React.Component<TeacherPageProps, any> {
  handleSearchChange = (value: string) => {
    // tslint:disable-next-line:no-console
    console.log(value);
  }

  showAddTeacherModal = (currentTeacher: any) => {
    // tslint:disable-next-line:no-console
    console.log(currentTeacher);
  }

  handleTableChange = (pagination: any, filters: any, sorter: any) => {
    // tslint:disable-next-line:no-console
    console.log('Table Change');
  }

  render(): JSX.Element {
    return (
      <div className="teacher-page">
        <TeacherFilter
          handleSearchChange={this.handleSearchChange}
          showAddTeacherModal={this.showAddTeacherModal}
          {...this.props}
        />

        <TeacherTable
          handleTableChange={this.handleTableChange}
          showAddTeacherModal={this.showAddTeacherModal}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    appSettings: state.appSettings
  };
};

export default connect(mapStateToProps)(translate()(TeacherPage));
