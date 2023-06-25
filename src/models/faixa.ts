import mongoose, { Schema, Document } from 'mongoose';

export interface IFaixa extends Document {
  id: string;
  nome: string;
}

const FaixaSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    nome: { type: String, required: true },
  },
  { collection: 'faixas' },
);

export const Faixa = mongoose.model<IFaixa>('Faixa', FaixaSchema);
