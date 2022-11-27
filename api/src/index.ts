import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';
import mongoose from 'mongoose';

<<<<<<< HEAD
import { createServer } from 'node:http';
import { resolve } from 'node:path';

import { router } from './routes';

=======
>>>>>>> parent of 88f902c (feat(index and created orders): connection with socket by the api)
const app = express();
const dotEnvConfig = config();

<<<<<<< HEAD
const server = createServer(app);
export const io = new Server(server);

=======
>>>>>>> parent of 88f902c (feat(index and created orders): connection with socket by the api)
mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then(() => {
    const PORT = process.env.PORT || 8080;

    app.use(express.json());
    app.use(router);

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

<<<<<<< HEAD
    app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));

    app.use(express.json());
    app.use(router);

    server.listen(PORT, () =>
      console.log(`🚀... server is running on http://localhost:${PORT}`)
=======
    app.listen(PORT, () =>
      console.log(`🚀 server is running on http://localhost:${PORT}`)
>>>>>>> parent of 88f902c (feat(index and created orders): connection with socket by the api)
    );
  })
  .catch((error) => console.log('Erro:', error));
