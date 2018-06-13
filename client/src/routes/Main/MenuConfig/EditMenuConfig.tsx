import React from 'react';
import {
    Modal,
    // Button
} from 'antd';
import EditFormMenuConfig from './EditFormMenuConfig';
import {
    IFindMenuConfigDto,
    IUpdateMenuConfigDto
} from '../../../service-proxies/service-proxies';

interface EditMenuConfigProps {
    isBusy: boolean;
    // clientUrl: string;
    showEditMenuConfigModal: boolean;
    menuConfigData: IFindMenuConfigDto;
    closeEditMenuConfigModal: () => void;
    handleEditFormMenuConfigSubmit: (menuConfigId: string, editedMenuConfig: IUpdateMenuConfigDto) => void;
    clearDropDownMenuButtonState: () => void;
    setDropDownMenuButtonState: (parentIdState: Array<any>) => void;
}

class EditMenuConfig extends React.Component<EditMenuConfigProps> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Modal
                visible={this.props.showEditMenuConfigModal}
                title="Edit Menu Configuration"
                // onOk={this.handleOk}
                onCancel={this.props.closeEditMenuConfigModal}
                footer={[
                    // <Button key="back" onClick={this.props.closeEditMenuConfigModal}>Return</Button>,
                    // <Button key="submit" type="primary" loading={this.props.isBusy} onClick={this.testParentClick}>
                    //     Submit
                    //       </Button>,
                ]}
            >
                <EditFormMenuConfig
                    {...this.props}
                />
            </Modal>
        );
    }
}

export default EditMenuConfig;
