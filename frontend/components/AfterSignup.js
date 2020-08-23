import React from 'react';
import {Button, Form} from "react-bootstrap";
import { Route } from 'react-router-dom';
import {login} from "../actions";
import {connect} from "react-redux";


class AfterSignup extends React.Component {

    render() {
        return (
            <div>
                <div className="centeredPrompt">
                    <div className="centeredPrompt__item centeredPromptIcon">
                        <div className="icon fa fa-smile-o"></div>
                    </div>
                    <div className="centeredPrompt__item centeredPromptLabel">Welcome to the app!</div>
                    <div className="centeredPrompt__item centeredPromptDetails">Thanks for signing up. Let&rsquo;s take a look around.
                    </div>
                    <Route render={({history}) => (
                        <Button variant={'outline-success'} size={'lg'} block
                                onClick={() => {
                                    history.push('/')
                                }}
                        >
                            Begin tour
                        </Button>
                    )} />
                </div>

            </div>

        )
    }
}

export default AfterSignup;




