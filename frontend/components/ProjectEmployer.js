import React from 'react';

import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";
import MyNavBar from "./MyNavBar";
import Col from "react-bootstrap/Col";
import {Button, Form} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import {Route} from "react-router-dom";

function mapStateToProps(state)  {
    return {username: state.profile.username, user_type: state.profile.user_type, project: state.profile.project};
}


class ProjectEmployer extends React.Component {

    render() {
        return (
            <div>
                <MyNavBar  name={' Project page'}/>

                <div>
                    <Container>
                        <Row>
                            <Table className={"center-table"} responsive>
                                <tbody>
                                <tr>
                                    <td className={"bold-font"}>Project name</td>
                                    <td>{this.props.project.name}</td>
                                </tr>
                                <tr>
                                    <td className={"bold-font"}>Employer</td>
                                    <td>{this.props.username}</td>
                                </tr>
                                <tr>
                                    <td className={"bold-font"}>Employee</td>
                                    <td>{this.props.project.employee}</td>
                                </tr>
                                <tr>
                                    <td className={"bold-font"}>Start date</td>
                                    <td>{this.props.project.startDate}</td>
                                </tr>
                                <tr>
                                    <td className={"bold-font"}>Deadline</td>
                                    <td>{this.props.project.deadline}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button>
                                            Change project name
                                        </button>
                                    </td>
                                    <td>
                                        <button>
                                            Change deadline
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>

                        </Row>

                    </Container>

                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(ProjectEmployer);