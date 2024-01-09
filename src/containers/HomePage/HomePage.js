import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import SpecialtyCarousel from './Section/SpecialtyCarousel';
import MedicalFacility from './Section/MedicalFacility';
import Doctor from './Section/Doctor';
import "./HomePage.scss";
class HomePage extends Component {

    render() {
        return (
            <div className='homepage-container'>
                <HomeHeader />
                <SpecialtyCarousel />
                <MedicalFacility />
                <Doctor />
                <div style={{ height: "300px" }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
