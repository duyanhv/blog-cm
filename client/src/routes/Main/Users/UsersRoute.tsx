import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import UserListPage from './UsersList/UserListPage';
import UserDetailPage from './UserDetailPage/UserDetailPage';

interface UsersRouteProps extends RouteComponentProps<any> {}

const UsersRoute = ({ match }: UsersRouteProps) => {
  return (
    <Switch>
      <Route exact={true} path={`${match.url}/`} component={UserListPage} />
      <Route path={`${match.url}/:id`} component={UserDetailPage} />
    </Switch>
  );
};

export default UsersRoute;
