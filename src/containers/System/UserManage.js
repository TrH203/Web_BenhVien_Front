import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss";
import { getUserService, deleteUserService, getCode4Create } from "../../services/adminService";
import CreateUserModal from './CreateUserModal';
import EditUserModal from './EditUserModal';
import { emitter } from "../../utils/emitter";
import Loading from './Loading';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            openCreateUserModal: false,
            openEditUserModal: false,
            data4EditUser: {},
            code4createModal: []
        }
    }
    async componentDidMount() {
        let response = await getUserService();
        if (response) {
            this.setState({
                arrUsers: response.users
            })
        }
        this.getCode();
        // console.log(this.state.arrUsers);
    }

    handleCreateUserModalToggle = () => {
        this.setState({
            openCreateUserModal: !this.state.openCreateUserModal,
        })
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
    }
    handleEditUserModalToggle = () => {
        this.setState({
            openEditUserModal: !this.state.openEditUserModal,
        })
    }
    handleDeleteUserModalToggle = async (id) => {
        await deleteUserService(id);
        this.updateDataTable();
    }

    getDataForEdit = async (id) => {
        let data = await getUserService(id);
        delete data.password;
        if (data.errCode === 0) {
            return data.users
        }
        else {
            return {}
        }
    }

    updateDataTable = async () => {
        let response = await getUserService();
        if (response) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    getCode = async () => { // get code from adminservice
        let code4Create = await getCode4Create("gender", "role");
        if (code4Create) {
            this.setState({
                code4createModal: { gender: code4Create[0].code, role: code4Create[1].code }
            }, () => {
                emitter.emit("EVENT_CODE_FOR_REDUX", this.state.code4createModal);
            })
        }
    }
    render() {
        let arrUsers = this.state.arrUsers;
        let code = this.state.code4createModal;
        return (
            <>
                <div className='user-manage-body' >
                    <div className="text-center">
                        <FormattedMessage id="user-manage.manageUsers" defaultMessage="Manage users" />
                    </div>
                    <CreateUserModal
                        isOpen={this.state.openCreateUserModal}
                        handleCreateUserModalToggle={this.handleCreateUserModalToggle}
                        updateDataTable={this.updateDataTable}
                        code={code}
                    />
                    <EditUserModal
                        isOpen={this.state.openEditUserModal}
                        handleEditUserModalToggle={this.handleEditUserModalToggle}
                        updateDataTable={this.updateDataTable}
                        code={code}
                    />
                    <div className='mx-3'>
                        <div className='col-12 mt-3 add-user-div'>
                            <button className='add-user-btn' onClick={this.handleCreateUserModalToggle}>
                                <i class="fas fa-plus"></i>
                                <FormattedMessage id="user-manage.createNewUser" defaultMessage="Create new user" />
                            </button>
                        </div>
                        <table className="simple-table">
                            <thead>
                                <tr className='table-header'>
                                    <th>
                                        <FormattedMessage id="user-manage.id" defaultMessage="Id" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="user-manage.email" defaultMessage="Email" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="user-manage.firstName" defaultMessage="First Name" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="user-manage.lastName" defaultMessage="Last Name" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="user-manage.phoneNumber" defaultMessage="Phone Number" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="user-manage.action" defaultMessage="Action" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.phoneNumber}</td>
                                                <td>
                                                    <div className='div-btn'>
                                                        <button className='edit' id={item.id} onClick={async (event) => {
                                                            this.handleEditUserModalToggle();
                                                            if (event.target.id) {
                                                                let data4EditUser = await this.getDataForEdit(event.target.id);
                                                                emitter.emit("Fill_Update_User_Data", data4EditUser);
                                                            }
                                                        }}>
                                                            <FormattedMessage id="user-manage.edit" defaultMessage="Edit" />
                                                            <i className="far fa-edit"></i>
                                                        </button>
                                                        <button className='del' id={item.id} onClick={async (event) => {
                                                            await this.handleDeleteUserModalToggle(item.id);
                                                        }}
                                                        >
                                                            <FormattedMessage id="user-manage.delete" defaultMessage="Delete" />
                                                            <i class="fas fa-user-minus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>);
    }

}

const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
