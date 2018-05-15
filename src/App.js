import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
