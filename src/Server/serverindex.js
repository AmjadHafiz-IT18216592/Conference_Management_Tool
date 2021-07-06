const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const  app = express();
const cors = require('cors');

const  routeUrls = require('./routes');
dotenv.config();
const uri = "mongodb+srv://admin:admin%40123@cluster0.l68kh.mongodb.net/AFProject?authSource=admin&replicaSet=atlas-10ln46-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.log(process.env.DATABASE_ACCESS);
        console.error('Error connecting to Mongo', err);
    });
    
app.use(express.json());
app.use(cors());
app.use('/app',routeUrls);



app.listen(4000,()=> console.log('Server runing on port 4000'));
