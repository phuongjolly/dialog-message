import React from "react";
import store from "./stores/store";
import {show} from "./stores/dialogReducer";
import {Redirect} from "react-router-dom";

class About extends React.Component{
    state = {
        back: false,
    }

    goBack(){
        this.setState({
            back: true
        });

        store.dispatch(show("This post is no longer in database."));
    }

    render() {
        if(this.state.back) {
            return <Redirect to={"/"} />
        }
        return (
            <div>
                <h1>About</h1>
                <button onClick={() => this.goBack()}>Back</button>

            </div>
        );
    }
}

export default About;