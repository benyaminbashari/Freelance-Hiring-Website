import React from 'react';

import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";
import MyNavBar from "./MyNavBar";
import Col from "react-bootstrap/Col";
import {Button, Form} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import {Route} from "react-router-dom";
import {
    acceptProjectEmployee, checkAuth,
    deleteProjectEmployee,
    getUserProjectRequests,
    login,
    setProjectDetail
} from "../actions";
import {getUserProjects} from '../actions'
import ProfileEmployee from "./ProfileEmployee";


function mapStateToProps(state)  {
    return {username: state.auth.profile.username, user_type: state.auth.profile.user_type,  projects: state.root.profile.projects, requests: state.root.profile.requests};
}


function mapDispatchToProps(dispatch) {
    return {
        getUserProjectsDispatch: data => dispatch(getUserProjects(data)),
        getUserProjectsRequestsDispatch: data => dispatch(getUserProjectRequests(data)),
        setProjectDetailDispatch: data => dispatch(setProjectDetail(data)),
        acceptProjectEmployeeDispatch: data => dispatch(acceptProjectEmployee(data)),
        deleteProjectEmployeeDispatch: data => dispatch(deleteProjectEmployee(data)),
        checkAuthDispatch: data => dispatch(checkAuth(data))


    };
}


class ProfileEmployer extends React.Component {

    componentDidMount() {
        if(localStorage.getItem('jwt') !== null)
            this.props.checkAuthDispatch().then(data=> {
                this.props.getUserProjectsDispatch({username: this.props.username}).then(data=>
                console.log(this.props.projects));
                this.props.getUserProjectsRequestsDispatch({username:this.props.username});
            });


    }
    render() {
        const projects = this.props.projects;
        const projectsList = projects.map((project) =>
            <tr key = {project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.employee}</td>
                <td>{project.startDate}</td>
                <td>{project.deadline}</td>
                <td>
                    <Route render={({history}) => (
                        <Button variant={'outline-dark'}
                                onClick={() => {
                                    this.props.setProjectDetailDispatch(project);
                                    history.push('/ProjectPage')}}
                        >
                            Edit
                        </Button>
                    )} />
                </td>
            </tr>
        );

        const requests = this.props.requests;
        const requestsList = requests.map((request) =>
            <tr key = {request.id}>
                <td>{request.id}</td>
                <td>{request.projectName}</td>
                <td>{request.applicantName}</td>
                <td>{request.requestDate}</td>
                <td>{request.applicantSkills}</td>
                <td>
                    <Route render={({history}) => (
                        <Button variant={'outline-dark'}
                                onClick={() => {
                                    this.props.acceptProjectEmployeeDispatch({request: request});
                                }}
                        >
                            Accept
                        </Button>
                    )} />
                    <Route render={({history}) => (
                        <Button variant={'outline-dark'}
                                onClick={() => {
                                    this.props.deleteProjectEmployeeDispatch({request: request});
                                }}
                        >
                            Decline
                        </Button>
                    )} />
                </td>
            </tr>
        );
        return (
            <div>
                <MyNavBar  name={' Employer Profile'}/>
                <div>
                    <Container>
                        <Row>
                                <Row>
                                    <Image src={this.props.image} className="rounded float-right" oundedCircle />
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td>Welcome back dear {this.props.username} </td>
                                        </tr>
                                        <tr>

                                        </tr>
                                        </tbody>
                                    </Table>

                                </Row>
                        </Row>
                        <Row >
                            <Col>
                                <label> Your projects</label>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name of the project</th>
                                        <th>Name of employee</th>
                                        <th>Start date</th>
                                        <th>Deadline</th>
                                        <th>Project page</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {projectsList}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <label> Requests for projects</label>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name of the project</th>
                                        <th>Applicant name</th>
                                        <th>Date of request</th>
                                        <th>Skills</th>
                                        <th>Accept/Decline</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {requestsList}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <Route render={({history}) => (
                                    <Button variant={'outline-success'} size={'lg'} block
                                            onClick={() => {

                                            history.push('/hire')
                                            }}
                                    >
                                        Post a New Job
                                    </Button>
                                )} />
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmployer);