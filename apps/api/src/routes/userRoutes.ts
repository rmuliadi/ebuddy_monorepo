import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { updateUserData, fetchUserData } from '../controllers/userController';

const router = express.Router();

router.post('/update-user-data', authMiddleware, updateUserData);
router.get('/fetch-user-data', authMiddleware, fetchUserData);

export default router;