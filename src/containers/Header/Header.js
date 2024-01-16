import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from "../../utils/constant"
import { changeLanguage } from '../../store/actions';

class Header extends Component {

    handleSwitchLanguage = (value) => {
        this.props.processChangeLanguague(value);
    }
    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* switch language and logout button*/}
                <div className='left-container'>
                    <div className='switch-language-container'>
                        <div className={language === "vi" ? 'vi-container active' : "vi-container"} onClick={(e) => { this.handleSwitchLanguage(LANGUAGES.VI); }}>
                            <div>VI</div>
                            <div className='vi-flag'></div>
                        </div>
                        <div className={language === "en" ? 'en-container active' : "en-container"} onClick={(e) => { this.handleSwitchLanguage(LANGUAGES.EN); }}>
                            <div>EN</div>
                            <div className='en-flag'></div>
                        </div>
                    </div>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        processChangeLanguague: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
