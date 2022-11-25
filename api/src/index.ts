import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';

const app = express();
const dotenvConfig = config();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`🚀 server is running on http://localhost:${PORT}`)
);
