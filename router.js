var express = require("express");
var router = express.Router();
var db = [];

router.get("/", (req, res) => {
  res.send("Hello World");
});

//route parameters, push number into db
//http:localhost:8080/addNumber/5
router.get("/addNumber/:number", (req, res) => {
  let number = req.params.number;
  db.push(number);
  res.send(
    "add numnber " +
      number +
      " to db successfully </br> The current db is: " +
      db
  );
});

// delete number in database, splice
router.get("/deleteNumber/:number", (req, res) => {
  //http:localhost:8080/deleteNumber/5
  //number = 5
  let number = req.params.number;
  let index = db.indexOf(number);
  //if this number doesnt exist in db
  if (index == -1) {
    res.send("number does not exist (index not found) ");
  } else {
    db.splice(index, 1);
    res.send(number + " deleted successfully <br/>Current database is: " + db);
  }
});

//sum up, for loop, while loop, for each
var sum = 0;
router.get("/sumUp", (req, res) => {
  db.forEach(element => {
    sum += parseInt(element);
  });
  res.send("The current db is " + db + "<br/> Sum result is: " + sum);
});

//so we can reference that this module is in the server
module.exports = router;
