import express from 'express'
import connectDatabase from './config/database.js'

const app = express()
const port = 3000
connectDatabase();
app.get('/',(req,res) =>{
    res.json('Hello World')
})

app.listen(port,() =>{
    console.log("Server is running on port 3000")
})