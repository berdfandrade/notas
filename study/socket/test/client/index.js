const express = require('express')
const { createServer } = require('node:path')
const {Server} = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server) 

app.get('/', (re, res) => {
	res.status(200).send({message : "HELLOW"})
})

io.on('connection', (socket) => {
	console.log('a user connected')
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log(`server running in ${PORT}`)
}); 



