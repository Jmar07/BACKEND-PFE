const db = require("../db")

exports.personnel = (req,res)=>{


    db.query({sql:"select DISTINCT designation from ``"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
}