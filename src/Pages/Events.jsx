
//import React from "react";
//import ReactDOM from "react-dom";
import React, { Component } from "react";
//import {useState} from "react";
import '../App.css';
import Submit from './Submit';
import Main from '../Connectors/Main';
//import {DatePickerComponent, TimePickerComponent} from "@syncfusion/ej2-react-calendars";
//import axios from "axios";

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
        };

    }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Events/>, 'root');

export default Events;
