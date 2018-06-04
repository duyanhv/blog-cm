import React from 'react';
import Card from 'antd/lib/card';
import { ListPosts } from './ListPosts';
import BlogPageState from '../../../redux/ui/blog-page/state';
import {
  IFindBlogDetailDto,
  CreateBlogInputDto,
  UpdateBlogDetailDto,
} from '../../../service-proxies/service-proxies';
import { AppState } from '../../../redux';
import { Dispatch, connect } from 'react-redux';
import {
  BlogPageAction,
  fetchPostDetail,
  createNewPost,
  editBlogDetail,
} from '../../../redux/ui/blog-page/action';
import {
  // Button,
  Radio,
} from 'antd';
import './BlogPage.less';
import CreateNewPostForm from './CreateNewPostForm';
// import CreateNewPostForm from './CreateNewPostForm';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const staticRadioButtonValue = {
  addpost: 'addpost',
  allposts: 'allposts',
};

interface BlogPageProps extends BlogPageState {
  isBusy: boolean;
  data: IFindBlogDetailDto[];
  dispatch: Dispatch<any>;
  currentUsername: string;
  onFetchPostDetail: () => IFindBlogDetailDto[];
  onCreatePost: (newPost: CreateBlogInputDto) => void;
  onEditPostDetail: (id: string, editedPost: UpdateBlogDetailDto) => void;
}

interface RadioButtonState {
  showComponent: string;
}

class BlogPage extends React.Component<BlogPageProps, RadioButtonState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showComponent: staticRadioButtonValue.allposts,
    };

    this._onAddPost = this._onAddPost.bind(this);
  }
  componentDidMount(): void {
    this.props.onFetchPostDetail();
  }

  handleFormSubmit = async (newPost: CreateBlogInputDto) => {
    // tslint:disable-next-line:no-console
    console.log(newPost);
    this.props.onCreatePost(newPost);
  };

  _onAddPost(e: any): void {
    this.setState({
      showComponent: e.target.value,
    });
  }

  handleEditFormSubmit = (id: string, editedPost: UpdateBlogDetailDto) => {
    this.props.onEditPostDetail(id, editedPost);
    this.props.onFetchPostDetail();
  };

  render(): JSX.Element {
    return (
      <Card style={{ margin: 10 }}>
        <div className="radio-button" onChange={this._onAddPost}>
          <RadioGroup
            defaultValue={staticRadioButtonValue.allposts}
            size="large"
          >
            <RadioButton value={staticRadioButtonValue.allposts}>
              All Posts
            </RadioButton>
            <RadioButton value={staticRadioButtonValue.addpost}>
              Add post
            </RadioButton>
          </RadioGroup>
        </div>
        {this.state.showComponent === staticRadioButtonValue.allposts ? (
          <ListPosts
            handleEditFormSubmit={this.handleEditFormSubmit}
            {...this.props}
          />
        ) : (
          <CreateNewPostForm
            handleFormSubmit={this.handleFormSubmit}
            {...this.props}
          />
        )}
      </Card>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  data: state.ui.blogPage.data,
  isBusy: state.ui.blogPage.isBusy,
  currentUsername: state.profile.username,
  ...state.ui.blogPage,
});

const mapDispatchToProps = (dispatch: Dispatch<BlogPageAction>) => ({
  onFetchPostDetail: () => dispatch(fetchPostDetail()),
  onCreatePost: (newPost: CreateBlogInputDto) =>
    dispatch(createNewPost(newPost)),
  onEditPostDetail: (id: string, editPost: UpdateBlogDetailDto) =>
    dispatch(editBlogDetail(id, editPost)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
