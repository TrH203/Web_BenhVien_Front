import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./Loading.scss";
class Loading extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <>
                <div className='loading-container'>
                    <div className='content-container'>
                        <div className='loading-content'>
                            Loading <i class="fas fa-spinner fa-pulse"></i>
                        </div>
                    </div>
                </div>
            </>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
