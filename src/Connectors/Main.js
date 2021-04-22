

import React from "react";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import '../App.css';
//import Submit from '../Pages/Submit';
//import Main from '../Connectors/Main';
//import events from '../Pages/Events'
import axios from "axios";





 class Mevent extends React.Component {
     constructor(){
         super()
         this.state={
             title:'',
             about:'',
             presentation:false,
             workshop:false,
             email:'',
             date:'',
             from:'',
             to:'',
             amount:0
         }
         this.changeTitle= this.changeTitle.bind(this);
         this.changeAbout = this.changeAbout.bind(this);
         this.changePresentation = this.changePresentation.bind(this);
         this.changeWorkshop = this.changeWorkshop.bind(this);
         this.changePresentation = this.changePresentation.bind(this);
         this.changeHostEmail = this.changeHostEmail.bind(this);
         this.changeAmount = this.changeAmount.bind(this);
         this.changeDate = this.changeDate.bind(this);
         this.changeTo = this.changeTo.bind(this);
         this.changeFrom = this.changeFrom.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

     }
     changeTitle(event){
         this.setState({
             title:event.target.value
         });
        console.log("---------------"+event.target.value);
     }
     changeAbout(event){
         this.setState({
             about:event.target.value

         });
         console.log("---------------"+event.target.value);
     }

     /*changeCheckBox=(e)=>{
         var {name,checked} = e.target;
         this.setState((e)=>{
             var selectedType = e.type;
             return selectedType[name]=checked
         });
     }
    */
     changePresentation(event){
         this.setState({
             presentation:true
         });
         console.log("---------------"+event.target.value+" ------- ");
     }
     changeWorkshop(event){
         this.setState({
             workshop:true
         });
         console.log("---------------"+event.target.value);
     }

     changeHostEmail(event){
         this.setState({
             email:event.target.value
         });
         console.log("---------------"+event.target.value);
     }
     changeDate(event){
         this.setState({
             date:event.target.value
         });
         console.log("---------------"+event.target.value);
     }
     changeTo(event){
         this.setState({
             to:event.target.value
         });
         console.log("---------------"+event.target.value);
     }
     changeFrom=event=>{
         this.setState({
             from:event.target.value
         });
         console.log("---------------"+event.target.value);
     }
     changeAmount=event=>{
         this.setState({
             amount:+event.target.value
         });
         console.log("---------------"+event.target.value);
     }

     onSubmit(event){
         event.preventDefault();
         const addConference={
             title:this.state.title,
             about:this.state.about,
             presentation:this.state.presentation,
             workshop:this.state.workshop,
             email:this.state.email,
             date:this.state.date,
             from:this.state.from,
             to:this.state.to,
             amount:this.state.amount
         }
         axios.post('http://localhost:4000/app/addConference',addConference).then(response=> console.log(response.data))
         //console.log("---------------in side submit button"+event.target.value);
         this.setState=({
             title:'',
             about:'',
             presentation:'',
             workshop:'',
             email:'',
             date:'',
             from:'',
             to:'',
             amount:''
         });

     }

     state = {
         renderView: 0
     };

     clickBtn = e => {
         this.setState({
             renderView: +e.target.value
         });
     };
    render(){
       /*
        switch (this.state.renderView) {
            case 1:
                return <Submit/>;
            default:
                return <Main clickBtn={this.clickBtn} />;
        };
        */
        return(


            <div>
                <br>{}</br><br>{}</br>
                Event Page{" "}
                <br>{}</br>
                <div>

                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="row g-3" onSubmit={this.onSubmit}>

                                            <div className="mb-3">
                                                <label htmlFor="inputName" className="form-label">Conferance Title</label>
                                                <input type="name" className="form-control" id="inputName"
                                                       onChange={this.changeTitle}
                                                       value={this.props.title}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <div>
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                                              rows="2"
                                                              onChange={this.changeAbout}
                                                              value={this.props.about}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label>
                                                    Events
                                                </label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                           id="flexCheckDefault"
                                                           onChange={this.changePresentation}
                                                           value={false}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Research paper presentations
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                           id="flexCheckDefault"
                                                           onChange={this.changeWorkshop}
                                                           value={false}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Workshops
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="inputEmail4" className="form-label">Host Email</label>
                                                <input type="email" className="form-control" id="inputEmail4"
                                                       onChange={this.changeHostEmail}
                                                       value={this.props.email}
                                                />
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="inputDate" className="form-label">Date</label>
                                                <DatePickerComponent placeholder="Enter Date"
                                                                     onChange={this.changeDate}
                                                                     value={this.props.date}
                                                />
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="inputDate" className="form-label">From</label>
                                                <TimePickerComponent placeholder="Enter time"
                                                                     onChange={this.changeFrom}
                                                                     value={this.props.from}
                                                />
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="inputDate" className="form-label">To</label>
                                                <TimePickerComponent placeholder="Enter time"
                                                                     onChange={this.changeTo}
                                                                     value={this.props.to}/>
                                            </div>

                                            <div className="col-6">
                                                <label htmlFor="inputHallno" className="form-label">Hall No</label>
                                                <select id="inputHallno" className="form-select">
                                                    <option selected>...</option>
                                                    <option>IT02</option>
                                                    <option>IT03</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="inputNumber" className="form-label">Amount</label>
                                                <input type="text" className="form-control" id="inputNumber"
                                                       onChange={this.changeAmount}
                                                       value={this.props.amount}
                                                />
                                            </div>

                                            <div className="col-md-9">
                                                <label htmlFor="formFileMultiple" className="form-label">Multiple files input
                                                    example</label>
                                                <input className="form-control" type="file" id="formFileMultiple" multiple/>
                                            </div>
                                            <div className="col-3">
                                                <br>{}</br><br>{}</br>
                                                <button  type="submit" className="btn btn-primary">
                                                    Upload
                                                </button>
                                            </div>
                                            <div className="col-13">
                                                <button type="submit" onClick={this.props.clickBtn} className="btn btn-primary">
                                                    Submit
                                                </button>{" "}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Research paper presentations</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                                        <small>And some small print.</small>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Workshops</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                                        <small className="text-muted">And some muted small print.</small>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    };};


export default Mevent;

