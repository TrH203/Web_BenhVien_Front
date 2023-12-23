import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'th203',
            password: '123',
            hidePassword: true
        }
    }

    handOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log("User Name", event.target.value)
    }
    handOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log("Password", event.target.value)
    }

    handOnChangeLoginBtn = () => {
        console.log("User Name:", this.state.username);
        console.log("Password:", this.state.password);
    }

    handOnHidePasswordClick = () => {
        // if (this.state.hidePassword === true) {
        //     this.setState({
        //         hidePassword: false
        //     })
        // }
        // else if (this.state.hidePassword === false) {
        //     this.setState({
        //         hidePassword: true
        //     })
        // }
        this.setState({
            hidePassword: !this.state.hidePassword
        })


    }

    render() {

        return (
            // write with JSX code
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label className='col-12'>Username</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your user name'
                                onChange={(event) => this.handOnChangeUserName(event)}>
                            </input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className='col-12'>Password</label>
                            <div className='custom-password-input'>
                                <input
                                    type={this.state.hidePassword ? "password" : "text"}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    onChange={(event) => { this.handOnChangePassword(event) }}></input>

                                <i class={this.state.hidePassword ? "far fa-eye eye" : "far fa-eye-slash eye"} onClick={() => this.handOnHidePasswordClick()}></i>
                            </div>
                        </div>
                        <div className='col-12 login-input'>
                            <button className='btn-login' onClick={this.handOnChangeLoginBtn}>Login</button>
                        </div>
                        <div className='col-12'>
                            <div className='forgot-password'>Forgot your password?</div>
                        </div>
                        <div className='col-12 text-center mt-4'>
                            <div>Or sign in with:</div>
                        </div>
                        <div className='social-ass'>
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
