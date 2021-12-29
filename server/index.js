//common JS import syntax
const express = require('express');
const videoRoutes = require('./routes/videos')
// const uploadRoutes=require('./routes/upload')
require('dotenv').config();
const PORT=process.env.PORT||8080;
const app= express();
// const PORT = 9001;declaring the port
const cors = require('cors');
const axios = require("axios");
const fs = require("fs"); //node-file system module, save data to the file

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('/', videoRoutes);


// app.get('/*', (request,response)=>{
//   response.send('<img src="images/pnf404.jpg">');
// })

app.listen(PORT,function(){
  //dont use 23 or 80
  //if u r using react avoid 3000
  console.log("my server is running "+ PORT)
})

