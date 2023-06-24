import express from 'express'
import connectDatabase from './config/database.js'
import faixaRouter from './routes/faixaRoutes.js';

const app = express()
const port = process.env.PORT || 3000
connectDatabase();
app.use('/faixas',faixaRouter)
app.listen(port,() =>{
    console.log("Server is running ✅")
})