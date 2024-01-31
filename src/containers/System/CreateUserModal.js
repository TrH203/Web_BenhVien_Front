import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { input } from "bootstrap";
import "./CreateUserModal.scss";
import { createNewUserService } from '../../services/adminService';
import { emitter } from "../../utils/emitter";
import Loading from './Loading';

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
            address: "",
        }
        this.listenEmitter();
    }

    listenEmitter() {
        emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
            this.handleResetState();
        })
    }
    componentDidMount() {
    }
    handleResetState = () => {
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "1",
            roleId: "0",
            phoneNumber: "",
            address: "",
        })
    }
    handleMissingValue = () => {
        if (!this.state.email ||
            !this.state.password ||
            !this.state.firstName ||
            !this.state.lastName ||
            !this.state.phoneNumber ||
            !this.state.address ||
            !this.state.gender ||
            !this.state.roleId
        ) {
            alert("Missing value");
            return false;
        }
        else {
            return true
        }
    }
    handleChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log(this.state);
        })

    }
    toggle = () => {
        this.props.handleCreateUserModalToggle();
        // this.handleResetState();

    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen}
                    fade={true}
                    toggle={this.toggle}
                    centered={true}
                    size='lg'
                >
                    <ModalHeader toggle={this.toggle}>Create new user</ModalHeader>
                    <ModalBody className='create-user-modal-body' close={this.toggle}>
                        <div className="container">
                            <form className="row g-3" action="/post-crud" method="POST">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={(event) => { this.handleChangeInput(event, "email") }}></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" name="password" value={this.state.password} onChange={(event) => { this.handleChangeInput(event, 'password') }}></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="first-name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="first-name" name="firstName" value={this.state.firstName} onChange={(event) => { this.handleChangeInput(event, 'firstName') }}></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="last-name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="last-name" name="lastName" value={this.state.lastName} onChange={(event) => { this.handleChangeInput(event, 'lastName') }}></input>
                                </div>
                                <div className="col-md-12">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Street" name="address" value={this.state.address} onChange={(event) => { this.handleChangeInput(event, 'address') }}></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="inputPhoneNumber" placeholder="0331234567" name="phoneNumber" value={this.state.phoneNumber} onChange={(event) => { this.handleChangeInput(event, 'phoneNumber') }}></input>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState1" className="form-label">Sex</label>
                                    <select id="inputState1" className="form-select" name="gender" onChange={(event) => { this.handleChangeInput(event, 'gender') }}>
                                        {this.props.code.gender && this.props.code.gender.map((item, index) => {
                                            return (
                                                <option value={1 - index}>
                                                    {item.valueEn}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState2" className="form-label">Role</label>
                                    <select id="inputState2" className="form-select" name="roleId" onChange={(event) => { this.handleChangeInput(event, 'roleId') }}>
                                        {this.props.code.role && this.props.code.role.map((item, index) => {
                                            return (
                                                <option value={index}>
                                                    {item.valueEn}
                                                </option>
                                            )
                                        })}
                                        {/* <option selected value="0">Admin</option>
                                        <option value="1">Doctor</option> */}
                                    </select>
                                </div>
                                {this.state.showMissing && <div className='col-12 show-missing'>Missing Value</div>}
                            </form>
                        </div>

                    </ModalBody >
                    <ModalFooter className='create-user-modal-footer'>
                        <Button className="create-btn" color="primary" onClick={async () => {
                            if (this.handleMissingValue()) {
                                let status = await createNewUserService(this.state);
                                // console.log(this.state);
                                if (status.errCode !== 0) {
                                    alert(status.message);
                                }
                                if (status.errCode === 0) {
                                    this.toggle();
                                    this.props.updateDataTable();
                                }
                            }
                        }}>
                            Create
                        </Button>{' '}
                        <Button className="cancel-btn" color="secondary" onClick={() => {
                            this.toggle();
                        }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModal);
