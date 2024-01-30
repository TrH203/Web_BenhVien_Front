import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import "./UserRedux.scss"
import { connect } from 'react-redux';
import { getCode4Create } from "../../services/adminService";
import { LANGUAGES } from '../../utils';
import * as actions from "../../store/actions";
import Lightbox from 'react-image-lightbox';
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
            gender: "",
            position: "",
            roleId: "",
            imageURL: "",
            code: [],
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
            }, () => { console.log(this.state); });
        }
    }
    handleSaveUser = () => {
        if (this.handleMissingValue()) {
            console.log("oke");
        }
    }

    componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.getPositionStart();
        //this.getCode();
    }
    render() {
        // let code = this.state.code;
        let { genders, roles, positions } = this.props;
        let { isLoadingGender } = this.props;
        return (
            <>
                {isLoadingGender === true ? <div>Loading</div> : ""}
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
                                                return (this.props.language === LANGUAGES.VI ?
                                                    <option value={1 - index}>{item.valueVi}</option> :
                                                    <option value={1 - index}>{item.valueEn}</option>)
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
                                                return (this.props.language === LANGUAGES.VI ?
                                                    <option value={index}>{item.valueVi}</option> :
                                                    <option value={index}>{item.valueEn}</option>)
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
                                                return (
                                                    this.props.language === LANGUAGES.VI ?
                                                        <option value={index}>{item.valueVi}</option> :
                                                        <option value={index}>{item.valueEn}</option>)
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
                                        onClick={(event) => { this.handleSaveUser() }}>
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={this.state.imageURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
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
        isLoadingGender: state.user.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
