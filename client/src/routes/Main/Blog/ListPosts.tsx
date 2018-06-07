import {
  // Icon,
  List,
  Avatar,
  Button,
  // AutoComplete,
  Input,
  Row,
  Col,
  DatePicker,
  Tooltip,
  Tag,
  Checkbox,
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

const { RangePicker } = DatePicker;

interface ListPostsProps {
  data: IFindBlogDetailDto[];
  dispatch: Dispatch<any>;
  isBusy: boolean;
  currentUsername: string;
  searchByTitleData: IFindBlogDetailDto[];
  handleEditFormSubmit: (id: string, editedPost: UpdateBlogDetailDto) => void;
  handleSearchChange: (value: any) => void;
  searchPostByDate: (dateRangeInput: string[]) => void;
  deactivateOrActivatePost: (deactivationStatus: boolean, postId: string) => void;
  includeOrExcludeInactivePost: (isInactivePostIncluded: boolean) => void;
}

interface ListPostsState {
  activationStatus: string;
  showEditModal: boolean;
  dataPerPost: IFindBlogDetailDto;
  titleDataSource: string[];
}

export class ListPosts extends React.Component<ListPostsProps, ListPostsState> {
  listtitle: any;
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
      titleDataSource: ['Input Title'],
    };
  }

  onDeactivateButtonClick = (
    deactivateStatus: boolean,
    postId: string,
    _e: any,
  ) => {
    if (!deactivateStatus) {
      this.props.dispatch(deactivatePost(postId));
    } else {
      this.props.dispatch(activatePost(postId));
    }
  };

  // listItemActionsProps = (deactivateStatus: boolean, postId: string) => {
  //   return [
  //     // tslint:disable-next-line:jsx-wrap-multiline
  //     <Button
  //       key="5"
  //       type={!deactivateStatus ? 'danger' : 'primary'}
  //       onClick={e => this.onDeactivateButtonClick(deactivateStatus, postId, e)}
  //     >
  //       {!deactivateStatus ? 'Deactivate' : 'Activate'}
  //     </Button>,
  //   ];
  // };

  onEditItemClick = (item: IFindBlogDetailDto, _e: any) => {
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

  // componentDidMount(): void {
  //   this.listtitle = pushPropsToDataSource(this.props.data);
  // }

  _onAutoCompleteChange(_value: any): void {
    // // tslint:disable-next-line:no-console
    // console.log(this.props.data);
  }

  render(): JSX.Element {
    // const arrayOfTitles = pushPropsToDataSource(this.props.data);
    return (
      <div>
        {!this.state.showEditModal ? (
          <div className="list-post-wrapper">
            <Row>
              <Col span={8}>
                <Input.Search
                  placeholder="input search text"
                  style={{ width: 300 }}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    this.props.handleSearchChange((e.target as any).value.toLowerCase())
                  }
                />
              </Col>
              <Col span={8}>
                {/* <Button className="btn-filter-deactivated-post" type="default" icon="filter">
                  Filter Deactivated Post
                  </Button> */}
                <Checkbox
                  onChange={(e) => this.props.includeOrExcludeInactivePost(e.target.checked)}
                  className="btn-filter-deactivated-post"
                  defaultChecked={true}
                >
                  Include Inactive Post
                </Checkbox>
              </Col>
              <Col span={8}>
                <RangePicker
                  showTime={false}
                  format="YYYY-MM-DD"
                  placeholder={['Start Date', 'End Date']}
                  onChange={(_value: any, dateString: any) => this.props.searchPostByDate(dateString)}
                />
              </Col>
            </Row>

            <List
              // grid={{ gutter: 20, column: 4 }}
              itemLayout="horizontal"
              // size="large"
              loading={this.props.isBusy}
              dataSource={this.props.searchByTitleData}
              pagination={{
                pageSize: 10,
              }}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <Tooltip
                      key={`${item.title}_edit`}
                      title="Edit"
                    >
                      <Button
                        key={`${item.title}_edit`}
                        onClick={e => this.onEditItemClick(item, e)}
                        // shape="circle"
                        icon="edit"
                        type="primary"
                      />
                    </Tooltip>
                    ,
                    <Tooltip
                      key={`${item.title}_hide`}
                      title={item.deactivate ? 'Activate' : 'Deactivate'}
                    >
                      <Button
                        key={`${item.title}_edit`}
                        onClick={() => this.props.deactivateOrActivatePost(item.deactivate, item._id)}
                        // shape="circle"
                        icon={item.deactivate ? 'unlock' : 'lock'}
                        type={item.deactivate ? 'primary' : 'danger'}
                      />
                    </Tooltip>
                    ,
                  ]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.subtitle}
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    className="list-item-meta"
                  />
                  <Tag
                    color={item.deactivate ? 'red' : 'green'}
                    className="activation-status-tag"
                  >
                    {item.deactivate ? 'Inactive' : 'Active'}
                  </Tag>
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
