// -- http://localhost:3000/ -- //

let express = require('express');
let app = express();
require('dotenv').config(); // #6. Use the .env File
let bodyParser = require('body-parser');


// -- #11. Use body-parser to Parse POST Resquests -- //
app.use(bodyParser.urlencoded({ extended: false }));

// -- #7. Implement a Root-Level Request Logger Middleware -- //
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// -- #1. Meet the Node console -- //
console.log("Hello World");

// -- #2. Start a Working Express Server -- //
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// -- #3. Serve an HTML File -- //
app.get("/", (req, res) => {
  res.sendFile(__dirname + "views/index.html");
});

// -- #4. Serve Static Assets -- //
app.use("/public", express.static(__dirname + "/public"));

// -- #5. Serve JSON on a Specific Route -- //
// app.get("/json", (req, res) => {
//   res.json({ "message": "Hello json" });
// });

// -- #6. Use the .env File -- //
app.get("/json", (req, res) => {
  res.json({ "message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json" });
});

// -- #8. Chain Middleware to Create a Time Server -- //
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({ time: req.time });
});

// -- #9. Get Route Parameter Input from the Client -- //
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

// -- #10. Get Query Parameter Input from the Client -- //
app.get("/name", (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last });
});

// -- #12. Get Data from POST Requests -- //
app.post("/name", (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last });
}); 









 module.exports = app;
