import express from 'express';
import connectDatabase from './config/database.js';
import faixaRouter from './routes/faixaRoutes.js';
import kataRouter from './routes/kataRoutes.js';
const app = express();
const port = process.env.PORT || 3000;
app.use('/faixas', faixaRouter);
app.use('/katas', kataRouter);
app.listen(port, () => {
  console.log('Server is running ✅');
  connectDatabase();
});
