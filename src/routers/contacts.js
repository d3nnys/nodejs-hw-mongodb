import { Router } from 'express';
import {
  contactAddSchema,
  contactPatchSchema,
} from '../validation/contacts.js';
import * as contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import authenticate from '../middlewares/authenticate.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get(
  '/',
  ctrlWrapper(contactController.getAllContactsController),
);
contactsRouter.get(
  '/:id',
  isValidId,
  ctrlWrapper(contactController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.addContactController),
);

contactsRouter.put(
  '/:id',
  isValidId,
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.upsertContactController),
);
contactsRouter.patch(
  '/:id',
  isValidId,
  validateBody(contactPatchSchema),
  ctrlWrapper(contactController.patchContactController),
);

contactsRouter.delete(
  '/:id',
  isValidId,
  ctrlWrapper(contactController.deleteContactController),
);

export default contactsRouter;
