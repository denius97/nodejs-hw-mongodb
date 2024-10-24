import { Router } from 'express';
import {
  createContactCtrl,
  getAllContactsCtrl,
  getContactByIdCtrl,
  patchContactCtrl,
  upsertContactCtrl,
  deleteСontactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.use(authenticate);

router.use('/:contactId', isValidId('contactId'));

router.get('/', ctrlWrapper(getAllContactsCtrl));

router.get('/:contactId', ctrlWrapper(getContactByIdCtrl));

router.post(
  '/',
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactCtrl),
);

router.patch(
  '/:contactId',
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactCtrl),
);

router.put(
  '/:contactId',
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactCtrl),
);

router.delete('/:contactId', ctrlWrapper(deleteСontactCtrl));

export default router;
