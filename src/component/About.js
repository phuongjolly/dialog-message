import React from "react";
import DialogMessage from "./DialogMessage";

class About extends React.Component{
    state = {
        back: false,
        showDialog: false
    }

    goBack(){
        this.setState({
            back: true,
            showDialog: true
        });
    }

    closeDialog() {
        this.setState({
            showDialog: false
        })
    }

    render() {

        return (
            <div>
                <h1>About</h1>
                <button onClick={() => this.goBack()}>Back</button>
                <DialogMessage show={this.state.showDialog} closeDialog={() => this.closeDialog()}>
                    That post is no longer in database.
                </DialogMessage>
            </div>
        );
    }
}

export default About;