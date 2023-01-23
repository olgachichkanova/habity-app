const ObjectID = require("mongodb").ObjectId;
module.exports = function (app, db) {
    // app.get("/habits/:id", (req, res) => {
    //     const id = req.params.id
    //     const details = {"_id": new ObjectID(id)}
    //     db.collection("habits").findOne(details, (err, result) => {
    //         if(err) {
    //             res.send("Error has occured")
    //         } else {
    //             res.send(result)
    //         }
    //     })
    // })

    app.get("/habits", (req, res) => {
        db.collection("habits").find().toArray((err, result) => {
            if(err) {
                res.send("Error has occured")
            } else {
                res.send(result)
            }
        })
    })

    app.post("/habits", (req, res) => {
        const habit = {name: req.body.name, days: req.body.days}
        db.collection('habits').insertOne(habit, (err, result) => {
            if(err) {
                res.send("Error has occured")
            } else {
                res.send(result)
            }
        })
    })
    
    app.delete("/habits/:id", (req, res) => {
        const id = req.params.id
        const details = {"_id": new ObjectID(id)}
        db.collection("habits").remove(details, (err, result) => {
            if(err) {
                res.send("Error has occured")
            } else {
                res.send(result)
            }
        })
    })

    app.put("/habits/:id", (req, res) => {
        const id = req.params.id
        const details = {"_id": new ObjectID(id)}
        const habit = {name: req.body.name, days: req.body.days}
        db.collection("habits").updateOne(details, {$set: habit}, (err, result) => {
            if(err) {
                res.send("Error has occured")
            } else {
                res.send(result)
            }
        })
    })
}