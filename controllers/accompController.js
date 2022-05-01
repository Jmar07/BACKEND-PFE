const db = require("../db")

exports.accomp = (req,res)=>{

    if(!req.session.username){
        res.statusCode = 401;
        res.send("me 3andekch l7a9")

    }



    else {db.query({sql:"select DISTINCT nomAcc from `Accompagnant`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    }
}