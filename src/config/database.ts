import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDatabase = async () => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log('Connected to the database ✅');
    })
    .catch((err) => {
      console.log('Error ❌: ', err);
    });
};

export default connectDatabase;
