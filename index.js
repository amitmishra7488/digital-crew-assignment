const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const {createServer} = require('http')
const {Server} = require('socket.io')


const productRoutes = require("./Routes/product.routes");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});


app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    req.io = io;
    next()
})


app.use("/inventory", productRoutes);
app.get('/', async(req,res)=>{
    res.status(200).send("Welcome to Digital Crew Inventory!");
});


connectDB();

httpServer.listen(8080, () => {
    console.log("listening on port 8080");
})

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log(socket.id, 'is disconnected.')
    })
})



