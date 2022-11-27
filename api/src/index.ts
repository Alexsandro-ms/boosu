import express from 'express';
import path from 'node:path';
import http from 'node:http';
import mongoose from 'mongoose';
import { router } from './routes';
import { config } from 'dotenv';

import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

const dotEnvConfig = config();

mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then(() => {
    const PORT = process.env.PORT;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });

    app.use(express.json());
    app.use(router);

    app.listen(PORT, () =>
      console.log(`🚀 server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log('Erro:', error));
