require("./db")
const routes = require("./routes")
const bodyParser =require("body-parser")
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const express = require ('express');
const cors = require("cors");


const app = express();


app.use(cors())


app.use(sessions({
    secret: 'hunter',
    resave: false,
    saveUninitialized: true
  }));

app.use(cookieParser());

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",routes)


app.listen(8000,()=>{

    console.log("server connected on port 8000");


})
