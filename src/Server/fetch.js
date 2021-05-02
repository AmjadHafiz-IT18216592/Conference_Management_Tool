import {useEffect,useState,Component,React} from "react";
import '../App.css';
import axios from "axios";

const  Fetch=()=>{
    const [conference,setConference] = useState([]);
    const getConferenceData = async ()=> {
        try{
            const data = await axios.get('http://localhost:4000/app/readDetails');
            console.log(data.data);
            setConference(data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>getConferenceData(),[]);


    return(
        <div>
            <h1>Wow</h1>
            {conference.map((item)=>{
                return(
                    <p>
                        {item.title} - {item.about} - {item.presentation.valueOf()} - {item.workshop} - {item.email} - {item.amount} - {item.date} - {item.from} - {item.to} - {item.place}
                    </p>
                );
            })}
        </div>
    );

};

export default Fetch;