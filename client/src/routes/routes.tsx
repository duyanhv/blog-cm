import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {
  LoginPage,
  RegisterPage,
  Page400,
  Page403,
  Page500,
  MainPage,
} from '.';
import { RouteUrls } from './routes.constant';
import Authorize from './../components/Authorize/Authorize';
import { AppState } from '../redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const RedirectToHome = () => {
  return <Redirect to={`${RouteUrls.BaseUrl}${RouteUrls.Main}`} />;
};

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={`${RouteUrls.BaseUrl}`} component={RedirectToHome} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Login}`} component={LoginPage} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Register}`} component={RegisterPage} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Page400}`} component={Page400} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Page403}`} component={Page403} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Page500}`} component={Page500} />
      <Route path={`${RouteUrls.BaseUrl}${RouteUrls.Main}`} component={Authorize(MainPage)} />
      <Route component={Page400} />
    </Switch>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    appBaseUrl: state.appSettings.appBaseUrl
  };
};

export default withRouter(connect(mapStateToProps)(Routes) as any);
