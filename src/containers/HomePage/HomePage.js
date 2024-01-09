import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
// import SpecialtyCarousel from './Section/SpecialtyCarousel';
// import MedicalFacility from './Section/MedicalFacility';
// import Doctor from './Section/Doctor';
// import HandBook from './Section/HandBook';

import * as Section from "./Section";

import "./HomePage.scss";
class HomePage extends Component {

    render() {
        return (
            <div className='homepage-container'>
                <HomeHeader />
                <Section.SpecialtyCarousel />
                <Section.MedicalFacility />
                <Section.Doctor />
                <Section.HandBook />
                <Section.About />
                <HomeFooter />
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
