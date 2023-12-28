import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { input } from "bootstrap";
import "./CreateUserModal.scss";
import { editUserService } from '../../services/adminService'
class EditUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            roleId: "",
            phoneNumber: "",
            address: "",
            showMissing: false,
        }
    }
    componentDidMount() {
    }
    handleResetState = () => {
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            roleId: "",
            phoneNumber: "",
            address: "",
            showMissing: false,
        })
    }
    handleChangeInput = (event) => {
        // console.log(event);
        switch (event.target.name) {
            case "email":
                this.setState({ "email": event.target.value });
                break;
            case "password":
                this.setState({ "password": event.target.value });
                break;
            case "firstName":
                this.setState({ "firstName": event.target.value });
                break;
            case "lastName":
                this.setState({ "lastName": event.target.value });
                break;
            case "phoneNumber":
                this.setState({ "phoneNumber": event.target.value });
                break;
            case "address":
                this.setState({ "address": event.target.value });
                break;
            case "roleId":
                this.setState({ "roleId": event.target.value });
                break;
            case "gender":
                this.setState({ "gender": event.target.value });
                break;
            default:
                break;
        }
    }
    toggle = () => {
        this.props.handleEditUserModalToggle();
        this.handleResetState();
    }
    render() {
        // console.log(this.props.userData);
        return (
            <div>
                <Modal isOpen={this.props.isOpen}
                    fade={true}
                    toggle={this.toggle}
                    centered={true}
                    size='lg'
                    id={this.props.id}
                >
                    <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
                    <ModalBody className='create-user-modal-body'>
                        <div className="container">
                            <form className="row g-3" action="/post-crud" method="POST">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                        value={this.props.userData.email}
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Street"
                                        name="address" onChange={(event) => { this.handleChangeInput(event) }}
                                        value={this.props.userData.address}
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="first-name" className="form-label">First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="first-name" name="firstName"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                        value={this.props.userData.firstName}
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="last-name" className="form-label">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="last-name"
                                        name="lastName"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                        value={this.props.userData.lastName}
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                                    <input type="text"
                                        className="form-control"
                                        id="inputPhoneNumber"
                                        placeholder="0331234567"
                                        name="phoneNumber"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                        value={this.props.userData.phoneNumber}
                                    ></input>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState1" className="form-label">Sex</label>
                                    <select id="inputState1"
                                        className="form-select"
                                        name="gender"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                    >

                                        {this.props.userData.gender === 1 ?
                                            <>
                                                <option selected value="1">Male</option>
                                                <option value="0">Female</option>
                                            </>
                                            :
                                            <>
                                                <option value="1">Male</option>
                                                <option selected value="0">Female</option>
                                            </>}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState2" className="form-label">Role</label>
                                    <select id="inputState2"
                                        className="form-select"
                                        name="roleId"
                                        onChange={(event) => { this.handleChangeInput(event) }}
                                    >
                                        {this.props.userData.roleId === '0' ?
                                            <>
                                                <option selected value="0">Admin</option>
                                                <option value="1">Doctor</option> </>
                                            :
                                            <>
                                                <option value="0">Admin</option>
                                                <option selected value="1">Doctor</option>
                                            </>}
                                    </select>
                                </div>
                                {this.state.showMissing && <div className='col-12 show-missing'>Missing Value</div>}
                            </form>
                        </div>

                    </ModalBody >
                    <ModalFooter className='create-user-modal-footer'>
                        <Button className="create-btn" color="primary" onClick={() => {
                            this.toggle();
                            editUserService(this.props.id, this.state);
                        }}>
                            Update
                        </Button>{' '}
                        <Button className="cancel-btn" color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal >
            </div >
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);
