const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connectionsuccessfull")).catch((err)=>{console.log(err)});

app.get("/api/test",()=>{
    console.log("test is successful")
})

app.listen(process.env.PORT,()=>{
    console.log("backend running");
});