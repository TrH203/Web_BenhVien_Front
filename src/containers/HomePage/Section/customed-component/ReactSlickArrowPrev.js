import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ReactSlickArrow.scss"
class ReactSlickArrowPrev extends Component {

    render() {
        const { onClick } = this.props;
        return (
            <div className='arrow-container' style={{ top: '115px', left: '-45px' }}>
                <div className='arrow-content' onClick={onClick}>
                    <i class="fas fa-angle-double-left"></i>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReactSlickArrowPrev);
