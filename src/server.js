import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import students from './db/students.json';

const setupServer = () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const logger = pino({
    transport: {
      target: pino - pretty,
    },
  });

  app.use(cors());
  app.use(logger);
  app.use(express.json());

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

  app.get('/students', (req, res) => {
    res.json(students);
  });

  app.listen(3000, () => console.log(`Server running on ${PORT}`));
};

export default setupServer;
