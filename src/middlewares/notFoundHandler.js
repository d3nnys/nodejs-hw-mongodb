import createHttpError from 'http-errors';

const notFoundHandler = () => {
  throw createHttpError(404, `Not found`);
  //   (req, res) => {
  //     res.status(404).json({
  //       message: 'Not found',
  //     });
  //   };
};

export default notFoundHandler;
