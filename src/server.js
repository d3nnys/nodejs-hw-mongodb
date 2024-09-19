import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import contactsRouter from './routers/contacts.js';

const setupServer = () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8597;
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(cors());
  app.use(logger);
  app.use(express.json());
  app.use('/contacts', contactsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((error, req, res) => {
    res.status(500).json({
      message: error.message,
    });
  });

  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

export default setupServer;
