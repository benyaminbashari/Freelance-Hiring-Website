import React from 'react';
import {Button} from "react-bootstrap";
import { connect } from "react-redux";
import Login from "./Login";
import { Route } from 'react-router-dom'
import {StickyNote} from './StickyNote'
import {checkAuth, login} from "../actions";
import FeatureList from "./FeatureList";


function mapStateToProps(state)  {
    return {username: state.auth.profile.username};
}

function mapDispatchToProps(dispatch) {
    return {
        checkAuthDispatch: data => dispatch(checkAuth(data))
    };
}

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: null,
        }
    }
    componentWillMount() {
        if(localStorage.getItem('jwt') !== null)
            this.props.checkAuthDispatch();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className={'sticky-note__top'}>
                    <div className={'sticky-note--left'}>
                        <StickyNote msg={"Find Your Way With Us"} color={'green'}/>
                    </div>
                    <div className={'sticky-note--right'}>
                        <StickyNote color={'gray'} msg={
                            <div>
                                <Route render={({history}) => (
                                    <Button variant={'outline-success'} size={'lg'} block
                                            onClick={() => {
                                                if(this.props.username == null) {
                                                    this.setState({msg: 'Login First!'});
                                                    window.setTimeout(() => {
                                                        this.setState({
                                                            msg: null
                                                        });
                                                    }, 2000)

                                                }
                                                else
                                                    history.push('/hire')
                                            }}
                                    >
                                        Hire
                                    </Button>
                                )} />

                                <Route render={({history}) => (
                                <Button variant={'outline-success'} size={'lg'} block
                                onClick={() => {
                                    if(this.props.username == null) {
                                        this.setState({msg: 'Login First!'});
                                        window.setTimeout(() => {
                                            this.setState({
                                                msg: null
                                            });
                                        }, 2000)

                                    }
                                    else
                                        history.push('/jobs')
                                }}
                                >
                                Browse Jobs
                                </Button>
                                )} />
                            </div>
                        }/>
                    </div>
                </div>
                <div>
                    <div>
                        {this.props.username != null ?  <div className={'form--bordered-right'}> <FeatureList/> </div> : <div className={'form--bordered-right'}> <Login/> </div>}
                    </div>

                    <div className={'main-page__error'}>
                        {this.state.msg}
                    </div>
                </div>
            </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


