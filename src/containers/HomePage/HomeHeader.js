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
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <b>Nền tảng y tế</b>
                        </div>
                        <div className='title2'>
                            <b>Chăm sóc sức khỏe toàn diện</b>
                        </div>
                        <div className='search-banner'>
                            <i class="fas fa-search"></i>
                            <input placeholder='Tìm kiếm của bạn'></input>
                        </div>
                        <div className='options'>
                            <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg'></img>
                            <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg'></img>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-chuyenkhoa'></div>
                            </div>
                            <b>Khám Chuyên khoa</b>
                        </div>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-tuxa'></div>
                            </div>
                            <b>Khám Tại nhà</b>
                        </div>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-tongquat'></div>
                            </div>
                            <b>Khám Tổng quát</b>
                        </div>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-xetnghiem'></div>
                            </div>
                            <b>Xét nghiệm</b>
                        </div>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-tinhthan'></div>
                            </div>
                            <b>Khám tinh thần</b>
                        </div>
                        <div className='inner-down'>
                            <div className='image-container'>
                                <div className='image-nhakhoa'></div>
                            </div>
                            <b>Khám nha khoa</b>
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
