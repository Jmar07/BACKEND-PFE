const db = require("../db")

exports.module = (req,res)=>{

    if(!req.session.username){
        res.statusCode = 401;
        res.send("me 3andekch l7a9")

    }


    else {db.query({sql:"select DISTINCT designation from `Module`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    }
}