import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { Modal, Button } from 'react-bootstrap';
import Layout from '../../nextjs/components/HomePage/Layout';

class ActivityDetail extends React.Component<any, any> {
  state = {
    imgModalVisible: false,
    imgSrc: '',
  };

  showImgModal = (imgSrc: string) => {
    this.setState({
      imgModalVisible: true,
      imgSrc: imgSrc,
    });
  }

  closeImgModal = () => {
    this.setState({
      imgModalVisible: false,
      imgSrc: '',
    });
  }

  static async getInitialProps(props: any) {
    const baseUrl = props.req ? `${props.req.protocol}://${props.req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/uploadImages/getImages/${props.req.params.albumName}`);
    const data = await res.json();

    return {
      imgList: data.data,
      albumName: props.req.params.albumName,
    };
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <h1>{this.props.albumName}</h1>

          <div className="row image-group">
            {this.props.imgList.map((item) => (
              <div className="col-sm-4 col-md-3" key={item.filename}>
                <a className="thumbnail fancybox" onClick={() => this.showImgModal(item.hyperlink)} style={{ cursor: 'pointer' }}>
                  <div
                    style={{
                      backgroundImage: `url(${item.hyperlink})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: 264,
                    }}
                  />
                </a>
              </div>
            ))}
          </div>

          <Modal show={this.state.imgModalVisible} onHide={this.closeImgModal}>
            <Modal.Body>
              <div
                style={{
                  backgroundImage: `url(${this.state.imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '60vh',
                  width: 'auto'
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeImgModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Layout>
    );
  }
}

export default ActivityDetail;