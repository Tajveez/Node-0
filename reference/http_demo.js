const http = require("http");

// creating server object
http
  .createServer((req, res) => {
    // Write response on request
    res.write("Custom HTTP server....");
    res.end();
  })
  .listen(5000, () => console.log("Running on port: 5000"));
