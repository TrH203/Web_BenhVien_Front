import React, { Component } from 'react';
import { connect } from 'react-redux';
import anh1 from '../../assets/images/anh1.png';
import "./HomeHeader.scss";
class HomeHeader extends Component {

    render() {

        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars fa-lg"></i>
                            <img className='logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg'></img>
                        </div>
                        <div className='center-content'>
                            <div className='title'>Tất cả</div>
                            <div className='title'>Tại nhà</div>
                            <div className='title'>Tại viện</div>
                            <div className='title'>Sống khỏe</div>
                            <input className="search-header" placeholder='Tìm kiếm của bạn'></input>
                        </div>
                        <div className='right-content'>
                            <div className='inner-div-right'>
                                <img src='https://bookingcare.vn/assets/icon/history.svg'></img>
                                <div>Lịch Hẹn</div>
                            </div>
                            <div className='inner-div-right'><img src='https://bookingcare.vn/assets/icon/support_agent.svg'></img>
                                <div>Hỗ Trợ</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='ad-image-container'>
                    <img className="ad-image" src={anh1}></img>
                </div>
                <div className='ad-image-container'>
                    <img className="ad-image" src={anh1}></img>
                </div>
                <div className='ad-image-container'>
                    <img className="ad-image" src={anh1}></img>
                </div>
                <button>ok</button>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
