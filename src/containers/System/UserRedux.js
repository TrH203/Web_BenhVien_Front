import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import "./UserRedux.scss"
import { connect } from 'react-redux';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className="user-redux-container" >
                    <div className='title'>User Redux from TrHien203</div>
                    <div className='form-container'>
                        <div className='container'>
                            <form className="row g-3">
                                <div className='col-md-3'>
                                    <label for="inputEmail3"><FormattedMessage id='redux.email' /></label>
                                    <input type="email" className="form-control" id="inputEmail3" name="email"  ></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputPassword3"><FormattedMessage id='redux.password' /></label>
                                    <input type="password" className="form-control" id="inputPassword3" name="password"></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputText13"><FormattedMessage id='redux.firstName' /></label>
                                    <input type="text" className="form-control" id="inputText13" name="password"></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputText23"><FormattedMessage id='redux.lastName' /></label>
                                    <input type="text" className="form-control" id="inputText23" name="password"></input>
                                </div>

                                <div className='col-md-3'>
                                    <label for="inputEmail3"><FormattedMessage id='redux.email' /></label>
                                    <input type="email" className="form-control" id="inputEmail3" name="email"  ></input>

                                </div>
                                <div className='col-md-3'>
                                    <label for="inputPassword3"><FormattedMessage id='redux.password' /></label>
                                    <input type="password" className="form-control" id="inputPassword3" name="password"></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputText13"><FormattedMessage id='redux.firstName' /></label>
                                    <input type="text" className="form-control" id="inputText13" name="password"></input>
                                </div>
                                <div className='col-md-3'>
                                    <label for="inputText23"><FormattedMessage id='redux.lastName' /></label>
                                    <input type="text" className="form-control" id="inputText23" name="password"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
