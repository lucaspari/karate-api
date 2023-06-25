import mongoose, { Schema, Document } from 'mongoose';

export interface IGolpe extends Document {
  id: string;
  nome: string;
  tempo: string;
  urlPath: string;
  descricao: string;
  url: string;
  detalhes: string;
  faixa: string;
}

const GolpeSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    nome: { type: String, required: true },
    tempo: { type: String, required: true },
    urlPath: { type: String, required: true },
    descricao: { type: String, required: true },
    url: { type: String, required: true },
    detalhes: { type: String, required: true },
    faixa: { type: String, required: true },
  },
  { collection: 'golpes' },
);
export const Golpe = mongoose.model<IGolpe>('Golpe', GolpeSchema);
