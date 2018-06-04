import React from 'react';
import './UploadImagePage.less';
import { AppState } from '../../../redux';
import { connect } from 'react-redux';
import {
  UploadImagePageState,
  fetchImgList,
  inputChange,
} from '../../../redux/ui/upload-image-page';
import { Dispatch } from 'redux';
import ImageUploader from './ImageUploader';
import ImageView from './ImageView';
import ImageSearch from './ImageSearch';

interface UploadImagePageProps extends UploadImagePageState {
  apiUrl: string;
  token: string;
  id: string;
  dispatch: Dispatch<any>;
}

class UploadImagePage extends React.Component<UploadImagePageProps, any> {
  defaultSearchQuery: string = '';

  componentDidMount(): void {
    this.props.dispatch(inputChange({ search: this.defaultSearchQuery }));
    this.props.dispatch(fetchImgList(this.props.id, this.defaultSearchQuery));
  }

  render(): JSX.Element {
    return (
      <div className="upload-images">
        <ImageSearch {...this.props} />

        <ImageUploader {...this.props} />

        <ImageView {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    apiUrl: state.appSettings.apiUrl,
    token: state.profile.token,
    id: state.profile.id,
    ...state.ui.uploadImgPage,
  };
};

export default connect(mapStateToProps)(UploadImagePage);
