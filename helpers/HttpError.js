const messages = {
  400: " Missing fields",
  401: "Not authorized",
  404: " Not found",
  409: "Email in use",
};

const HttpError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
