import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./AdvertiseImage.scss";
import anh1 from '../../assets/images/anh1.png';
import anh2 from "../../assets/images/anh2.png";
class AdvertiseImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                anh2, anh1
                // Thêm các đường dẫn ảnh khác nếu cần
            ],
            currentImageIndex: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.changeImage, 1000); // Thay đổi ảnh sau mỗi 3 giây (3000ms)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeImage = () => {
        const { currentImageIndex, images } = this.state;
        const newIndex = (currentImageIndex + 1) % images.length;
        this.setState({ currentImageIndex: newIndex });
    };

    render() {
        const { images, currentImageIndex } = this.state;
        return (
            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        //key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={"image"}
                    />
                ))}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvertiseImage);
