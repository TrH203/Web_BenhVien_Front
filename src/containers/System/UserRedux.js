import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import "./UserRedux.scss"
import { connect } from 'react-redux';
import { getCode4Create } from "../../services/adminService";
import { LANGUAGES } from '../../utils';
import * as actions from "../../store/actions";
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
            pic: "",
            code: []
        };

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
    async getCode() {
        let code = await getCode4Create("gender", "role");
        if (Object.keys(code).length !== 0) {
            this.setState({
                code: code
            }, () => { console.log(this.state); });
        }
    }
    componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        //this.getCode();
    }

    render() {
        let code = this.state.code;
        let { genders, roles } = this.props;
        console.log(roles);
        return (
            <>
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
                                            {(code.length !== 0) && code[1].code.map((item, index) => {
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
                                            {(roles !== 0) && roles.map((item, index) => {
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
                                    <input type="text" className="form-control" id="inputpic" name="pic" value={this.state.pic} onChange={(event) => { this.handleChangeInput(event, "pic"); }}></input>
                                </div>
                                <div className='col-md-3'>
                                    <Button className="create-btn form-control" color="primary">
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.user.genders,
        roles: state.user.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
