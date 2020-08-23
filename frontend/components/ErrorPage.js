import React from "react";


class ErrorPage extends React.Component {

    render() {
        return (
            <div className={'center'}>
                {
                    //console.log(this.props.msgs)
                  this.props.msgs.map((msg) =>
                      <h1 key={msg}>{msg}</h1>
                  )
                }
            </div>
        )
    }
}

export default ErrorPage;