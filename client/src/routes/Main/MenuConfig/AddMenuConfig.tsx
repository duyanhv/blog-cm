import React from 'react';
import { Modal } from 'antd';
import AddFormMenuConfig from './AddFormMenuConfig';
import { ICreateMenuConfigDto } from '../../../service-proxies/service-proxies';

interface AddMenuConfigProps {
    showAddMenuConfigModal: boolean;
    isBusy: boolean;
    parentIdData: any;
    clearDropDownMenuButtonState: () => void;
    closeAddMenuConfigModal: () => void;
    setDropDownMenuButtonState: (parentIdState: Array<any>) => void;
    handleAddFormMenuConfigSubmit: (newMenuConfig: ICreateMenuConfigDto) => void;
}

export default class AddMenuConfig extends React.Component<AddMenuConfigProps> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Modal
                visible={this.props.showAddMenuConfigModal}
                title="Add New HyperLink"
                // onOk={this.handleOk}
                onCancel={this.props.closeAddMenuConfigModal}
                footer={[
                    // <Button key="back" onClick={this.props.closeEditMenuConfigModal}>Return</Button>,
                    // <Button key="submit" type="primary" loading={this.props.isBusy} onClick={this.testParentClick}>
                    //     Submit
                    //       </Button>,
                ]}
            >
                <AddFormMenuConfig {...this.props} />
            </Modal>
        );
    }
}
