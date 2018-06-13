import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../../nextjs/components/HomePage/Layout';

class Teachers extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    const baseUrl = props.req
      ? `${props.req.protocol}://${props.req.get('Host')}`
      : '';
    const res = await fetch(`${baseUrl}/api/teachers/find`);
    const data = await res.json();

    return {
      teachers: data.data
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
          <h2>Đội Ngũ Giảng Viên Nhiệt Huyết Của Educlass</h2>

          <hr className="colorgraph" />

          <div className="teachers-group">
            {this.props.teachers.map(item => (
              <div className="row" key={item._id}>
                <div className="col-sm-4">
                  <Link href={`/introduction/teachers/${item._id}`}>
                    <a className="thumbnail">
                      <div
                        style={{
                          backgroundImage: `url(${item.imgSrc})`,
                          backgroundSize: 'auto',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          height: 188
                        }}
                      />
                    </a>
                </Link>
                </div>

                <div className="col-sm-8">
                  <Link href={`/introduction/teachers/${item._id}`}>
                    <a>
                      <h3>
                        Giảng Viên{' '}
                        <span
                          dangerouslySetInnerHTML={convertStringToHtml(item.fullName)}
                        />
                      </h3>
                    </a>
                  </Link>

                  <p><b>Môn Học: <i>{item.subject}</i></b></p>
                  <p><b>Email: <i>{item.email}</i></b></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Teachers;
