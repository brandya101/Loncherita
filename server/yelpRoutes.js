// this is for the yelp fusion
// app.use("yelp", yelpRoutes)

// load data
var yelpData = require("./yelpApi");

// routing
module.exports = function (app) {
    app.get("/search", function (req, res) {
        console.log('got a search rquest:', req.query)
        yelpData(req.query.q)
        .then(function(resultYelpData) {
            res.json(resultYelpData);
        })
        .catch(function (err){
            console.log(err)
            res.json({ error: `unable to search for q=${req.query.q}`})
        })
    });
    // app.post("/search", function (req, res) {
    //         yelpData.push(req.body);
    //         res.json(true);
    // });
    app.post("/clear", function () {
        yelpData = [];
        console.log(yelpData);
    });
}; 