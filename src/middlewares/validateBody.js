import createHttpError from 'http-errors';
import { parseBoolean } from '../utils/parseBoolean.js';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    const userId = req.user?._id;
    if (req.body.isFavourite) {
      req.body.isFavourite = parseBoolean(req.body.isFavourite);
    }
    if (userId) {
      await schema.validateAsync(
        { userId, ...req.body },
        {
          convert: false,
          abortEarly: false,
        },
      );
    } else {
      await schema.validateAsync(req.body, {
        convert: false,
        abortEarly: false,
      });
    }
    next();
  } catch (err) {
    const error = createHttpError(400, 'Bad Request', {
      errors: err.details,
    });
    next(error);
  }
};
