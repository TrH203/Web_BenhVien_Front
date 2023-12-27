import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { input } from "bootstrap";
import "./CreateUserModal.scss";
import { createNewUser } from '../../services/adminService';
class CreateUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "1",
            roleId: "0",
            phoneNumber: "",
            address: ""

        }
    }
    componentDidMount() {

    }
    toggle = () => {
        alert("hello")
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <Modal isOpen={this.props.isOpen}
                    fade={true}
                    toggle={this.props.handleModalToggle}
                    centered={true}
                    size='lg'
                >
                    <ModalHeader toggle={this.props.handleModalToggle}>Create new user</ModalHeader>
                    <ModalBody className='create-user-modal-body'>
                        <div className="container">
                            <form className="row g-3" action="/post-crud" method="POST">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="email"> value={this.state.email}</input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" name="password"></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="first-name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="first-name" name="firstName"></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="last-name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="last-name" name="lastName"></input>
                                </div>
                                <div className="col-md-12">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Street" name="address"></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="inputPhoneNumber" placeholder="0331234567" name="phoneNumber"></input>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState1" className="form-label">Sex</label>
                                    <select id="inputState1" className="form-select" name="gender">
                                        <option selected value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState2" className="form-label">Role</label>
                                    <select id="inputState2" className="form-select" name="roleId">
                                        <option selected value="0">Admin</option>
                                        <option value="1">Doctor</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                    </ModalBody>
                    <ModalFooter className='create-user-modal-footer'>
                        <Button className="create-btn" color="primary" onClick={() => {
                            this.props.handleModalToggle();
                            createNewUser();
                        }}>
                            Create
                        </Button>{' '}
                        <Button className="cancel-btn" color="secondary" onClick={this.props.handleModalToggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModal);
