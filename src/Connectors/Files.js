import React, {useEffect, useState} from "react";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import '../App.css';
import axios from "axios";
import firebase from "../firebase"
import {toast, ToastContainer} from "react-toastify"
import firbase from "../firebase";
import { Component } from "react";
import { SortsToolbar } from "react";
import { FileUploader } from "react";
import { any } from "prop-types";
import Tabs from './Tabs';


class PhotoButton extends React.Component {

    constructor(){
        super()
        this.state={
            title:'',
            progress:'',
            sort:'',
            videoURL:'',
            sorts: ['']
        }
        this.handleUploadStart= this.handleUploadStart.bind(this);
        this.handleUploadSuccess= this.handleUploadSuccess.bind(this);
    };
    handleUploadStart = () => {
        this.setState ({
           progress: 0
         })
    };
    handleUploadSuccess = filename => {
        this.setState ({
          sort: filename, 
          progress: 100
        })
     
        firebase.storage().ref('images').child(filename).getDownloadURL()
        .then(url => this.setState ({
          videoURL: url
        }))
    };

    render(){
        const { classes } = this.props;
        console.log(this.state);

        var i=0;
        let displayFile = '';

        let sorts = [];
        //$('#Sorts').find('tbody').html('');

        firebase.storage().ref('images').listAll().then(function(result) {
            result.items.forEach(function(fileRef) {
                i++; // Counter for each file in storage
        
                fileRef.getDownloadURL().then(function(fileURL) {
                    sorts.push(fileURL);
                    //console.log(sorts);
                })
            });
        });

        return(
            <div className="App">
                <Tabs />
            </div>
        );
    }

}
export default PhotoButton;