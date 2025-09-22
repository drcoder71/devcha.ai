const { ZodError } = require("zod");

const validateMiddleware = (schema) => (req, res, next) => {
  try {
    req.validatedData = schema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    next(err);
  }
};

module.exports = validateMiddleware;
