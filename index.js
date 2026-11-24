import dotenv from 'dotenv';

import express from 'express';
const app = express()
//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
dotenv.config();
app.listen(process.env.PORT, () => {
  //console.log(`hey bae ${port}`)
    console.log(`Example app listening on port = ${process.env.PORT}`)
})
app.get('/about', (req, res) => {
  res.send('About Page')
})