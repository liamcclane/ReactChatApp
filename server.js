const express = require('express'); // requires express
const cors = require('cors');
const app = express(); //  creates an instance of express
app.use(cors());
const port = 8000; // listening port

require('./server/config/database');
require('./server/config/routes')(app);


const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
}); // .listen(function callback)

const io = require("socket.io")(server);
io.on("connection", socket => {
    console.log(socket.id, " <= socket.id ");
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})