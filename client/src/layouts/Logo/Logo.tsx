import * as React from 'react';
import { Link } from 'react-router-dom';
import './Logo.less';
import { AppSettingsState } from '../../redux/app-settings';
import { AppState } from '../../redux';
import { connect } from 'react-redux';

interface LogoProps extends AppSettingsState {}

const Logo = (props: LogoProps) => {
  return (
    <div className="logo">
      <Link to={`${props.appBaseUrl}/main`}>
        <img src={require('../../images/techkids.png')} alt="Logo" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    ...state.appSettings,
  };
};

export default connect(mapStateToProps)(Logo);
