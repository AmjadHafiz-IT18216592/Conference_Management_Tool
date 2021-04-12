
//import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import '../App.css';
import Submit from './Submit';
import Main from './Main';

import {Router, Link, withRouter, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class Events extends Component{
    state = {
        renderView: 0
    };

    clickBtn = e => {
        this.setState({
            renderView: +e.target.value
        });
    };

    render() {
        switch (this.state.renderView) {
            case 1:
                return <Submit/>;
            default:
                return <Main clickBtn={this.clickBtn} />;
        }
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Events/>, rootElement);

export default Events;
