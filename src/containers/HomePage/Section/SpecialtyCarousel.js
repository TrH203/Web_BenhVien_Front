import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import "./SpecialtyCarousel.scss";
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SpecialtyCarousel extends Component {
    constructor(props) {
        super(props);
    }
    image_urls = [
        "../../../assets/images/anh1.png",
        "../../../assets/images/anh2.png",
        "../../../assets/images/anh3.png",
        "../../../assets/images/anh1.png",
        "../../../assets/images/anh2.png",
        "../../../assets/images/anh3.png",
        "../../../assets/images/anh1.png",
        "../../../assets/images/anh2.png",
    ]

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <div className='section-container'>
                <div className='section-content'>
                    <div className='title-div'>
                        <div>Chuyen Khoa</div>
                        <button>Xem them</button>
                    </div>
                    <Slider{...settings}>
                        {this.image_urls.map(image => (
                            <div div className="image-container" >
                                <div className='slide-image'></div>
                                <div>Co xuong khop</div>
                            </div>
                        ))}
                    </Slider>
                </div >
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtyCarousel);
