import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss";
import { getUserService } from "../../services/adminService";
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        }
    }
    async componentDidMount() {
        let response = await getUserService();
        if (response) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log(this.state.arrUsers);
    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div>
                <div className="text-center">Manage users</div>
                <div className='mx-3'>
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
                                                    <button className='edit'>
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
