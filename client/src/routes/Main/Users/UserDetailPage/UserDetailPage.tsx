import * as React from 'react';
import { Button } from 'antd';
import './UserDetailPage.less';
import { RouteComponentProps } from 'react-router';

interface UserDetailPageProps extends RouteComponentProps<any> {}

class UserDetailPage extends React.Component<UserDetailPageProps, any> {
  render(): JSX.Element {
    return (
      <div className="user-detail-page">
        <Button type="primary">UserDetailPage</Button>
      </div>
    );
  }
}

export default UserDetailPage;
