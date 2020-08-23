import React from 'react';
import {Button, Form} from "react-bootstrap";
import {login} from "../actions";
import {connect} from "react-redux";
import axios from 'axios';


function mapStateToProps(state)  {
    return {username: state.auth.profile.username, login_status: state.auth.status};
}


function mapDispatchToProps(dispatch) {
    return {
        loginDispatch: data => dispatch(login(data))
    };
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
        this.login = this.login.bind(this);
        this.change_username = this.change_username.bind(this);
        this.change_password = this.change_password.bind(this);
    }

    login() {
        this.props.loginDispatch({usernameOrEmail: this.state.username, password: this.state.password});

    }
    change_username(event) {
        this.setState({username: event.target.value});
    }
    change_password(event) {
        this.setState({password: event.target.value});

    }

    render() {
        return (
            <div>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.change_username}/>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.change_password}/>
                        </Form.Group>

                        <Button variant="outline-dark" onClick={this.login}>
                            Login
                        </Button>

                   </Form>

                </div>
                <div className={'login__error'}>
                    <p>{this.props.login_status === "failed" ? "Login Failed" : null}</p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);