import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import "./UserRedux.scss"
import { connect } from 'react-redux';
import { getCode4Create } from "../../services/adminService";
import { LANGUAGES } from '../../utils';
import * as actions from "../../store/actions";
import Lightbox from 'react-image-lightbox';
import Loading from './Loading';
import { getUserService, deleteUserService } from '../../services/adminService';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: -1,
            position: -1,
            roleId: -1,
            imageURL: "",
            //code: [],
            //arrUsers: [],
            isOpen: false
        };

    }
    handleChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            // console.log(this.state);
        })
    }
    handleMissingValue = () => {
        let arrCheck = ["email", "password", "firstName", "lastName", "phoneNumber", "address", "gender", "position", "roleId"];
        let missing = 0;
        for (let v of arrCheck) {
            if (!this.state[v]) {
                alert("Missing value: " + v.toUpperCase());
                missing++;
            }
        }
        return missing === 0;
    }
    handleUpload = (event) => {
        let file = event.target.files[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                imageURL: objectUrl
            })
        }
    }
    async getCode() {
        let code = await getCode4Create("gender", "role");
        if (Object.keys(code).length !== 0) {
            this.setState({
                code: code
            });
        }
    }
    handleSaveUser = async () => {
        if (this.handleMissingValue()) {
            let user2Create = {
                "email": this.state.email,
                "password": this.state.password,
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "phoneNumber": this.state.phoneNumber,
                "address": this.state.address,
                "gender": this.state.gender,
                //"position": this.state.position,
                "roleId": this.state.roleId,
            };
            //console.log(user2Create);
            await this.props.saveUserStart(user2Create);
        }
    }
    resetUserInfoState = () => {
        this.setState({
            "email": "",
            "password": "",
            "firstName": "",
            "lastName": "",
            "phoneNumber": "",
            "address": "",
            "gender": -1,
            "position": -1,
            "roleId": -1,
        });
    }
    updateAllUser = async () => {
        let rs = await getUserService();
        if (rs && rs.errCode === 0) {
            this.setState({
                arrUsers: rs.users
            })
        }
    }
    handleEditUserRedux = async (event) => {
        let rs = await getUserService(event.target.id);
        if (rs && rs.errCode === 0) {
            console.log(rs);
            this.setState({
                "email": rs.users.email,
                // "password": rs.users.pas,
                "firstName": rs.users.firstName,
                "lastName": rs.users.lastName,
                "phoneNumber": rs.users.phoneNumber,
                "address": rs.users.address,
                "gender": rs.users.gender,
                // "position": rs.users.position,
                "roleId": rs.users.roleId,
            }, () => {
                console.log(this.state);
            })
        }

        //this.props.editUser(event.target.id);
    }
    handleDeleteUserRedux = async (event) => {
        let rs = await deleteUserService(event.target.id);
        if (rs && rs.errCode === 0) {
            this.resetUserInfoState();
            //alert("Delete succeed");
            await this.props.updateAllUser();
        }
    }
    componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.getPositionStart();
        this.props.updateAllUser();
        //this.getCode();
    }
    render() {
        // let code = this.state.code;
        let { genders, roles, positions } = this.props;
        let { isLoading } = this.props;
        let { arrUsers } = this.props;
        let { updateAllUser } = this.props;
        //console.log(arrUsers);
        return (
            <>
                {isLoading === true ? <Loading /> : ""}
                <div className="user-redux-container" >
                    <div className='title'>User Redux from TrHien203</div>
                    <div className='form-container'>
                        <div className='container'>
                            <form className="row g-3">
                                <div className='col-md-3'>
                                    <label for="inputEmail3"><FormattedMessage id='redux.email' /></label>
                                    <input type="email" className="form-control" id="inputEmail3" name="email" value={this.state.email} onChange={(event) => { this.handleChangeInput(event, "email"); }}></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputPassword3"><FormattedMessage id='redux.password' /></label>
                                    <input type="password" className="form-control" id="inputPassword3" name="password" value={this.state.password} onChange={(event) => { this.handleChangeInput(event, "password"); }}></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputfirstName3"><FormattedMessage id='redux.firstName' /></label>
                                    <input type="text" className="form-control" id="inputfirstName3" name="firstName" value={this.state.firstName} onChange={(event) => { this.handleChangeInput(event, "firstName"); }}></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputlastName3"><FormattedMessage id='redux.lastName' /></label>
                                    <input type="text" className="form-control" id="inputlastName3" name="lastName" value={this.state.lastName} onChange={(event) => { this.handleChangeInput(event, "lastName"); }}></input>
                                </div>

                                <div className='col-md-3'>
                                    <label for="inputphoneNumber"><FormattedMessage id='redux.phoneNumber' /></label>
                                    <input type="text" className="form-control" id="inputphoneNumber3" name="phoneNumber" value={this.state.phoneNumber} onChange={(event) => { this.handleChangeInput(event, "phoneNumber"); }} ></input>

                                </div>
                                <div className='col-md-9'>
                                    <label for="inputAdress9"><FormattedMessage id='redux.address' /></label>
                                    <input type="address" className="form-control" id="inputAdress9" name="address" value={this.state.address} onChange={(event) => { this.handleChangeInput(event, "address"); }}></input>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState1" className="form-label"><FormattedMessage id='redux.gender' /></label>
                                    <select id="inputState1" className="form-select" name="gender" onChange={(event) => { this.handleChangeInput(event, 'gender') }}>
                                        <>
                                            <option>Choose...</option>
                                            {(genders.length !== 0) && genders.map((item, index) => {
                                                if (index == this.state.gender) {
                                                    console.log("index", index);
                                                    console.log("roleid", this.state.gender);
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index} selected>{item.valueVi}</option> :
                                                            <option value={index} selected>{item.valueEn}</option>)
                                                }
                                                else {
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index}>{item.valueVi}</option> :
                                                            <option value={index}>{item.valueEn}</option>)
                                                }
                                            })}
                                        </>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState2" className="form-label"><FormattedMessage id='redux.position' /></label>
                                    <select id="inputState2" className="form-select" name="position" onChange={(event) => { this.handleChangeInput(event, 'position') }}>
                                        <>
                                            <option>Choose...</option>
                                            {(positions.length !== 0) && positions.map((item, index) => {
                                                if (index == this.state.position) {
                                                    console.log("index", index);
                                                    console.log("roleid", this.state.position);
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index} selected>{item.valueVi}</option> :
                                                            <option value={index} selected>{item.valueEn}</option>)
                                                }
                                                else {
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index}>{item.valueVi}</option> :
                                                            <option value={index}>{item.valueEn}</option>)
                                                }
                                            })}
                                        </>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputState3" className="form-label"><FormattedMessage id='redux.role' /></label>
                                    <select id="inputState3" className="form-select" name="role" onChange={(event) => { this.handleChangeInput(event, 'roleId') }}>
                                        <>
                                            <option>Choose...</option>
                                            {(roles.length !== 0) && roles.map((item, index) => {
                                                if (index == this.state.roleId) {
                                                    console.log("index", index);
                                                    console.log("roleid", this.state.roleId);
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index} selected>{item.valueVi}</option> :
                                                            <option value={index} selected>{item.valueEn}</option>)
                                                }
                                                else {
                                                    return (
                                                        this.props.language === LANGUAGES.VI ?
                                                            <option value={index}>{item.valueVi}</option> :
                                                            <option value={index}>{item.valueEn}</option>)
                                                }
                                            })}

                                        </>
                                    </select>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputpic" className='form-label'><FormattedMessage id='redux.anh' /></label>
                                    <div className='upload-image-container'>
                                        <input type='file' id='uploadImage' hidden onChange={(event) => { this.handleUpload(event) }}></input>
                                        <label htmlFor='uploadImage' id='tai-anh'>Tai anh <i class="fas fa-upload"></i></label>
                                        <div className='preview-image-container'>
                                            <div className='preview-image' style={{ backgroundImage: `url(${this.state.imageURL})` }} onClick={(event) => { this.setState({ isOpen: true }) }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <Button className="create-btn form-control"
                                        color="primary"
                                        onClick={async (event) => { await this.handleSaveUser(); updateAllUser(); }}>
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <div className='mx-3'>
                    <div className='table-container table-user-redux'>
                        <table className='simple-table'>
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
                                                        <button className='edit' id={item.id} onClick={(event) => {
                                                            this.handleEditUserRedux(event);
                                                        }}>
                                                            <FormattedMessage id="user-manage.edit" defaultMessage="Edit" />
                                                            <i className="far fa-edit"></i>
                                                        </button>
                                                        <button className='del' id={item.id} onClick={async (event) => {
                                                            await this.handleDeleteUserRedux(event);
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
                    </div >
                </div>
                {
                    this.state.isOpen && (
                        <Lightbox
                            mainSrc={this.state.imageURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )
                }
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.user.genders,
        roles: state.user.roles,
        positions: state.user.positions,
        isLoading: state.user.isLoading,
        arrUsers: state.user.arrUsers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        saveUserStart: (user2Save) => dispatch(actions.saveUserStart(user2Save)),
        updateAllUser: () => dispatch(actions.updateUserTableStart()),
        editUser: (id) => dispatch(actions.editUserStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
