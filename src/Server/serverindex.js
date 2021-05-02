const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const  app = express();
const cors = require('cors');

const  routeUrls = require('./routes');


dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,{useUnifiedTopology: true , useNewUrlParser:true },()=>{

    console.log("Database connected!");
    }
);
app.use(express.json());
app.use(cors());
app.use('/app',routeUrls);



app.listen(4000,()=> console.log('Server runing on port 4000'));
