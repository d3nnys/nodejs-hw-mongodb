import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

const isValidId = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(createHttpError(404, `${id} not valid id`));
  }

  return;
};

export default isValidId;
