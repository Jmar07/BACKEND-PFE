const db = require("../db")

exports.client = (req,res)=>{


    db.query({sql:"select DISTINCT des from `client_test`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
}