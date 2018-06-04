import * as React from 'react';
import { RouterProps } from 'react-router';
import { CreateCompanyInputDto } from '../../../service-proxies/service-proxies';
import { Row, Col, Card } from 'antd';
import CompanyForm from './CompanyForm';
import { CompanyPageState } from '../../../redux/ui/company-page';
import { AppState } from '../../../redux';
import { Dispatch, connect } from 'react-redux';
import {
  CompanyPageAction,
  fetchCompany,
  createNewCompany,
} from '../../../redux/ui/company-page/action';
import { AppSettingsState } from '../../../redux/app-settings';
import UploadButton from './UploadButton';
import { fetchProfile } from '../../../redux/ui/profile-page';
import { ProfileState } from '../../../redux/profile';
interface CompanyPageProps extends RouterProps, CompanyPageState {
  onFetchCompanyData: Function;
  isBusy: boolean;
  onCreateCompanyData: Function;
  onUploadCompanyLogo: Function;
  onFetchProfileData: Function;
  appSettings: AppSettingsState;
  profile: ProfileState;
  dispatch: Dispatch<any>;
  companyPage: CompanyPageState;
  formItemLayout: {};
}

class CompanyPage extends React.Component<CompanyPageProps> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
    this.props.onFetchCompanyData();
    this.props.onFetchProfileData(this.props.profile.id);
  }

  handleSubmit = async (company: CreateCompanyInputDto) => {
    this.props.onCreateCompanyData(company);
  };

  handleUploadLogo = async (file: any) => {
    this.props.onUploadCompanyLogo(file);
    return file;
  };

  render(): JSX.Element {
    return (
      <Card style={{ margin: 10 }}>
        <Row>
          <h2>Company Logo</h2>
          <UploadButton {...this.props} />
          <Col>
            <CompanyForm
              handleSubmit={this.handleSubmit}
              isBusy={this.props.isBusy}
              {...this.props}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
  appSettings: state.appSettings,
  companyPage: state.ui.companyPage,
});

const mapDispatchToProps = (dispatch: Dispatch<CompanyPageAction>) => ({
  onFetchCompanyData: () => dispatch(fetchCompany()),
  onCreateCompanyData: (company: CreateCompanyInputDto) =>
    dispatch(createNewCompany(company)),
  onFetchProfileData: (profile: string) => dispatch(fetchProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage as any);
