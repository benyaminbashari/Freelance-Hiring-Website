import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavDropdown,
    Button,
    NavItem,
    Image
} from 'react-bootstrap';
import { connect } from "react-redux";
import { logout } from "../actions/index";


function mapStateToProps(state)  {
    return {username: state.auth.profile.username, user_type: state.auth.profile.user_type, image: null};
}



function mapDispatchToProps(dispatch) {
    return {
        logoutDispatch: () => dispatch(logout())
    };
}
class MyNavBar extends React.Component {

    render() {
        const reg =
            <Nav className={'ml-auto'}>
                <Route render={({history}) => (
                    <Button variant={'outline-dark'}
                        onClick={() => { history.push('/register') }}
                    >
                        Register
                    </Button>
                )} />

            </Nav>;
        //
        const prf =

            <NavDropdown className={'ml-auto'} title={
                <Image className={'small_img'} src={this.props.image != null ? this.props.image : '/images/default-profile-photo.png'} roundedCircle />
                } id="collasible-nav-dropdown">
                <Route render={({history}) => (
                    <NavDropdown.Item onClick={() => history.push('/profile')}>Profile</NavDropdown.Item>
                )}/>

                <Route render={({history}) => (
                    <NavDropdown.Item onClick={() => this.props.user_type === 'employer'? history.push('/hire'):history.push('jobs')}>{this.props.user_type === 'freelancer'? 'Browse Jobs' : 'Hire'}</NavDropdown.Item>
                    )}/>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.props.logoutDispatch}>Logout</NavDropdown.Item>
            </NavDropdown>;


        return (
            <div>
                <Navbar>
                    <div className={'mr-auto'}>
                    <Route render={({history}) => (
                        <Button variant={'link'} onClick={() => { history.push('/') }} >
                            <Image className={'small_img'} src='/images/download.png' rounded />
                        </Button>
                    )} />

                    <Navbar.Brand> MEXFC </Navbar.Brand>
                    </div>

                    <h4 className={'blue_color_navbar'}>{this.props.name}</h4>
                    {this.props.username == null ? reg : prf}
                    {this.props.username == null ? null : <NavItem>Hi {this.props.username}</NavItem>}
                </Navbar>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavBar);

