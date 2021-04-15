import React from "react";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import '../App.css';

export default props => (
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
                            <form className="row g-3">

                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label">Conferance Title</label>
                                    <input type="name" className="form-control" id="inputName"/>
                                </div>

                                <div className="col-md-6">
                                    <div>
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                  rows="2"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label>
                                       Events
                                    </label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Research paper presentations
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="flexCheckChecked" checked/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Workshops
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="inputEmail4" className="form-label">Host Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputDate" className="form-label">Date</label>
                                    <DatePickerComponent placeholder="Enter Date"></DatePickerComponent>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputDate" className="form-label">From</label>
                                    <TimePickerComponent placeholder="Enter time"></TimePickerComponent>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputDate" className="form-label">To</label>
                                    <TimePickerComponent placeholder="Enter time"></TimePickerComponent>
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
                                    <input type="text" className="form-control" id="inputNumber"/>
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
                                    <button value={1} onClick={props.clickBtn}type="submit" className="btn btn-primary">
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
