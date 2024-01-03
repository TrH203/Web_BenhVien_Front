import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomeHeader.scss";
class HomeHeader extends Component {

    render() {

        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars fa-lg menu-bar"></i>
                            <img className='logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg'></img>
                        </div>
                        <div className='center-content'>
                            <div className='child-center-content'>
                                <div><b>Chuyên khoa</b></div>
                                <div>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-center-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-center-content'>
                                <div><b>Bác sĩ</b></div>
                                <div>Chọn bác sĩ</div>
                            </div>
                            <div className='child-center-content'>
                                <div><b>Gói khám</b></div>
                                <div>Khám sức khỏe tổng quát</div>
                            </div>
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
