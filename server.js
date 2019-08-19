//creating a db(array), push number to db, list db, delete number and sum up
var express = require("express");
var app = express();
//npm install -g nodemon
//dont need to shut down and restart server every time
var router = require("./router.js");
app.use("/", router); //use this as a middleware
// app.use("/login", routerName); // this is good when there are multiple routes. Easier to manage

app.listen("8080", () => {
  console.log("server started...");
});

//create new repo on github
// push code to github
//git init the repo
//git remote add origin https://github.com/NubNini/week4Tutorial.git
// git add -A
// git commit -m "first version"
//git push --set-upstream origin master
