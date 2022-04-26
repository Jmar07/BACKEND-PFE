const db = require("../db")

exports.module = (req,res)=>{


    db.query({sql:"select DISTINCT designation from `Module`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
}