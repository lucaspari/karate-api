import express, { Request, Response } from 'express';
import { Faixa } from '../models/faixa.js';

const faixaRouter = express.Router();


faixaRouter.get('/', async (req: Request, res: Response) => {
    try {
      const faixas = await Faixa.find()
      console.log("🚀 ~ file: faixaRoutes.ts:10 ~ faixaRouter.get ~ faixas:", faixas)
      res.json(faixas);
    } catch (error) {
      console.error('Error fetching faixas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  export default faixaRouter