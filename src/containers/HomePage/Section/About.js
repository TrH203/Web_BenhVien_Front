import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {
    render() {
        return (
            <div className='section-ck-container about'>
                <div className='content-left'>
                    <div className='about-title'>Thông tin về chúng tôi</div>
                    <iframe width="602" height="339" src="https://www.youtube.com/embed/7tiR7SI4CkI" title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='content-right'>
                    <div className='inner'>
                        <div className='row1'>
                            <div className='image1'></div>
                            <div className='image2'></div>
                            <div className='image3'></div>
                        </div>
                        <div className='row2'>
                            <div className='image1'></div>
                            <div className='image2'></div>
                            <div className='image3'></div>
                        </div>
                        <div className='row3'>
                            <div className='image1'></div>
                            <div className='image2'></div>
                            <div className='image3'></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
