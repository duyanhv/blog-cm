import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import SignUpForTesting from '../../nextjs/components/HomePage/SignUpForTesting';
import Layout from '../../nextjs/components/HomePage/Layout';

class TeacherDetail extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    const baseUrl = props.req ? `${props.req.protocol}://${props.req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/teachers/getTeacherDetail/${props.req.params.teacherId}`);
    const data = await res.json();

    return {
      teacherInfo: data,
    };
  }

  render() {
    const convertStringToHtml = (content: string) => {
      return {
        __html: content
      };
    };

    return (
      <Layout>
        <div className="container">
          <h1>Giảng Viên {this.props.teacherInfo.fullName}</h1>

          <div className="row image-group">
            <div className="col-sm-12">
              <div dangerouslySetInnerHTML={convertStringToHtml(this.props.teacherInfo.description)} />
            </div>
          </div>

          <hr />

          <SignUpForTesting />
        </div>
      </Layout>
    );
  }
}

export default TeacherDetail;