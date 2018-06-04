import React from 'react';
import './ImageSearch.less';
import { Input, Row, Col, Button, Select } from 'antd';
import {
  UploadImagePageState,
  fetchImgList,
  inputChange,
} from '../../../redux/ui/upload-image-page';
import { Dispatch } from 'redux';
import {
  openAddingAlbum,
  closeAddingAlbum,
  submitNewAlbum,
} from '../../../redux/ui/upload-image-page/action';
import { message } from '../../../helpers';
import Tooltip from 'antd/lib/tooltip';

interface ImageSearchProps extends UploadImagePageState {
  id: string;
  dispatch: Dispatch<any>;
}

class ImageSearch extends React.Component<ImageSearchProps, any> {
  albumnameInput: Input | null;

  focusAlbumnameInput = () => {
    setTimeout(() => {
      if (this.albumnameInput) {
        this.albumnameInput.focus();
        this.albumnameInput.input.select();
      }
      // tslint:disable-next-line:align
    }, 0);
  };

  onSubmitAlbum = () => {
    if (!this.props.newAlbumname) {
      message.error('Album Name Cant Empty', 1.5);
    } else {
      this.props.dispatch(submitNewAlbum(this.props.newAlbumname));
    }
  };

  render(): JSX.Element {
    const addNewAlbum = (
      <Col xl={12} xs={24} className="add-album">
        <Input
          className="add-album-input"
          value={this.props.newAlbumname}
          name="newAlbumname"
          onChange={e =>
            this.props.dispatch(
              inputChange({ [e.target.name]: e.target.value }),
            )
          }
          ref={element => {
            this.albumnameInput = element;
          }}
        />

        <div className="add-album-button-group">
          <Tooltip title="Cancel">
            <Button
              icon="close"
              className="button"
              onClick={() => this.props.dispatch(closeAddingAlbum())}
            />
          </Tooltip>
          <Tooltip title="Save">
            <Button
              type="primary"
              icon="check"
              className="button"
              onClick={this.onSubmitAlbum}
            />
          </Tooltip>
        </div>
      </Col>
    );

    const selectAlbum = (
      <Col xl={12} xs={24} className="add-album">
        <div className="label">Album: </div>
        <Select
          value={this.props.currentAlbum}
          className="select"
          onChange={value =>
            this.props.dispatch(inputChange({ currentAlbum: value }))
          }
        >
          {this.props.albumList.map(item => (
            <Select.Option value={item} key={item}>
              {item}
            </Select.Option>
          ))}
        </Select>

        <Button
          type="primary"
          icon="plus"
          className="button"
          onClick={() => {
            this.props.dispatch(openAddingAlbum());
            this.focusAlbumnameInput();
          }}
        >
          Add New Album
        </Button>
      </Col>
    );

    return (
      <div className="upload-images-search">
        <Row type="flex">
          <Col xl={12} xs={24}>
            <Input.Search
              name="search"
              className="search"
              placeholder="Search Images"
              enterButton={true}
              value={this.props.search}
              onChange={e =>
                this.props.dispatch(
                  inputChange({ [e.target.name]: e.target.value }),
                )
              }
              onSearch={() =>
                this.props.dispatch(
                  fetchImgList(this.props.id, this.props.search),
                )
              }
            />
          </Col>

          {this.props.isAddingAlbum ? addNewAlbum : selectAlbum}
        </Row>
      </div>
    );
  }
}

export default ImageSearch;
