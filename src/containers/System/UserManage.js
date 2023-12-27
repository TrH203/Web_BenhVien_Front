import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss";
import { getUserService } from "../../services/adminService";
import CreateUserModal from './CreateUserModal';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            openModel: false,
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

    handleModalToggle = () => {
        this.setState({
            openModel: !this.state.openModel,
        })
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className='user-manage-body'>
                <div className="text-center">Manage users</div>
                <CreateUserModal
                    isOpen={this.state.openModel}
                    handleModalToggle={this.handleModalToggle}
                />
                <div className='mx-3'>
                    <div className='col-12 mt-3 add-user-div'>
                        <button className='add-user-btn' onClick={this.handleModalToggle}>
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
                                                    <button className='edit' id=''>
                                                        Edit
                                                        <i className="far fa-edit"></i>
                                                    </button>
                                                    <button className='del'>
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
