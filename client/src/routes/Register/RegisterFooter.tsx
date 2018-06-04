import * as React from 'react';
import './RegisterFooter.less';
import { Row } from 'antd';
import { Link } from 'react-router-dom';

interface RegisterFooterProps {}

const RegisterFooter = (props: RegisterFooterProps) => {
  return (
    <div className="register-footer">
      <Row>
        <Link className="login-now" to="/login">
          Login now!
        </Link>
      </Row>
    </div>
  );
};

export default RegisterFooter;
