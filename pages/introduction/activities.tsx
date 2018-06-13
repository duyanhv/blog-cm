import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../../nextjs/components/HomePage/Layout';

class Activities extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    const baseUrl = props.req ? `${props.req.protocol}://${props.req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/uploadImages/albums`);
    const data = await res.json();

    return {
      albums: data,
    };
  }

  render() {
    return (
      <Layout>
        <div className="container activities">
          <h1>Các Hoạt Động Nổi Bật Tại Educlass</h1>

          <div className="row albums-group">
            {this.props.albums.map((item) => (
              <div className="col-sm-4 col-md-3" key={item.albumName}>
                <div className="thumbnail">
                  <Link href={`/introduction/activities/${item.albumName}`}>
                    <a>
                      <div
                        style={{
                          backgroundImage: `url(${item.imgList[0].hyperlink})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: 264,
                        }}
                      />
                    </a>
                  </Link>
                  <div className="caption">
                    <Link href={`/introduction/activities/${item.albumName}`}>
                      <a><h4>{item.albumName}</h4></a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          div.albums-group {
            margin: 24px 0 24px 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Activities;