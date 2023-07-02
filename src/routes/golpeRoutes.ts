import express, { Request, Response } from 'express';
import { Golpe } from '../models/golpes.js';

const golpeRouter = express.Router();
golpeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const golpes = await Golpe.find();
    res.json(golpes);
  } catch (error) {
    console.error('Error fetching golpes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

golpeRouter.get('/findByGolpeUrlPath/:golpe', async (req: Request, res: Response) => {
  try {
    const golpes = await Golpe.findOne({
      urlPath: req.params.golpe,
    });
    res.json(golpes);
  } catch (error) {
    console.error('Error fetching golpes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
golpeRouter.get(
  '/findGolpesByFaixa/:faixa',
  async (req: Request, res: Response) => {
    try {
      const golpes = await Golpe.find({
        faixa: req.params.faixa,
      });
      res.json(golpes);
    } catch (error) {
      console.error('Error fetching golpes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
);

golpeRouter.get('/randomGolpe/',async(req: Request, res: Response) => {
  console.log('entrou')
try{
  const golpes = await Golpe.find();
  const randomGolpe = golpes[Math.floor(Math.random() * golpes.length)];
  return res.json(randomGolpe);
}
catch(error){
  console.error('Error fetching golpes:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}})
export default golpeRouter;
