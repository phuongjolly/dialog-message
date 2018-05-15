import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import DialogMessage from "./component/DialogMessage";
import store from "./component/stores/store";

class App extends Component {
    state = {
        showDialog: false,
        message: ''
    }

    componentDidMount() {
        store.subscribe(() => this.updateDialog());
    }

    updateDialog() {
        const showDialog = store.getState().dialogMessage.show;
        const {message} = store.getState().dialogMessage;
        this.setState({showDialog, message});
    }

    closeDialog() {
        this.setState({
            showDialog: false
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Route component={Home} />
                    </Switch>
                    <DialogMessage show={this.state.showDialog} closeDialog={() => this.closeDialog()}>
                        {this.state.message}
                    </DialogMessage>
                </div>
            </Router>

        );
    }
}

export default App;
