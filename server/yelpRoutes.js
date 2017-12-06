// this is for the yelp fusion
// app.use("yelp", yelpRoutes)

// load data
var yelpData = require("./yelpApi");

// routing
module.exports = function (app) {
    app.get("/search", function (req, res) {
        yelpData(req.query.q)
        .then(function(resultYelpData) {
            res.json(resultYelpData);
        })
    });
    app.post("/search", function (req, res) {
            yelpData.push(req.body);
            res.json(true);
    });
    // i am not sure if this is needed
    app.get("/search", function (req, res) {
        res.sendFile(path.join(__dirname, "../src/modules/search"));
    });
    app.post("/clear", function () {
        yelpData = [];
        console.log(yelpData);
    });
};