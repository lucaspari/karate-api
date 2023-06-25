import express, { Request, Response } from 'express';
import { Kata } from '../models/katas.js';

const kataRouter = express.Router();


kataRouter.get('/', async (req: Request, res: Response) => {
    try {
      const katas = await Kata.find()
      res.json(katas);
    } catch (error) {
      console.error('Error fetching faixas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  kataRouter.get('/:faixaId', async (req: Request, res: Response) => {
    try{
      const katas = await Kata.findOne({ faixa: req.params.faixaId })
      res.json(katas);
    }
    catch (error) {
      console.error('Error fetching faixas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  export default kataRouter