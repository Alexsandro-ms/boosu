import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const dotEnvConfig = config();

mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then(() => {
    const PORT = process.env.SERVER_PORT;

    app.use(express.json());
    app.use(router);

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

    app.listen(PORT, () =>
      console.log(`🚀 server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log('Erro:', error));
