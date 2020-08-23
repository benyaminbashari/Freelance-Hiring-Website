import React from "react";
import {Button} from "react-bootstrap";

export class StickyNote extends React.Component {
    render() {
        let className = this.props.color==='green' ? "sticky-note--green" : "sticky-note--gray";
        return (
            <div className={className}>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}


