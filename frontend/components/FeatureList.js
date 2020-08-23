import React from 'react';
import {Button, Form} from "react-bootstrap";
import {login} from "../actions";
import {connect} from "react-redux";


class FeatureList extends React.Component {

    render() {
        return (
            <div>
                <div className="featureListItem">
                    <div className="featureListItem__icon">
                        <div className="icon fa fa-calendar"></div>
                    </div>
                    <div className="featureListItem__description">Welcome to MEXFC website! </div>
                </div>
                <div className="featureListItem featureListItem--reverse">
                    <div className="featureListItem__icon">
                        <div className="icon fa fa-dashboard"></div>
                    </div>
                    <div className="featureListItem__description"> Find your employee here :D
                    </div>
                </div>
                <div className="featureListItem">
                    <div className="featureListItem__icon">
                        <div className="icon fa fa-envelope"></div>
                    </div>
                    <div className="featureListItem__description">Find a job suits you the best ^_^ </div>
                </div>

            </div>

        )
    }
}

export default FeatureList;