import {useEffect,useState,Component,React} from "react";
import '../App.css';
import axios from "axios";

const  EventPresentation=()=>{
    const [conference,setConference] = useState([]);
    const [search,setSearch] = useState([]);

    const getConferenceData = async ()=> {
        try{
            const data = await axios.get('http://localhost:4000/app/research_paper_presentations');
            console.log(data.data);
            setConference(data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>getConferenceData(),[]);


    return(


        <div className="card-01">


            <br>{}</br>
            <h1>Welcome</h1>
            <br>{}</br><br>{}</br>
            <div className="card">
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Type</th>
                            <th scope="col">Host's email</th>
                            <th scope="col">Date</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            conference.filter(item=>{
                                if(item.presentation.includes("true")){
                                    return item;
                                }
                            }).map((item)=>{
                            return(
                                <tr>
                                    <th scope="row">{item.title}</th>
                                    <td>{item.about}</td>
                                    <td>
                                       Presentation
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.date}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.place}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EventPresentation;