import React from 'react';
import MyNavBar from "./MyNavBar";
import { connect } from "react-redux";
import {addProject} from "../actions"
import ErrorPage from "./ErrorPage";
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'

import
{
    Form,
    Button, Col,
} from 'react-bootstrap'


function mapStateToProps(state)  {
    return {username: state.auth.profile.username, user_type: state.auth.profile.user_type};
}

function mapDispatchToProps(dispatch) {
    return {
        addProjectDispatch: data => dispatch(addProject(data))
    };
}


class Hire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reg_pushed: false, valid_name: false, valid_desc: false};
        this.change_name = this.change_name.bind(this);
        this.change_desc = this.change_desc.bind(this);
    }


    change_name(event) {
        this.setState({name: event.target.value},
            () => {
                if(this.state.name.length > 0)
                    this.setState({valid_name: true});
                else
                    this.setState({valid_name: false});
            });

    }
    change_desc(event) {
        this.setState({desc: event.target.value},
            () => {
                if(this.state.desc.length > 0)
                    this.setState({valid_desc: true});
                else
                    this.setState({valid_desc: false});
            });
    }

    render() {
        if(this.props.username == null || this.props.user_type !== 'EMPLOYER') {
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
                    <MyNavBar  name={'Add Project'} reg_page={true}/>
                    <Form className={'center_form1'} >

                            <Form.Group md="12" controlId="validationCustom01">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control onChange={this.change_name} type="text" placeholder="Build me a website" isValid={this.state.reg_pushed & this.state.valid_name} isInvalid={this.state.reg_pushed & !this.state.valid_name}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    Project name can not be empty
                                </Form.Control.Feedback>
                            </Form.Group>



                            <Form.Group  md="12" controlId="validationCustom05">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control as="textarea" rows="5" onChange={this.change_desc} type="tel" placeholder="Tell more about the project ..." isValid={this.state.reg_pushed & this.state.valid_desc} isInvalid={this.state.reg_pushed & !this.state.valid_desc}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    Project Description can not be empty
                                </Form.Control.Feedback>
                            </Form.Group>




                        {//TODO: add upload and deadline
                        }
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control  onChange={this.change_file} type="tel"  />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control  onChange={this.change_deadline} type="tel"  />
                            </Form.Group>


                        </Form.Row>


                        <Route render={({history}) => (
                            <Button onClick={() => {
                                this.setState({reg_pushed: true},
                                    () =>{
                                        if(this.state.valid_name && this.state.valid_desc) {
                                            this.props.addProjectDispatch({
                                                employerUsername: this.props.username,
                                                name: this.state.name,
                                                desc: this.state.desc,
                                                startDate: null,
                                                deadline: null,

                                            });
                                            history.push('/profile');
                                        }
                                    });
                            }} variant='outline-dark'>Add</Button>
                        )}/>
                    </Form>
                </div>
            )
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Hire);

