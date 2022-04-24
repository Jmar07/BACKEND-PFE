const express = require ('express')
require("./db")
const app = express();
const routes = require("./routes")
const bodyParser =require("body-parser")

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",routes)


app.listen(8000,()=>{

    console.log("server connected on port 8000");


})
