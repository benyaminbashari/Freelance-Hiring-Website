import React from 'react';
import { connect } from "react-redux";
import ProjectEmployer from "./ProjectEmployer"
import ProjectEmployee from "./ProjectEmployee"


function mapStateToProps(state)  {
    return {username: state.profile.username, user_type: state.profile.user_type};
}

class ProjectPage extends React.Component {

    render() {
        return (
            <div>
                {this.props.user_type !== 'freelancer'? <ProjectEmployer />: <ProjectEmployee/>}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProjectPage);