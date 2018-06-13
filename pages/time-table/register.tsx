import * as React from 'react';
import Layout from '../../nextjs/components/HomePage/Layout';
import SignUpForTesting from '../../nextjs/components/HomePage/SignUpForTesting';

class Register extends React.Component {
  render() {
    return (
      <Layout>
        <SignUpForTesting />
      </Layout>
    );
  }
}

export default Register;
