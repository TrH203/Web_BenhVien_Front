import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss";
import { getUserService, deleteUserService } from "../../services/adminService";
import CreateUserModal from './CreateUserModal';
import EditUserModal from './EditUserModal';
import { emitter } from "../../utils/emitter";
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            openCreateUserModal: false,
            openEditUserModal: false,
            data4EditUser: {},
        }
    }
    async componentDidMount() {
        let response = await getUserService();
        if (response) {
            this.setState({
                arrUsers: response.users
            })
        }
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
            this.setState({
                data4EditUser: data.users,
            })
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
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className='user-manage-body'>
                <div className="text-center">Manage users</div>
                <CreateUserModal
                    isOpen={this.state.openCreateUserModal}
                    handleCreateUserModalToggle={this.handleCreateUserModalToggle}
                    updateDataTable={this.updateDataTable}
                />
                <EditUserModal
                    isOpen={this.state.openEditUserModal}
                    handleEditUserModalToggle={this.handleEditUserModalToggle}
                    userData={this.state.data4EditUser}
                />
                <div className='mx-3'>
                    <div className='col-12 mt-3 add-user-div'>
                        <button className='add-user-btn' onClick={this.handleCreateUserModalToggle}>
                            <i class="fas fa-plus"></i>
                            Create new user
                        </button>
                    </div>
                    <table class="simple-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Action</th>
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
                                                        if (event.target.id) {
                                                            await this.getDataForEdit(event.target.id);
                                                        }
                                                        this.handleEditUserModalToggle();
                                                    }}>
                                                        Edit
                                                        <i className="far fa-edit"></i>
                                                    </button>
                                                    <button className='del' id={item.id} onClick={async (event) => {
                                                        await this.handleDeleteUserModalToggle(item.id);
                                                    }}
                                                    >
                                                        Delete
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
            </div>);
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
