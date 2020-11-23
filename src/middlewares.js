const errorTypes = {
  ValidationError: 422,
};

function notFound(req, res, next) {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const statusCode = res.status === 200
    ? (errorTypes[error.name] || 500)
    : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: error.message, 
    stack: process.env.NODE_ENV === 'production' ? '🌿' : error.stack,
    errors: error.errors || undefined,
  });
}
