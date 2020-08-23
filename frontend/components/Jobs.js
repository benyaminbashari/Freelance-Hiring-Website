import React from 'react';
import {
    Form,
    Button
} from "react-bootstrap";
import { connect } from "react-redux";
import {takeJob} from "../actions";
import ErrorPage from "./ErrorPage";
import MyNavBar from "./MyNavBar";


function mapStateToProps(state)  {
    return {username: state.auth.username, user_type: state.auth.user_type};
}


function mapDispatchToProps(dispatch) {
    return {
        //akeJobDispatch: data => dispatch(takeJob(data))
    };
}


class Jobs extends React.Component {
    render() {
        if(this.props.username == null  || this.props.user_type !== 'EMPLOYEE') {
            return (
                <div>
                    <MyNavBar  name={'Error Occurred'}/>
                    <ErrorPage msgs={['You are either not login', 'or you are not a employer']}/>
                </div>

            );
        }
        else {
            return (
                <div>
                    Hello
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);