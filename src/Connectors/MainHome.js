
import '../App.css';
import React from "react";



export default homePage=>(

    <div>
        <h1>Welcome</h1>

        <br>{}</br>

        <button value={1} onClick={homePage.clickBtn}  type="button" className="btn btn-info"  >New Conferance</button>
        <br>{}</br><br>{}</br>
        <div className="card">
            <div className="card-body">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Type</th>
                        <th scope="col">Host</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

);



