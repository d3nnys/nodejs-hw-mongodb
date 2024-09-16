import ContactCollection from '../db/models/Contact.js';

export const getAllContacts = () => ContactCollection.find();
export const getContactByID = (id) => ContactCollection.findById(id);
