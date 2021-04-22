const express = require('express');
const mongoose = require('mongoose');
//const router = express.Router();
const dotenv = require('dotenv');
const  app = express();
//const  ConferenceModel = require('./modules/Conferences');
const cors = require('cors');
//const bodyParser = require('body-parser');
const  routeUrls = require('./routes');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended:true}));
//app.use(express.json());
//app.use(cors());
//app.options('*',cors());
//app.use(bodyParser.urlencoded({extended:false}));
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,{useUnifiedTopology: true , useNewUrlParser:true },()=>{

    console.log("Database connected!");
    }
);
app.use(express.json());
app.use(cors());
app.use('/app',routeUrls);


app.listen(4000,()=> console.log('Server runing on port 4000'));
