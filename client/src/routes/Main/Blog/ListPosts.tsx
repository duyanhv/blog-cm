import {
  // Icon,
  List,
  Avatar,
  Button,
  AutoComplete,
  // Card,
} from 'antd';
import React from 'react';
import {
  IFindBlogDetailDto,
  UpdateBlogDetailDto,
} from '../../../service-proxies/service-proxies';
import './ListPosts.less';
import { Dispatch } from 'react-redux';
import {
  deactivatePost,
  activatePost,
} from '../../../redux/ui/blog-page/action';
import { EditBlogPost } from './EditBlogPost';

const postInputAutoCompleteData: string[] = [];
let flag: boolean = true;
const pushPropsToDataSource = propsData => {
  if (flag && Object.keys(propsData).length > 0) {
    propsData
      .filter(item => item.title)
      .map(item => postInputAutoCompleteData.push(item));
    flag = false;
    return postInputAutoCompleteData;
  }
  return pushPropsToDataSource(propsData);
};

interface ListPostsProps {
  data: IFindBlogDetailDto[];
  dispatch: Dispatch<any>;
  isBusy: boolean;
  currentUsername: string;
  handleEditFormSubmit: (id: string, editedPost: UpdateBlogDetailDto) => void;
}

interface ListPostsState {
  activationStatus: string;
  showEditModal: boolean;
  dataPerPost: IFindBlogDetailDto;
}

export class ListPosts extends React.Component<ListPostsProps, ListPostsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activationStatus: '',
      showEditModal: false,
      dataPerPost: {
        title: '',
        subtitle: '',
        author: '',
        tags: '',
        content: '',
        imageSrc: '',
        viewCount: 0,
        postRating: 0,
        _id: '',
        deactivate: false,
      },
    };
  }

  onDeactivateButtonClick = (
    deactivateStatus: boolean,
    postId: string,
    e: any,
  ) => {
    if (!deactivateStatus) {
      this.props.dispatch(deactivatePost(postId));
    } else {
      this.props.dispatch(activatePost(postId));
    }
  };

  listItemActionsProps = (deactivateStatus: boolean, postId: string) => {
    return [
      // tslint:disable-next-line:jsx-wrap-multiline
      <Button
        key="5"
        type={!deactivateStatus ? 'danger' : 'primary'}
        onClick={e => this.onDeactivateButtonClick(deactivateStatus, postId, e)}
      >
        {!deactivateStatus ? 'Deactivate' : 'Activate'}
      </Button>,
    ];
  };

  onEditItemClick = (item: IFindBlogDetailDto, e: any) => {
    this.setState({
      showEditModal: true,
      dataPerPost: item,
    });
  };

  hideEditModal = () => {
    this.setState({
      showEditModal: false,
    });
  };

  filterOption = (inputValue: any, option: any) => {
    return (
      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !==
      -1
    );
  };

  render(): JSX.Element {
    const arrayOfTitles = pushPropsToDataSource(this.props.data);
    return (
      <div>
        {!this.state.showEditModal ? (
          <div>
            <AutoComplete
              dataSource={arrayOfTitles}
              placeholder="Search for post name"
              filterOption={this.filterOption}
            />

            <List
              // grid={{ gutter: 20, column: 4 }}
              itemLayout="horizontal"
              // size="large"
              dataSource={this.props.data}
              pagination={{
                pageSize: 10,
              }}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <a
                      key={`${item.title}_edit`}
                      onClick={e => this.onEditItemClick(item, e)}
                    >
                      edit
                    </a>,
                    <a key={`${item.title}_hide`}>hide</a>,
                  ]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.subtitle}
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                  />
                  {/* <Card
                                title={item.title}
                                actions={[<Icon key="settingItem" type="setting" />, <Icon onClick={(e) => this.onEditItemClick(item, e)} key="editItem" type="edit" />, <Icon key="ellipsItem" type="ellipsis" />]}
                            >
                                {item.subtitle}
                            </Card> */}
                </List.Item>
              )}
            />
          </div>
        ) : (
          <EditBlogPost
            hideEditModal={this.hideEditModal}
            dataPerPost={this.state.dataPerPost}
            {...this.props}
          />
        )}
      </div>
    );
  }
}