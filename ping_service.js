const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
const isReachable = require('is-reachable');

app.get('/ping/:loc', function(req, res) {
    (async () => {
        console.log(req.params.loc);
        console.log(atob(req.params.loc));
        cur_ping = atob(req.params.loc);
        online = await isReachable(cur_ping);
        if (online) {
            res.json({online: true});
        }
        else {
            res.json({online: false});
        }
    })();
});

var server = app.listen(8082, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Ping service listening at http://localhost:8082");
});