import '../App.css';
import React , {Component} from "react";
import jspPDF from  'jspdf';
import logo from '../../src/Images/react-preview1.jpeg';

class downloadPage extends Component{
    pdfGenerate=()=>{
        var doc = new jspPDF('landscape','px','a4','false');

        doc.addImage(logo,'JPEG',65,20,500,40);
        doc.save('im.pdf');


    }
    render(){
        return(

            <div>
                <h1>This is download page</h1>

                <br>{}</br><br>{}</br><br>{}</br>
                <button onClick={this.pdfGenerate}>Download PDF</button>


            </div>

        );
    };
};

export  default downloadPage;