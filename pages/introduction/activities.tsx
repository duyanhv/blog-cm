import * as React from 'react';
import Layout from '../../nextjs/components/HomePage/Layout';

class Activities extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container activities">
          <h1>Các Hoạt Động Nổi Bật Tại Educlass</h1>

          <div className="row albums-group">
            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h4>Thumbnail label</h4>
                </div>
              </div>
            </div>
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