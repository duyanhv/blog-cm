import React from 'react';
import EditForm from './EditForm';
import {
  IFindBlogDetailDto,
  UpdateBlogDetailDto,
} from '../../../service-proxies/service-proxies';
import { Button } from 'antd';

interface EditBlogPostProps {
  dataPerPost: IFindBlogDetailDto;
  isBusy: boolean;
  currentUsername: string;
  hideEditModal: () => void;
  handleEditFormSubmit: (id: string, editedPost: UpdateBlogDetailDto) => void;
}

interface EditBlogPostState {}

export class EditBlogPost extends React.Component<
  EditBlogPostProps,
  EditBlogPostState
> {
  constructor(props: EditBlogPostProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <Button onClick={this.props.hideEditModal} type="default">
          Back
        </Button>
        <EditForm {...this.props} />
      </div>
    );
  }
}
