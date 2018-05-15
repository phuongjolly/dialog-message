import React from "react";

class DialogMessage extends React.Component{

    render() {

        return(
            <div>
                {this.props.show &&
                <div className="ui message transition">
                    <i className="close icon" onClick={() => this.props.closeDialog()}></i>
                    <div className="header">
                        Done!
                    </div>
                    <p>{this.props.children}</p>
                </div>
                }
            </div>
        );
    }
}

export default DialogMessage;