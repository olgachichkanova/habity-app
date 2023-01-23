const habitRoutes = require("./habit_routes");

module.exports = function(app, db) {
    habitRoutes(app, db)
}