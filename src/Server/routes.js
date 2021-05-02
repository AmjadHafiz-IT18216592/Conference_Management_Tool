const express = require('express');
const router = express.Router();
const  ConferenceModel = require('./modules/Conferences');


router.post('/addConference',async(req , res)=>{
//app.post('/',async(req , res)=>{
    const conference = new ConferenceModel({

                title:req.body.title,
                about:req.body.about,
                presentation:req.body.presentation,
                workshop:req.body.workshop,
                email:req.body.email,
                date:req.body.date,
                from:req.body.from,
                to:req.body.to,
                place:req.body.place,
                amount:req.body.amount


    });

    await conference.save().then(data =>{
        res.send("Save to database");
        res.json(data)
        alert("Saved")
    }).catch( err=>{
        res.status(400).send("unable to save to database");
        res.json(err)
        console.log(err);
    });

});


router.get('/readDetails',async(req , res)=>{

    ConferenceModel.find({},(error,result)=>{
        if(error){
            res.status(400).send("unable to fetch from  database");
            res.json(error)
            console.log(error);
        }
        res.send(result);
        //res.status(200).send("Fetch from database");
        console.log("Fetch from database");
    });

});

router.get('/research_paper_presentations',async(req , res)=>{

    ConferenceModel.find({},(error,result)=>{
        if(error){
            res.status(400).send("unable to fetch from  database");
            res.json(error)
            console.log(error);
        }
        res.send(result);
        //res.status(200).send("Fetch from database");
        console.log("Fetch from database");
    });

});
module.exports = router

router.get('/workshops',async(req , res)=>{

    ConferenceModel.find({},(error,result)=>{
        if(error){
            res.status(400).send("unable to fetch from  database");
            res.json(error)
            console.log(error);
        }
        res.send(result);
        //res.status(200).send("Fetch from database");
        console.log("Fetch from database");
    });

});
module.exports = router