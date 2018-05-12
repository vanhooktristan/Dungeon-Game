var path = require("path");

module.exports = function (app) {

<<<<<<< HEAD
  app.get("/", (req, res) => {
    //  res.render("index");
    res.render("index2");
  });
=======
app.get("/", (req, res) => {
  res.render("index", {title: "Dungeon Game | Start"});
});
>>>>>>> f7d7c43d173ca94241c8c3bd8d76c890d704ca30

};