//1.import express
const express = require('express')

// 2. import cors
const cors = require('cors');

// 5. import logic
const logic = require('./services/logic')

// 3.Create a server application using express
const server = express()

// 4. use cors
server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000, () => {
    console.log('listening on the port 8000');
})



// server.get('/login', (req, res) => {
//     headers = { 'Accept': 'application/json' };
//     request = http('POST', ('https://api.denzo.io/api/cus/v1/login'));

//     request.fields({
//         'username': '+918086808680',
//         'password': '123456',
//         'store_id': '10'
//     });

// })

