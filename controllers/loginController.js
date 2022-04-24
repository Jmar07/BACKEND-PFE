const db = require("../db")

exports.login = (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    db.query("select * from Accesscontrol where Login = 'Adel.gamaoun'",
    [username],(err,results,fields)=>{

        if(err){
            console.log(err);
        }else{
            console.log(results);
        }
    })


}