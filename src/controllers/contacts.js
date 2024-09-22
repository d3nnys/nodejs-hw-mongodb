import createHttpError from 'http-errors';
import * as contactServices from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const data = await contactServices.getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: data,
  });
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await contactServices.getContactById(id);

  if (!data) throw createHttpError(404, `Contact not found`);

  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: data,
  });
};

export const addContactController = async (req, res) => {
  const data = await contactServices.createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: data.message,
  });
};

export const upsertContactController = async (req, res) => {
  const { id } = req.params;
  const { isNew, data } = contactServices.updateContact(
    { _id: id },
    { upsert: true },
    req.body,
  );

  const status = isNew ? 201 : 200;

  res.json(status)({
    status: 200,
    message: 'Successfully upserted a contact!',
    data: data.message,
  });
};

export const patchContactController = async (req, res) => {
  const { id } = req.params;
  const result = contactServices.updateContact({ _id: id }, req.body);

  if (!result) throw createHttpError(404, `Contact not found`);

  res.json(200)({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.message,
  });
};

export const deleteMovieController = async (req, res) => {
  const { id } = req.params;
  const data = await contactServices.deleteContact({ _id: id });

  if (!data) throw createHttpError(404, `Contact not found`);

  res.status(204).send;
};
