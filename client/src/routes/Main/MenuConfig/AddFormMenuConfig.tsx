import { FormComponentProps } from 'antd/lib/form';
import React from 'react';
import {
    Form,
    Row,
    Col,
    Input,
    //  Tooltip,
    //   Dropdown,
    Button,
    Menu,
    Tooltip,
    Dropdown,
    message,
    Popconfirm
} from 'antd';
import { IFindParentIdMenuConfigDto, ICreateMenuConfigDto } from '../../../service-proxies/service-proxies';

interface AddFormMenuConfigProps extends FormComponentProps {
    isBusy: boolean;
    showAddMenuConfigModal: boolean;
    parentIdState: {
        name: string;
        _id: string;
    };
    parentIdData: IFindParentIdMenuConfigDto[];
    clearDropDownMenuButtonState: () => void;
    setDropDownMenuButtonState: (parentIdState: Array<any>) => void;
    closeAddMenuConfigModal: () => void;
    handleAddFormMenuConfigSubmit: (newMenuConfig: ICreateMenuConfigDto) => void;
}

// load menu item in drop down list
const ParentIdData = (
    data: {
        _id: string,
        name: string,
    }) => {
    return (
        <Menu.Item key={data._id}>{data.name}</Menu.Item>
    );
};

class AddFormMenuConfig extends React.Component<AddFormMenuConfigProps> {
    constructor(props: any) {
        super(props);
        this.props.form.resetFields();
    }
    checkFormReset(): void {
        // check if form is closed or not to reset form props
        if (!this.props.showAddMenuConfigModal) {
            this.props.form.resetFields();
        }
    }

    handleButtonInDropDownClick(e: any): void {
        // check if has submenu or not
        if (this.props.parentIdState._id) {
            this.props.clearDropDownMenuButtonState();
        }
    }

    // handle click event on menu item
    handleMenuClick(
        _item: any,
        _key: any,
        _keyPath: any
    ): void {
        this.props.setDropDownMenuButtonState(
            this.props.parentIdData.filter(item => item._id === _key)
        );
    }

    handleAddFormMenuConfigSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
                return;
            }
            let newMenuConfig;
            const newParentId: object[] = [];
            if (this.props.parentIdState._id) {
                newParentId.push(this.props.parentIdState);
                newMenuConfig = {
                    // tslint:disable-next-line:radix
                    order: parseInt(values.order),
                    ...values,
                    parentid: newParentId
                };
            } else {
                newMenuConfig = {
                    // tslint:disable-next-line:radix
                    order: parseInt(values.order),
                    ...values,
                    parentid: newParentId,
                };
            }
            // console.log(typeof parseInt(this.props.form.getFieldValue('order')));
            this.props.handleAddFormMenuConfigSubmit(newMenuConfig);
        });
    }

    // list of parentid for dropdown
    menu = () => {
        return (
            <Menu
                onClick={({ item, key, keyPath }) => this.handleMenuClick(item, key, keyPath)}
                selectedKeys={[this.props.parentIdState._id]}
            >
                {this.props.parentIdData.map((data) => ParentIdData(data))}
            </Menu>
        );
    }
    render(): JSX.Element {
        const { getFieldDecorator } = this.props.form;
        this.checkFormReset();
        return (
            <Form>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Name"
                        // key={this.props.menuConfigData._id + '_' + this.props.menuConfigData.name}
                        >
                            {getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: 'Please input name' },
                                    {
                                        pattern: /^[a-zA-Z0-9_]{6,15}$/,
                                        message: 'Name must be atleast 6 words and maximum is 10',
                                    },
                                ],
                                validateTrigger: 'onBlur',
                                validateFirst: true,
                            })(<Input
                                placeholder="Name"
                            />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Order"
                        // key={this.props.menuConfigData._id + '_order'}
                        >
                            {getFieldDecorator('order', {
                                rules: [
                                    { required: true, message: 'Please input order' },
                                    {
                                        pattern: /^[0-9]{1,2}$/,
                                        message: 'Order must be number from 1 to xx',
                                    },
                                ],
                                validateTrigger: 'onBlur',
                                validateFirst: true,
                            })(<Input
                                placeholder="Order"
                            // key={this.props.menuConfigData._id}
                            />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Hyperlink"
                        // key={this.props.menuConfigData._id + '_' + this.props.menuConfigData.hyperlink}
                        >
                            {getFieldDecorator('hyperlink', {
                                rules: [
                                    { required: true, message: 'Please input hyperlink' },
                                    {
                                        pattern: /^[a-zA-Z0-9_]{6,25}$/,
                                        message: 'Hyperlink must be atleast 6 words and maximum is 10',
                                    },
                                ],
                                validateTrigger: 'onBlur',
                                validateFirst: true,
                            })(
                                <Input
                                    placeholder="Hyperlink"
                                // key={this.props.menuConfigData._id}
                                // onChange={(e) => this.onHyperlinkChange(e)}
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Submenu"
                        // key={this.props.menuConfigData._id + '_Submenu'}
                        >
                            {(
                                <Tooltip
                                    placement="top"
                                    title="Click to remove submenu"
                                >
                                    <Dropdown.Button
                                        onClick={(e) => this.handleButtonInDropDownClick(e)}
                                        trigger={['hover']}
                                        overlay={this.menu()}
                                    // key={this.props.menuConfigData._id}
                                    >
                                        {
                                            this.props.parentIdState.name
                                        }
                                    </Dropdown.Button>
                                </Tooltip>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <div className="btn-wrapper">
                    <Form.Item>
                        <Popconfirm
                            title="Submit?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={this.handleAddFormMenuConfigSubmit}
                        >
                            <Button
                                loading={this.props.isBusy}
                                type="primary"
                            >
                                Save
                            </Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Discard Change ?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={this.props.closeAddMenuConfigModal}
                        >
                            <Button>
                                Cancel
                        </Button>
                        </Popconfirm>
                    </Form.Item>
                </div>
            </Form>
        );
    }
}

export default Form.create()(AddFormMenuConfig);
