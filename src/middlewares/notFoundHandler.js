import createHttpError from 'http-errors';

const notFoundHandler = () => {
  throw createHttpError(404, `Not found`);
};

export default notFoundHandler;
