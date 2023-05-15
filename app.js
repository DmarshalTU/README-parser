
const
    cors = require('cors'),
    express = require('express'),
    server = express(),
    port = process.env.PORT || 5003,
    routersManager = require('./routes/routes-manager')

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use('', routersManager);

server.listen(port, () => console.log('README parser is ready to serve!\nListening at port : ' + port + "         "));