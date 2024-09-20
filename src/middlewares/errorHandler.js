const errorHandler = () => {
  (error, req, res, next) => {
    // const { status = 500, message } = error;
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
      data: error.message,
    });
  };
};

export default errorHandler;
