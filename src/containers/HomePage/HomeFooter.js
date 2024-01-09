import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomeHeader.scss";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguage } from '../../store/actions';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    handleChangeLanguage = (lan) => {
        this.props.changeLanguageRedux(lan);
    }
    render() {
        // * hong trong hien
        // hoang trong hien add 2
        return (
            <div className='footer'>
                <p>&copy; 2024 Hoang Trong Hien. More Info <a target='_blank' href='https://github.com/TrH203'>&#8594;Click here&#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageRedux: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
