const session = require("express-session");
const db = require("../db")

exports.client = (req,res)=>{

    if(!req.session.username){
        res.statusCode = 401;
        res.send("me 3andekch l7a9")

    }

    else {db.query({sql:"select DISTINCT des from `client_test`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    }

}