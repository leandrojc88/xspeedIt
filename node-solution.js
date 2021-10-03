const http = require("http");
const { productionLine, boxesToHTML } = require("./xspeedIt")

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    const line1 = "163841689525773"
    const line2 = "1231411212325443"
    const line3 = "584789688915"

    response.end(
        boxesToHTML(productionLine(line1)) +
        boxesToHTML(productionLine(line2)) +
        boxesToHTML(productionLine(line3))
    );

}).listen(8081);