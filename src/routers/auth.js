import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetPwdSchema,
  resetPwdSchema,
} from '../validation/auth.js';

import {
  loginUserCtrl,
  logoutUserCtrl,
  refreshUserSessionCtrl,
  registerUserCtrl,
  requestResetPwdCtrl,
  resetPwdCtrl,
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

authRouter.post(
  '/send-reset-email',
  validateBody(requestResetPwdSchema),
  ctrlWrapper(requestResetPwdCtrl),
);

authRouter.post(
  '/reset-password',
  validateBody(resetPwdSchema),
  ctrlWrapper(resetPwdCtrl),
);

export default authRouter;
