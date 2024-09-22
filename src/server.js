import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import contactsRouter from './routers/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

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
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

export default setupServer;
