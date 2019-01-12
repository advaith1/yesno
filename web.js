const http = require('http')
const express = require('express')
const app = express()

app.get("/", (request, response) => {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.end('beep boop IM ALIVE BOIS')
})

app.listen(process.env.PORT)

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);