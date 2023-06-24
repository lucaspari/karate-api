import mongoose, { Schema, Document } from 'mongoose';

export interface IKata extends Document {
  id : string;
  nome: string;
  faixa: string;
  url: string;
}

const KataSchema: Schema = new Schema({
  _id: { type: String, required: true },
  nome: { type: String, required: true },
  faixa: { type: String, required: true },
  url: { type: String, required: true },
},  {collection: 'katas'});

export const Kata = mongoose.model<IKata>('kata', KataSchema);