import React from 'react';

import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";
import MyNavBar from "./MyNavBar";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";


function mapStateToProps(state)  {
    return {username: state.profile.username, user_type: state.profile.user_type};
}

class ProfileEmployee extends React.Component {

    render() {
        return (
            <div>
                <MyNavBar  name={' Employee Profile'}/>

                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}></Col>
                            <Col xs={6} md={4}>
                                <Row>
                                    <Image src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded float-right" oundedCircle />
                                    <Card bg="dark" style={{ width: '18rem' }}>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item > Welcome back dear (username) </ListGroup.Item>
                                            <ListGroup.Item>Your number of projects : #?</ListGroup.Item>
                                            <ListGroup.Item>Your nearest project due: name of the project? + the date </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Row>

                            </Col>

                        </Row>
                        <Row >
                            <Col>
                                <label> Your projects</label>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name of the project</th>
                                        <th>Name of employer</th>
                                        <th>Start date</th>
                                        <th>Deadline</th>
                                        <th>Project page</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>I hate Internet Engineering</td>
                                        <td>Negar</td>
                                        <td>1/1/99</td>
                                        <td>2/2/98</td>
                                        <td>
                                            <button>
                                                Go to project page
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Don't like this project!</td>
                                        <td>Benyamin</td>
                                        <td>1/1/99</td>
                                        <td>2/2/98</td>
                                        <td>
                                            <button>
                                                Go to project page
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Ahhhhhh :///</td>
                                        <td>Asadi</td>
                                        <td>1/1/99</td>
                                        <td>2/2/98</td>
                                        <td>
                                            <button>
                                                Go to project page
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <label> Your request for projects</label>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name of the project</th>
                                        <th>Employer name</th>
                                        <th>Date of request</th>
                                        <th>Status</th>
                                        <th>Delete</th>
                                        <th>Resent</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>I hate Internet Engineering</td>
                                        <td>Negar</td>
                                        <td>2/2/98</td>
                                        <td>No response yet</td>
                                        <td>
                                            <button>
                                                X
                                            </button>
                                        </td>
                                        <td>
                                            <button>
                                                resent
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Don't like this project!</td>
                                        <td>Benyamin</td>
                                        <td>2/2/98</td>
                                        <td>No response yet</td>
                                        <td>
                                            <button>
                                                X
                                            </button>
                                        </td>
                                        <td>
                                            <button>
                                                resent
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <button>
                                    Find a new job
                                </button>
                            </Col>

                        </Row>
                    </Container>

                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfileEmployee);