// -- http://localhost:3000/ -- //

let express = require('express');
let app = express();


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

















 module.exports = app;
