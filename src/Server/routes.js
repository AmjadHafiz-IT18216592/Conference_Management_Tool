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
                amount:req.body.amount


    });

    //await  conference.save()
    await conference.save().then(data =>{
        res.send("Save to database");
        res.json(data)
    }).catch( err=>{
        res.status(400).send("unable to save to database");
        res.json(err)
        console.log(err);
    });

});

module.exports = router