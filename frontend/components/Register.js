import React from 'react';
import MyNavBar from "./MyNavBar";
import { connect } from "react-redux";
import {register} from "../actions"
import ErrorPage from "./ErrorPage";
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import
{
    InputGroup,
    Form,
    Col,
    Button,
} from 'react-bootstrap'
import axios from "axios";

function mapStateToProps(state)  {
    return {username: state.auth.profile.username};
}


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: "", checkbox: true, username_msg: null, password_msg: null, reg_pushed: false, valid_firstname: false, valid_lastname: false, valid_username: false, valid_password: false, valid_phone: false, valid_mail: false};
        this.change_checked = this.change_checked.bind(this);
        this.change_username = this.change_username.bind(this);
        this.change_password = this.change_password.bind(this);
        this.change_firstname = this.change_firstname.bind(this);
        this.change_lastname = this.change_lastname.bind(this);
        this.change_mail = this.change_mail.bind(this);
        this.change_phone = this.change_phone.bind(this);
    }
    static scorePassword(pass) {
        var score = 0;
        if (!pass)
            return score;

        // award every unique letter until 5 repetitions
        var letters = {};
        for (var i=0; i<pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        };

        let variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] === true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return parseInt(score);
    }

    change_checked() {
        this.setState({checkbox: !this.state.checkbox});
        //console.log(ReactDOM.findDOMNode(this.refs.username));

    }
    change_password(event) {
        this.setState({password: event.target.value},
            () => {
                var score = Register.scorePassword(this.state.password);
                if (score > 80)
                    this.setState({valid_password: true, password_msg: "Password is Strong"});
                else if (score > 60)
                    this.setState({valid_password: true, password_msg: "Password is Good"});
                else if (score >= 30)
                    this.setState({valid_password: false, password_msg: "Password is Weak"})
                else
                    this.setState({valid_password: false, password_msg: "Password is Awful"})
        });
    }
    change_mail(event) {
        this.setState({mail: event.target.value},
            () =>{
            if(this.state.mail.length < 5 || this.state.mail.includes("@") === false)
                this.setState({valid_mail: false});
            else
                this.setState({valid_mail: true})

        });
    }
    change_firstname(event) {
        this.setState({firstname: event.target.value},
            () => {
                if(this.state.firstname.length > 0)
                    this.setState({valid_firstname: true});
                else
                    this.setState({valid_firstname: false});
            });

    }
    change_lastname(event) {
        this.setState({lastname: event.target.value},
            () => {
                if(this.state.lastname.length > 0)
                    this.setState({valid_lastname: true});
                else
                    this.setState({valid_lastname: false});
            });
    }


    change_phone(event) {
        this.setState({phone: event.target.value},
            () => {
            if(this.state.phone.length !== 10)
                this.setState({valid_phone: false});
            else
                this.setState({valid_phone: true});
        });

    }
    change_username(event) {
        this.setState({username: event.target.value},
            () => {
                if(this.state.username.length < 6) {
                    this.setState({valid_username: false});
                    this.setState({username_msg: "Username must be at least 6 characters"});
                }
                else
                    this.setState({valid_username: true})
                //TODO: check if the user is in database
            });
    }
    render() {
        if(this.props.username != null) {
            return (
                <div>
                    <MyNavBar  name={'Error Occurred'} reg_page={true}/>
                    <ErrorPage msgs={['You are already logged in']}/>
                </div>
            );
        }
        else {


            return (

                <div>
                <MyNavBar  name={'Registration Form'} reg_page={true}/>
                    <Form className={'center_form'} >
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={this.change_firstname} type="text" placeholder="First Name" isValid={this.state.reg_pushed & this.state.valid_firstname} isInvalid={this.state.reg_pushed & !this.state.valid_firstname}/>
                            <Form.Control.Feedback type={"invalid"}>
                                First name must be at least one characters
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.change_lastname} type="text"
                                    placeholder="Last Name" isValid={this.state.reg_pushed & this.state.valid_lastname} isInvalid={this.state.reg_pushed & !this.state.valid_lastname}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    Last name must be at least one characters
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control onChange={this.change_username} type="text" placeholder="Username" aria-describedby="inputGroupPrepend" isValid={this.state.reg_pushed & this.state.valid_username} isInvalid={this.state.reg_pushed & !this.state.valid_username}/>
                                    <Form.Control.Feedback type={"invalid"}>
                                        {this.state.username_msg}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.change_password} type="password" placeholder="Password" isValid={this.state.reg_pushed & this.state.valid_password} isInvalid={this.state.reg_pushed & !this.state.valid_password}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    {this.state.password_msg}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type={"valid"}>
                                    {this.state.password_msg}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={this.change_phone} type="tel" placeholder="Phone Number" isValid={this.state.reg_pushed & this.state.valid_phone} isInvalid={this.state.reg_pushed & !this.state.valid_phone}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    Phone number must be exactly 10 characters
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom06">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={this.change_mail} type="email" placeholder="Email" isValid={this.state.reg_pushed & this.state.valid_mail} isInvalid={this.state.reg_pushed & !this.state.valid_mail}/>
                                <Form.Control.Feedback type={"invalid"}>
                                    Email is invalid
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <div key={'custom-inline-checkbox'} className="mb-3">
                            <Form.Check checked={this.state.checkbox} onChange={this.change_checked} custom inline label="Freelancer" type={'checkbox'} id={'custom-inline-checkbox-1'} />
                            <Form.Check checked={!this.state.checkbox} onChange={this.change_checked} custom inline label="Employer" type={'checkbox'} id={'custom-inline-checkbox-2'} />
                        </div>
                        <Route render={({history}) => (
                        <Button onClick={() => {
                            this.setState({reg_pushed: true},
                                () =>{
                                    var tmp = this.state.checkbox === true? "FREELANCER": "EMPLOYER";
                                    var payload = {
                                        username: this.state.username,
                                        password: this.state.password,
                                        email: this.state.mail,
                                        name: this.state.firstname,
                                        lastname: this.state.lastname,
                                        phoneNumber: this.state.phone,
                                        type: tmp

                                    };

                                    axios.post('http://localhost:8080/api/auth/signup', payload).then(data=>{
                                            history.push('/after');

                                    }).catch(error => {
                                            this.setState({error: "failed"});
                                        });

                                    });}
                        } variant='outline-dark'>Register</Button>
                            )}/>
                        <div>
                            <label className={"error"}>{this.state.error === "failed"? "Username or Email already exists": ""}</label>
                        </div>
                    </Form>

                </div>
            )
        }
    }

}

export default connect(mapStateToProps)(Register);

