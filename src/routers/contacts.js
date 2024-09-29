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

const router = Router();

router.get('/', ctrlWrapper(getAllContactsCtrl));

router.get('/:contactId', ctrlWrapper(getContactByIdCtrl));

router.post('/', ctrlWrapper(createContactCtrl));

router.patch('/:contactId', ctrlWrapper(patchContactCtrl));

router.put('/:contactId', ctrlWrapper(upsertContactCtrl));

router.delete('/:contactId', ctrlWrapper(deleteСontactCtrl));

export default router;
