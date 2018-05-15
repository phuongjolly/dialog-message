import React from "react";
import {Redirect} from "react-router-dom";

class Home extends React.Component{
    state = {
        next: false
    }
    goNext(){
        this.setState({
            next: true
        })
    }
    render() {
        if(this.state.next) {
            return <Redirect to="/about" />
        }
        return (
            <div>
                <h1>Home page</h1>
                <button onClick={() => this.goNext()}>Next</button>
            </div>
        );
    }
}

export default Home;