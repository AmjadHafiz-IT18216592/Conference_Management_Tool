import React, {useEffect, useState} from "react";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import '../App.css';
import axios from "axios";
import firebase from "../firebase"
import {toast, ToastContainer} from "react-toastify"
import firbase from "../firebase";

const PhotoButton = () => {


    let storageRef = firebase.storage().ref("images");

    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState([]);
    const handleImage = event => {
        const image = event.target.files[0];
        setImage(image);
    };
    //fetch and load pictures
    const fetchImages = async () => {
        let bucketName ='images'
        let file = this.state.files[0]
        let storageRef = firbase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firbase.storage.TaskEvent.STATE_CHANGED,()=>{
            let downloadUrl = uploadTask.snapshot.getDownloadURL});
        
        let result = await storageRef.child('cabinPictures').listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL())

        return Promise.all(urlPromises)
    }

    const loadImages = async () => {
        const urls = await fetchImages()
        setImage(urls)
    }

    loadImages()

    /*
    const onSubmit = event => {
        event.preventDefault();
        if (image === "") {
            console.log("error");
            return;
        }

        let bucketName ='images'
        let file = this.state.files[0]
        let storageRef = firbase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firbase.storage.TaskEvent.STATE_CHANGED,()=>{
            let downloadUrl = uploadTask.snapshot.getDownloadURL});
    }
     */


        useEffect(() => {
            const fetchImages = async () => {

                let result = await storageRef.child('images').listAll();
                let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

                return Promise.all(urlPromises);

            }

            const loadImages = async () => {
                const urls = await fetchImages();
                setImageUrl(urls);
            }
            loadImages().then();
        }, []);

    /*
    const complete = () => {
        storageRef
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(fireBaseUrl => {
                setImageUrl(fireBaseUrl);
            });
    };

    // Now we get the references of these images
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(imageRef) {
            // And finally display them
            console.log(result.items);
            displayImage(imageRef);
        });
    }).catch(function(error) {
      console.log(error)
    });

    function displayImage(imageRef) {
        imageRef.getDownloadURL().then(function(url) {
            setImageUrl.push(url);
            // TODO: Display the image on the UI
        }).catch(function(error) {
            // Handle any errors
        });
    }

     */

    const onSubmit=()=>{
        storageRef.listAll().then(function(result) {
            result.items.forEach(function(imageRef) {
                // And finally display them
                console.log(result.items);
                displayImage(imageRef);
            });
        }).catch(function(error) {
            console.log(error)
        });

        function displayImage(imageRef) {
            imageRef.getDownloadURL().then(function(url) {
                setImageUrl.push(url);
                // TODO: Display the image on the UI
            }).catch(function(error) {
                // Handle any errors
            });
        }
    }
    return(
        <div>
            <h3 >Photos</h3>
            <div className="addphoto">
                <form onSubmit={onSubmit}>
                    <input type="file" onChange={handleImage} />
                    <button type="submit" onClick={PhotoButton}>Submit</button>
                </form>
            </div>
            <img src={imageUrl} />

            {imageUrl.map((url) => (
                <img src={url}/>
            ))}
        </div>
    );

}

export default PhotoButton;

