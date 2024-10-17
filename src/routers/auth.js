import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserSchema, registerUserSchema } from '../validation/auth.js';
// import { isValidId } from '../middlewares/isValidId.js';
import {
  loginUserCtrl,
  logoutUserCtrl,
  refreshUserSessionCtrl,
  registerUserCtrl,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserCtrl),
);

authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserCtrl),
);

authRouter.post('/logout', ctrlWrapper(logoutUserCtrl));

authRouter.post('/refresh', ctrlWrapper(refreshUserSessionCtrl));

export default authRouter;
