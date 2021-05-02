
import '../App.css';
import React, { Component } from "react";
import Events from "./Events";
import MainH from "../Connectors/MainHome";

class Home extends Component{

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
                return <Events/>;
            default:
                return <MainH clickBtn={this.clickBtn} />;
        };



    };
};

export  default Home;

