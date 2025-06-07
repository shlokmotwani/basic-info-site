let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    let filename;
    if (parsedURL.pathname === "/") {
      filename = "./index.html";
    }
    else{
        filename = "./" + parsedURL.pathname.toString() + ".html";
    }
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  })
  .listen(9004);

  //comment for testing purposes