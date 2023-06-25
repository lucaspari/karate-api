import mongoose, { Schema } from 'mongoose';
const KataSchema = new Schema(
  {
    _id: { type: String, required: true },
    nome: { type: String, required: true },
    faixa: { type: String, required: true },
    url: { type: String, required: true },
  },
  { collection: 'katas' },
);
export const Kata = mongoose.model('kata', KataSchema);
