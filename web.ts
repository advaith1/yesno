import express from 'express'
const app = express()

app.get("/", (request, response) => {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.end('beep boop IM ALIVE BOIS')
})

app.listen(process.env.PORT)
