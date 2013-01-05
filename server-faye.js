
var WebSocket = require('faye-websocket')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , canto1 = require('./divinecomedy.js').canto1;

var server = http.createServer(handler);

server.addListener('upgrade', function(request, socket, head) {
    var ws = new WebSocket(request, socket, head);

    function schedule(line) {
        if (line < canto1.length) 
            setTimeout(function() {
                if (ws) {
                    ws.send(canto1[line]);
                    schedule(line + 1);
                }
            }, 2000);
        else if (ws)
            ws.close();
    }

    ws.onclose = function(event) {
        ws = null;
    };

    ws.send(canto1[0]);
    schedule(1);
});

function handler (req, res) {
    fs.readFile(path.resolve(__dirname, 'index-faye.html'),
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index-faye.html');
            }

            res.writeHead(200);
            res.end(data);
        }
    );
}

server.listen(process.env.PORT || 8888);
