const express = require ('express')
require("./db")
const app = express();
const routes = require("./routes")
const bodyParser =require("body-parser")
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

var cors = require('cors')


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 202
}

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
