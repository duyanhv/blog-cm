import { Form, Input, Row, Col, Dropdown, Menu, message, Button, Tooltip } from 'antd';
import React from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { IFindMenuConfigDto, IUpdateMenuConfigDto } from '../../../service-proxies/service-proxies';
import './EditFormMenuConfig.less';

interface EditFormMenuConfigProps extends FormComponentProps {
    clientUrl: string;
    menuConfigData: IFindMenuConfigDto;
    showEditMenuConfigModal: boolean;
    isBusy: boolean;
    parentIdState: {
        name: string;
        _id: string;
    };
    closeEditMenuConfigModal: () => void;
    handleEditFormMenuConfigSubmit: (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => void;
    clearDropDownMenuButtonState: () => void;
    setDropDownMenuButtonState: (parentIdState: Array<any>) => void;
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

class EditFormMenuConfig extends React.Component<EditFormMenuConfigProps> {
    constructor(props: any) {
        super(props);
        this.handleEditFormMenuConfigSubmit = this.handleEditFormMenuConfigSubmit.bind(this);
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
            this.props.menuConfigData.parentIdData.filter(item => item._id === _key)
        );
    }

    // list of parentid for dropdown
    menu = () => {
        return (
            <Menu
                onClick={({ item, key, keyPath }) => this.handleMenuClick(item, key, keyPath)}
                selectedKeys={[this.props.parentIdState._id]}
            >
                {this.props.menuConfigData.parentIdData.map((data) => ParentIdData(data))}
            </Menu>
        );
    }

    handleEditFormMenuConfigSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                message.error(err);
                return;
            }
            let editedMenuConfig;
            const newParentId: object[] = [];
            if (this.props.parentIdState._id) {
                newParentId.push(this.props.parentIdState);
                editedMenuConfig = {
                    // tslint:disable-next-line:radix
                    order: parseInt(values.order),
                    ...values,
                    parentid: newParentId
                };
            } else {
                editedMenuConfig = {
                    // tslint:disable-next-line:radix
                    order: parseInt(values.order),
                    ...values,
                    parentid: newParentId,
                };
            }
            this.props.handleEditFormMenuConfigSubmit(this.props.menuConfigData._id, editedMenuConfig);
            this.props.form.resetFields();
        });
    }

    checkFormReset(): void {
        // check if form is closed or not to reset form props
        if (!this.props.showEditMenuConfigModal) {
            this.props.form.resetFields();
        }
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
                            key={this.props.menuConfigData._id + '_' + this.props.menuConfigData.name}
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
                                initialValue: this.props.menuConfigData.name,
                            })(<Input
                                placeholder="Name"
                            />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Order"
                            key={this.props.menuConfigData._id + '_order'}
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
                                initialValue: this.props.menuConfigData.order,
                            })(<Input
                                placeholder="Order"
                                key={this.props.menuConfigData._id}
                            />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Hyperlink"
                            key={this.props.menuConfigData._id + '_' + this.props.menuConfigData.hyperlink}
                        >
                            {getFieldDecorator('hyperlink', {
                                rules: [
                                    { required: true, message: 'Please input hyperlink' },
                                    {
                                        pattern: /^[a-zA-Z0-9_]{6, 2083}$/,
                                        message: 'Hyperlink must be at least 6 words',
                                    },
                                ],
                                validateTrigger: 'onBlur',
                                validateFirst: true,
                                initialValue: this.props.menuConfigData.hyperlink,
                            })(
                                <Input
                                    placeholder="Hyperlink"
                                    key={this.props.menuConfigData._id}
                                // onChange={(e) => this.onHyperlinkChange(e)}
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Submenu"
                            key={this.props.menuConfigData._id + '_Submenu'}
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
                                        key={this.props.menuConfigData._id}
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
                        <Button
                            loading={this.props.isBusy}
                            type="primary"
                            onClick={this.handleEditFormMenuConfigSubmit}
                        >
                            Save
                        </Button>
                        <Button onClick={this.props.closeEditMenuConfigModal}>
                            Cancel
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        );
    }
}

export default Form.create()(EditFormMenuConfig);
