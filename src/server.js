import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import * as contactServices from './services/contacts.js';

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

  app.get('/contacts', async (req, res) => {
    const data = await contactServices.getAllContacts();

    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });

  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const data = await contactServices.getContactById(id);

    if (!data) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data,
    });
  });

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
