var path = require("path");

module.exports = function (app) {


  app.get("/", (req, res) => {
    //  res.render("index");
    res.render("index");
  });

  app.get("/character", (req, res) => {
  	res.render("character");
  });

  app.get("/battle", (req,res) => {
  	res.render("battle");
  });
  
}

