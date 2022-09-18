let express = require('express');
let app = express();

// -- #1. Meet the Node console -- //
// console.log("Hello World")

// -- #2. Start a Working Express Server -- //
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// -- #3. Serve an HTML File -- //
// app.get("/", (res, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// -- #4. Serve Static Assets -- //
app.use("/public", express.static(__dirname + "/public"));




























 module.exports = app;
