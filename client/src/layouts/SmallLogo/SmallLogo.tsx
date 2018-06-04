import * as React from 'react';
import { Link } from 'react-router-dom';
import './SmallLogo.less';
import { AppSettingsState } from '../../redux/app-settings';
import { connect } from 'react-redux';
import { AppState } from '../../redux';

interface SmallLogoProps extends AppSettingsState {}

const SmallLogo = (props: SmallLogoProps) => {
  return (
    <div className="small-logo">
      <Link to={`${props.appBaseUrl}/main`}>
        <img src={require('../../images/small-logo.png')} alt="Small Logo" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    ...state.appSettings,
  };
};

export default connect(mapStateToProps)(SmallLogo);
