import mongoose, { Schema } from 'mongoose';
const FaixaSchema = new Schema(
  {
    _id: { type: String, required: true },
    nome: { type: String, required: true },
  },
  { collection: 'faixas' },
);
export const Faixa = mongoose.model('Faixa', FaixaSchema);
