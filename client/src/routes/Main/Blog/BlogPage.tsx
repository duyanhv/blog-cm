import React from 'react';
import Card from 'antd/lib/card';
import { ListPosts } from './ListPosts';
import BlogPageState from '../../../redux/ui/blog-page/state';
import {
  IFindBlogDetailDto,
  CreateBlogInputDto,
  UpdateBlogDetailDto,
  SearchInputDto,
  DateRangeInputDto,
} from '../../../service-proxies/service-proxies';
import { AppState } from '../../../redux';
import { Dispatch, connect } from 'react-redux';
import {
  BlogPageAction,
  fetchPostDetail,
  createNewPost,
  editBlogDetail,
  searchChange,
  searchByDateTime,
  activatePost,
  deactivatePost,
  includeInactivePost,
  excludeInactivePost,
  changeRadioButtonState,
  hideEditModal,
  showEditModal,
} from '../../../redux/ui/blog-page/action';
import {
  // Button,
  Radio,
} from 'antd';
import './BlogPage.less';
import CreateNewPostForm from './CreateNewPostForm';
import _ from 'lodash';
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
  searchByTitleData: IFindBlogDetailDto[];
  showComponent: string;
  showEditModal: boolean;
  onFetchPostDetail: () => IFindBlogDetailDto[];
  onCreatePost: (newPost: CreateBlogInputDto) => void;
  onEditPostDetail: (id: string, editedPost: UpdateBlogDetailDto) => void;
  onSearchChange: (data: SearchInputDto) => void;
  onSearchPostByDate: (dateRangeInput: DateRangeInputDto) => void;
  onActivatePost: (postId: string) => void;
  onDeactivatePost: (postId: string) => void;
  onIncludeInactivePost: () => void;
  onExcludeInactivePost: () => void;
  onChangeRadioButtonState: (showComponent: string) => void;
  onHideEditModal: () => void;
  onShowEditModal: () => void;
}

class BlogPage extends React.Component<BlogPageProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      showComponent: staticRadioButtonValue.allposts,
    };

    this._onAddPost = this._onAddPost.bind(this);
  }
  async componentDidMount(): Promise<any> {
    this.props.onFetchPostDetail();
  }

  handleFormSubmit = async (newPost: CreateBlogInputDto): Promise<any> => {
    this.props.onCreatePost(newPost);
  };

  _onAddPost = async (e: any): Promise<any> => {
    this.props.onChangeRadioButtonState(e.target.value);
  }

  handleEditFormSubmit = async (id: string, editedPost: UpdateBlogDetailDto): Promise<any> => {
    this.props.onEditPostDetail(id, editedPost);
  };

  handleSearchChange = async (value: string): Promise<void> => {
    const debounced = _.debounce(
      // tslint:disable-next-line:no-console
      () => this.props.onSearchChange({ searchInput: value.trim() } as SearchInputDto),
      1000,
    );
    debounced();
    // // tslint:disable-next-line:no-console
    // console.log(this.props.searchByTitle);
  };

  searchPostByDate = async (dateRangeInput: string[]): Promise<void> => {
    const debounced = _.debounce(
      () => this.props.onSearchPostByDate({ dateRangeInput } as DateRangeInputDto),
      1000,
    );
    debounced();
    // // tslint:disable-next-line:no-console
    // console.log(this.props.searchByTitle);
  };

  deactivateOrActivatePost = async (deactivationStatus: boolean, postId: string) => {
    deactivationStatus ?
      this.props.onActivatePost(postId) :
      this.props.onDeactivatePost(postId);
  }

  includeOrExcludeInactivePost = async (isInactivePostIncluded: boolean) => {
    isInactivePostIncluded ?
      this.props.onIncludeInactivePost() :
      this.props.onExcludeInactivePost();
  }

  render(): JSX.Element {
    return (
      <Card style={{ margin: 10 }}>
        <div className="radio-button" onChange={this._onAddPost}>
          <RadioGroup
            defaultValue={staticRadioButtonValue.allposts}
            size="large"
            value={this.props.showComponent}
          >
            <RadioButton value={staticRadioButtonValue.allposts}>
              All Posts
            </RadioButton>
            <RadioButton value={staticRadioButtonValue.addpost}>
              Add post
            </RadioButton>
          </RadioGroup>
        </div>
        {this.props.showComponent === staticRadioButtonValue.allposts ? (
          <ListPosts
            includeOrExcludeInactivePost={this.includeOrExcludeInactivePost}
            deactivateOrActivatePost={this.deactivateOrActivatePost}
            searchPostByDate={this.searchPostByDate}
            handleSearchChange={this.handleSearchChange}
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
  searchByTitleData: state.ui.blogPage.searchByTitleData,
  showComponent: state.ui.blogPage.showComponent,
  showEditModal: state.ui.blogPage.showEditModal,
  ...state.ui.blogPage,
});

const mapDispatchToProps = (dispatch: Dispatch<BlogPageAction>) => ({
  onFetchPostDetail: () => dispatch(fetchPostDetail()),
  onCreatePost: (newPost: CreateBlogInputDto) =>
    dispatch(createNewPost(newPost)),
  onEditPostDetail: (id: string, editPost: UpdateBlogDetailDto) =>
    dispatch(editBlogDetail(id, editPost)),
  onSearchChange: (data: SearchInputDto) =>
    dispatch(searchChange(data)),
  onSearchPostByDate: (dateRangeInput: DateRangeInputDto) =>
    dispatch(searchByDateTime(dateRangeInput)),
  onActivatePost: (postId: string) =>
    dispatch(activatePost(postId)),
  onDeactivatePost: (postId: string) =>
    dispatch(deactivatePost(postId)),
  onIncludeInactivePost: () =>
    dispatch(includeInactivePost()),
  onExcludeInactivePost: () =>
    dispatch(excludeInactivePost()),

  onChangeRadioButtonState: (showComponent: string) =>
    dispatch(changeRadioButtonState(showComponent)),
  onHideEditModal: () => dispatch(hideEditModal()),
  onShowEditModal: () => dispatch(showEditModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
