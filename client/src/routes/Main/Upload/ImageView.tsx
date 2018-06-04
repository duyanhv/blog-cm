import React from 'react';
import { Dispatch } from 'redux';
import { Spin, Row, Col, Card, Tooltip, Icon, Input } from 'antd';
import { GetUploadedImagesDetailDto } from '../../../service-proxies/service-proxies';
import {
  updateFilename,
  closeEditFilename,
  openEditFilename,
  deleteImg,
  inputChange,
} from '../../../redux/ui/upload-image-page';
import { message } from '../../../helpers';
import './ImageView.less';

interface ImageViewProps {
  dispatch: Dispatch<any>;
  isBusy: boolean;
  imgList: GetUploadedImagesDetailDto[];
  isEditFilename: boolean;
  currentImage: GetUploadedImagesDetailDto;
}

class ImageView extends React.Component<ImageViewProps, any> {
  filenameInput: Input | null;

  copyToClipboard = (item: GetUploadedImagesDetailDto) => {
    const temporaryInput = document.createElement('input');
    temporaryInput.value = item.hyperlink;

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(temporaryInput);

    temporaryInput.select();
    document.execCommand('copy');
    body.removeChild(temporaryInput);

    message.success('Copied To Clipboard', 1);
  };

  focusFilenameInput = () => {
    setTimeout(() => {
      if (this.filenameInput) {
        this.filenameInput.focus();
        this.filenameInput.input.select();
      }
      // tslint:disable-next-line:align
    }, 0);
  };

  onInputChange = (e: any) => {
    this.props.dispatch(inputChange({ [e.target.name]: e.target.value }));
  };

  render(): JSX.Element {
    const editFilenameInput = (
      <Input
        name="filename"
        value={this.props.currentImage.filename}
        onChange={this.onInputChange}
        ref={element => {
          this.filenameInput = element;
        }}
        style={{ display: 'inline-block', width: '100%' }}
      />
    );

    /* tslint:disable */
    const editFilenameButtons = item => [
      <Tooltip title="Save" key="save">
        <Icon
          type="check"
          key="check"
          onClick={() => {
            if (!this.props.currentImage.filename) {
              message.error('Filename Cant Empty', 1.5);
            } else {
              this.props.dispatch(
                updateFilename({
                  newName: this.props.currentImage.filename,
                  imageId: this.props.currentImage._id,
                } as any),
              );
            }
          }}
        />
      </Tooltip>,
      <Tooltip title="Cancel" key="cancel">
        <Icon
          type="close"
          key="close"
          onClick={() => this.props.dispatch(closeEditFilename())}
        />
      </Tooltip>,
    ];

    /* tslint:disable */
    const normalButtons = item => [
      <Tooltip title="Copy Hyperlink" key="copy">
        <Icon
          type="copy"
          key="copy"
          onClick={() => this.copyToClipboard(item)}
        />
      </Tooltip>,
      <Tooltip title="Edit Filename" key="edit">
        <Icon
          type="edit"
          key="edit"
          onClick={() => {
            this.props.dispatch(openEditFilename(item._id));
            this.focusFilenameInput();
          }}
        />
      </Tooltip>,
      <Tooltip title="Delete Image" key="delete">
        <Icon
          type="delete"
          key="delete"
          onClick={() => this.props.dispatch(deleteImg(item._id))}
        />
      </Tooltip>,
    ];

    return (
      <div className="upload-images-result">
        <Spin spinning={this.props.isBusy}>
          <Row type="flex" gutter={8}>
            {this.props.imgList.map(item => (
              <Col xl={6} lg={8} xs={12} key={item.filename}>
                <Card
                  className="upload-images-result-item"
                  hoverable={true}
                  cover={
                    <div
                      className="card-cover"
                      style={{
                        backgroundImage: `url(${item.hyperlink})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  }
                  actions={
                    this.props.isEditFilename &&
                    this.props.currentImage.hyperlink === item.hyperlink
                      ? editFilenameButtons(item)
                      : normalButtons(item)
                  }
                >
                  <Card.Meta
                    title={
                      <div className="card-title">
                        <div className="card-title-label">Filename: </div>
                        <div className="card-title-value">
                          {this.props.isEditFilename &&
                          this.props.currentImage.hyperlink === item.hyperlink
                            ? editFilenameInput
                            : item.filename}
                        </div>
                      </div>
                    }
                    description={
                      <div className="card-description">
                        <div className="card-description-label">
                          Hyperlink:{' '}
                        </div>
                        <div className="card-description-value">
                          {item.hyperlink}
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Spin>
      </div>
    );
  }
}

export default ImageView;
