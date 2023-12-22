import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
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
                            <input type='text' className='form-control' placeholder='Enter your user name'></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className='col-12'>Password</label>
                            <input type='password' className='form-control' placeholder='Enter your password'></input>
                        </div>
                        <div className='col-12 login-input'>
                            <button className='btn-login'>Login</button>
                        </div>
                        <div className='col-12'>
                            <div className='forgot-password'>Forgot your password?</div>
                        </div>
                        <div className='col-12 text-center mt-5'>
                            <div>Or sign in with:</div>
                        </div>
                        <div className='social-ass'>
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>

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
