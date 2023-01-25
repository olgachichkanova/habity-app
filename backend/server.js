const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db")

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}))
function setupCORS(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
}
app.all('/*', setupCORS);

MongoClient.connect(db.url, (err, client) => {
    const db = client.db('habits')
    if(err) return console.log(err)
    require("./app/routes")(app, db);
    app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
})