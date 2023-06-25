var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import express from 'express';
import { Kata } from '../models/katas.js';
const kataRouter = express.Router();
kataRouter.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const katas = yield Kata.find();
      res.json(katas);
    } catch (error) {
      console.error('Error fetching faixas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }),
);
kataRouter.get('/:faixaId', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const katas = yield Kata.findOne({ faixa: req.params.faixaId });
      res.json(katas);
    } catch (error) {
      console.error('Error fetching faixas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }),
);
export default kataRouter;
