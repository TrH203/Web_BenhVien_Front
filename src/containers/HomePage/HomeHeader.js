import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomeHeader.scss";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguage } from '../../store/actions';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    handleChangeLanguage = (lan) => {
        this.props.changeLanguageRedux(lan);
    }
    render() {
        // * hong trong hien
        // hoang trong hien add 2
        let { language, adminInfo } = this.props;
        // console.log("check: ",adminInfo);
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars fa-lg menu-bar"></i>
                            <img className='logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt='background'></img>
                        </div>
                        <div className='center-content'>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id="home-header.specialty" /></b></div>
                                <div><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id='home-header.health-facilities' /></b></div>
                                <div><FormattedMessage id='home-header.choose-clinic' /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id='home-header.doctor' /></b></div>
                                <div><FormattedMessage id='home-header.choose-doctor' /></div>
                            </div>
                            <div className='child-center-content'>
                                <div><b><FormattedMessage id='home-header.package' /></b></div>
                                <div><FormattedMessage id='home-header.general-health-checkup' /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='inner-div-right'>
                                <img src='https://bookingcare.vn/assets/icon/history.svg' alt='history'></img>
                                <div><FormattedMessage id='home-header.appointments' /></div>
                            </div>
                            <div className='inner-div-right'><img src='https://bookingcare.vn/assets/icon/support_agent.svg' alt='support'></img>
                                <div><FormattedMessage id='home-header.support' /></div>
                            </div>
                            <div className={language === LANGUAGES.VI ? 'VI active' : "VI"} onClick={() => { this.handleChangeLanguage(LANGUAGES.VI) }}>
                                <div>
                                    VI
                                </div>
                                <div className='vi-flag'></div>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'EN active' : "EN"} onClick={() => { this.handleChangeLanguage(LANGUAGES.EN) }}>
                                <div>
                                    EN
                                </div>
                                <div className='en-flag'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <b><FormattedMessage id='home-header.health-platform' /></b>
                        </div>
                        <div className='title2'>
                            <b><FormattedMessage id='home-header.comprehensive-healthcare' /></b>
                        </div>
                        <div className='search-banner'>
                            <i class="fas fa-search"></i>
                            <input placeholder="Tìm kiếm của bạn" />
                        </div>
                        <div className='options'>
                            <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg' alt='appstore'></img>
                            <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg' alt='appstore'></img>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-chuyenkhoa'></div>
                                </div>
                                <b><FormattedMessage id='home-header.specialty-examination' /></b>
                            </div>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-tuxa'></div>
                                </div>
                                <b><FormattedMessage id='home-header.home-examination' /></b>
                            </div>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-tongquat'></div>
                                </div>
                                <b><FormattedMessage id='home-header.general-examination' /></b>
                            </div>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-xetnghiem'></div>
                                </div>
                                <b><FormattedMessage id='home-header.lab-test' /></b>
                            </div>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-tinhthan'></div>
                                </div>
                                <b><FormattedMessage id='home-header.mental-health-examination' /></b>
                            </div>
                            <div className='inner-down'>
                                <div className='image-container'>
                                    <div className='image-nhakhoa'></div>
                                </div>
                                <b><FormattedMessage id='home-header.dental-examination' /></b>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageRedux: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
