const db = require("../db")

exports.accomp = (req,res)=>{


    db.query({sql:"select DISTINCT nomAcc from `Accompagnant`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
}