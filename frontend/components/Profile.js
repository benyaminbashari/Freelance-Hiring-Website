import React from 'react';

import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";
import ProfileEmployer from "./ProfileEmployer";
import ProfileEmployee from "./ProfileEmployee"
import {checkAuth} from "../actions";


function mapStateToProps(state)  {
    return {username: state.auth.profile.username, user_type: state.auth.profile.user_type};
}

function mapDispatchToProps(dispatch) {
    return {
        checkAuthDispatch: data => dispatch(checkAuth(data))
    };
}

class Profile extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div>

                {this.props.user_type !== 'FREELANCER'? <ProfileEmployer />: <ProfileEmployee/>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);