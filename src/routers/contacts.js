import { Router } from 'express';
import * as contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get(
  '/',
  ctrlWrapper(contactController.getAllContactsController),
);
contactsRouter.get(
  '/:id',
  ctrlWrapper(contactController.getContactByIdController),
);
contactsRouter.post('/', ctrlWrapper(contactController.addContactController));
contactsRouter.put(
  '/:id',
  ctrlWrapper(contactController.upsertContactController),
);
contactsRouter.patch(
  '/:id',
  ctrlWrapper(contactController.patchContactController),
);

contactsRouter.delete(
  '/:id',
  ctrlWrapper(contactController.deleteMovieController),
);

export default contactsRouter;
