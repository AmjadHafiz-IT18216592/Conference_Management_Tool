import React, {useEffect, useState} from "react";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import '../App.css';
import firebase from "../firebase";

class All extends React.Component {
    
    constructor(){
        super()
        this.state={
            data: [],
            loading: true
        }
    };
    componentDidMount(){
        let arr =[];
    
        firebase.storage().ref('images/').listAll().then(result => {
            result.items.forEach(function(fileRef){
                let name = (fileRef.name);
                let link = '';
                fileRef.getDownloadURL().then(url=> 
                    {
                        link=url;
                    console.log(link);
                    let user = {name: name, link: link};
                    arr.push(user);
                });
            });
            this.setState({data:arr}, () => {
                this.setState({loading: false})
            })
        
        }
        );
    }

    delete = (name) => {
        var desertRef = firebase.storage().ref().child('images/'+name);
        desertRef.delete().then(() => {
            this.componentDidMount();
            console.log("Deleted");
          }).catch((error) => {
            console.log(error);
          });
    }

    approve = (name, link) => {

        let bucketName ='approved'
        let file = link
        let storageRef = firebase.storage().ref(`${bucketName}/${link}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
            let downloadUrl = uploadTask.snapshot.getDownloadURL

        })
    }

    render() {

        if(this.state.loading){
             return <h2>Loading</h2>}
        return(
            <div className="App" style={{marginTop:"60px"}}>
                <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Filename</th>
                            <th scope="col">Link</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.data.map((item,i)=>{
                            return(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td><a href={item.link}>Click to view</a></td>
                                <td style={{justifyContent:"space-between"}}>
                                    <button onClick={()=> this.approve(item.name,item.link)} style={{marginRight:"5px"}}>Approve</button>
                                    <button onClick={()=>this.delete(item.name)}>Delete</button>
                                </td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
            </div>
        );
    }
}
export default All;
