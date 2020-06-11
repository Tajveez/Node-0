const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Server created ...");

  // // Static File paths
  // if(req.url == '/'){
  //     fs.readFile(path.join(__dirname, 'pub', 'index.html'), (err, content) => {

  //         if(err) throw err;

  //         res.writeHead(200, { 'Content-Type': 'text/html' })
  //         res.end(content)
  //     })
  // }

  // // for api calls
  // if(req.url == '/api/users'){
  //     const users = [
  //         { name: 'Keanue', age: 55 },
  //         { name: 'Edgar Alan poe', age: 57 }
  //     ]

  //     res.writeHead(200, { 'Content-Type': 'application/json' })
  //     res.end(JSON.stringify(users))
  // }

  // if(req.url == '/about'){
  //     fs.readFile(path.join(__dirname, 'pub', 'about.html'), (err, content) => {

  //         if(err) throw err;

  //         res.writeHead(200, { 'Content-Type': 'text/html' })
  //         res.end(content)
  //     })
  // } else {
  //     res.writeHead(404, { 'Content-Type': 'text/html' })
  //     res.end('<h1>404, page not found</h1>')
  // }

  // Dynamic File Paths
  let filePath = path.join(
    __dirname,
    "pub",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);

  // Extension of file
  let extensionName = path.extname(filePath);

  // Setting content-type based on file extension
  let contentType = "text/html";
  switch (extensionName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }

  // Reading file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>404 Page not found</h1>");
      } else {
        res.writeHead(500);
        res.end("<h1>500 Internal Server Error</h1>");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Running on PORT# ${PORT}`);
});

// // ======================= Old code ============================
// const Person = require('./person');
// const person = new Person('john', '31');

// person.greeting()
// console.log('Till 50:00')

// const Logger = require('./Logger');
// const logger = new Logger();

// logger.on('message', (data) => {
//     console.log('Called Listener:', data)
// })

// logger.log('Called Emitter');
