import React from 'react';
import { Card, Table, Button, Divider, Tag } from 'antd';
import { AppState } from '../../../redux';
import { Dispatch } from 'redux';
import { MenuConfigPageActions, fetchAllMenuConfig, fetchMenuConfigById, closeEditMenuConfigModal, editMenuConfigById, clearDropDownMenuButtonState, setDropDownMenuButtonState, setMenuConfigStatus, showAddMenuConfigModal, closeAddMenuConfigModal, fetchParentIdData, createMenuConfig } from '../../../redux/ui/menuconfig-page/action';
import { connect } from 'react-redux';
import { IFindMenuConfigDto, IUpdateMenuConfigDto, ICreateMenuConfigDto } from '../../../service-proxies/service-proxies';
import EditMenuConfig from './EditMenuConfig';
import MenuConfigPageState from '../../../redux/ui/menuconfig-page/state';
import './MenuConfigPage.less';
import AddMenuConfig from './AddMenuConfig';
interface MenuConfigPageProps extends MenuConfigPageState {
    isBusy: boolean;
    allMenuConfigData: IFindMenuConfigDto[];
    // clientUrl: string;
    menuConfigData: IFindMenuConfigDto;
    showEditMenuConfigModal: boolean;
    parentIdData: any;
    parentIdState: {
        name: string;
        _id: string;
    };
    showAddMenuConfigModal: boolean;
    onFetchAllMenuConfigData: () => IFindMenuConfigDto[];
    onFetchMenuConfigDataById: (menuConfigId: string) => IFindMenuConfigDto;
    onCloseEditMenuConfigModal: () => void;
    onEditMenuConfigForm: (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => void;
    onClearDropDownMenuButtonState: () => void;
    onSetDropDownMenuButtonState: (
        parentStateId: {
            name: string,
            _id: string
        }
    ) => void;
    onSetMenuConfigStatus: (id: string, activationStatus: boolean) => void;
    onShowAddMenuConfigModal: () => void;
    onCloseAddMenuConfigModal: () => void;
    onFetchParentIdData: () => any;
    onCreateMenuConfigForm: (newMenuConfig: ICreateMenuConfigDto) => void;
}

class MenuConfigPage extends React.Component<MenuConfigPageProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            showEditMenuConfigModal: false,
        };
    }

    columns = () => {
        return [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Status',
            dataIndex: 'activationStatus',
            key: 'activationStatus',
            render: (activationStatus) => (
                <span>
                    {
                        activationStatus ?
                            <Tag color="green">Active</Tag> :
                            <Tag color="red">Inactive</Tag>
                    }
                </span>
            ),
        }, {
            title: 'Hyperlink',
            dataIndex: 'hyperlink',
            key: 'hyperlink',
        }, {
            title: 'Order',
            dataIndex: 'order',
            key: 'order',
        }, {
            title: 'Action',
            key: 'action',
            render: (data, record) => (
                <span key={data._id}>
                    <Button
                        type="primary"
                        icon="edit"
                        onClick={(e) => this.editTableClick(data._id, e)}
                    />
                    <Divider type="vertical" />
                    <Button
                        type={data.activationStatus ? 'danger' : 'primary'}
                        icon={data.activationStatus ? 'lock' : 'unlock'}
                        onClick={(e) => this.setMenuConfigStatus(data._id, data.activationStatus, e)}
                    />
                </span>
            ),
        }];
    };

    setMenuConfigStatus = (id: string, activationStatus: boolean, e: any) => {
        this.props.onSetMenuConfigStatus(id, activationStatus);
    }

    editTableClick = (id: string, e: any) => {
        this.props.onFetchMenuConfigDataById(id);
    };

    async componentDidMount(): Promise<any> {
        this.props.onFetchAllMenuConfigData();
    }

    closeEditMenuConfigModal = () => {
        this.props.onCloseEditMenuConfigModal();
    }

    handleEditFormMenuConfigSubmit = (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => {
        this.props.onEditMenuConfigForm(menuConfigId, editedMenuConfig);
        this.props.onFetchAllMenuConfigData();
    }

    clearDropDownMenuButtonState = () => {
        this.props.onClearDropDownMenuButtonState();
    }

    setDropDownMenuButtonState = (parentIdState: Array<any>) => {
        this.props.onSetDropDownMenuButtonState(parentIdState[0]);
    }

    showAddMenuConfigModal = () => {
        this.props.onShowAddMenuConfigModal();
        this.props.onFetchParentIdData();
    }

    closeAddMenuConfigModal = () => {
        this.props.onCloseAddMenuConfigModal();
    }

    handleAddFormMenuConfigSubmit = (newMenuConfig: ICreateMenuConfigDto) => {
        this.props.onCreateMenuConfigForm(newMenuConfig);
        this.props.onFetchAllMenuConfigData();
    }

    render(): JSX.Element {
        const dataSource = this.props.allMenuConfigData.map((item, index) => {
            return { key: index, ...item };
        });
        return (
            <Card className="card-wrapper">
                <Button
                    icon="plus"
                    type="primary"
                    onClick={this.showAddMenuConfigModal}
                >
                    Add New HyperLink
                </Button>
                <AddMenuConfig
                    handleAddFormMenuConfigSubmit={this.handleAddFormMenuConfigSubmit}
                    clearDropDownMenuButtonState={this.clearDropDownMenuButtonState}
                    setDropDownMenuButtonState={this.setDropDownMenuButtonState}
                    closeAddMenuConfigModal={this.closeAddMenuConfigModal}
                    {...this.props}
                />
                <Table
                    rowKey={e => e._id}
                    loading={this.props.isBusy}
                    columns={this.columns()}
                    dataSource={dataSource}
                    pagination={{
                        pageSize: 10,
                    }}
                />
                <EditMenuConfig
                    setDropDownMenuButtonState={this.setDropDownMenuButtonState}
                    clearDropDownMenuButtonState={this.clearDropDownMenuButtonState}
                    handleEditFormMenuConfigSubmit={this.handleEditFormMenuConfigSubmit}
                    closeEditMenuConfigModal={this.closeEditMenuConfigModal}
                    {...this.props}
                />
            </Card>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    // clientUrl: state.appSettings.clientUrl,
    isBusy: state.ui.menuConfigPage.isBusy,
    allMenuConfigData: state.ui.menuConfigPage.allMenuConfigData,
    menuConfigData: state.ui.menuConfigPage.menuConfigData,
    showEditMenuConfigModal: state.ui.menuConfigPage.showEditMenuConfigModal,
    parentIdState: state.ui.menuConfigPage.parentIdState,
    parentIdData: state.ui.menuConfigPage.parentIdData,
    ...state.ui.menuConfigPage,
});

const mapDispatchToProps = (dispatch: Dispatch<MenuConfigPageActions>) => ({
    onFetchAllMenuConfigData: () => dispatch(fetchAllMenuConfig()),
    onFetchMenuConfigDataById: (menuConfigId: string) => dispatch(fetchMenuConfigById(menuConfigId)),
    onCloseEditMenuConfigModal: () => dispatch(closeEditMenuConfigModal()),
    onEditMenuConfigForm: (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => dispatch(editMenuConfigById(menuConfigId, editedMenuConfig)),
    onClearDropDownMenuButtonState: () => dispatch(clearDropDownMenuButtonState()),
    onSetDropDownMenuButtonState: (
        parentStateId: {
            name: string,
            _id: string
        }
    ) => dispatch(setDropDownMenuButtonState(parentStateId)),
    onSetMenuConfigStatus: (id: string, activationStatus: boolean) => dispatch(setMenuConfigStatus(id, activationStatus)),
    onShowAddMenuConfigModal: () => dispatch(showAddMenuConfigModal()),
    onCloseAddMenuConfigModal: () => dispatch(closeAddMenuConfigModal()),
    onFetchParentIdData: () => dispatch(fetchParentIdData()),
    onCreateMenuConfigForm: (newMenuConfig: ICreateMenuConfigDto) => dispatch(createMenuConfig(newMenuConfig)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuConfigPage);
