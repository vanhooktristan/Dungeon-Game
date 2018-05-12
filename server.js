var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set("views", "views");
app.use(express.static("public"));

//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on localhost:" + PORT);
  });
});


