import { Request, Response } from 'express';
import { firestore } from '../config/firebase';
//import { UserObject } from '../interfaces/user.interface';
import { UserObject, FIREBASE_COLLECTIONS } from '@monorepo/shared';

const USER_COLLECTION = 'users';

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const uid = req.user.uid;
    const userData: Partial<UserObject> = req.body;

    //await firestore.collection(USER_COLLECTION).doc(uid).set(userData, { merge: true });

    await firestore.collection(FIREBASE_COLLECTIONS.USERS).doc(uid).set(userData, { merge: true });

    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    console.error('Update user data error:', error);
    res.status(500).json({ error: 'Failed to update user data' });
  }
};



export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const uid = req.user.uid;

    //const userDoc = await firestore.collection(USER_COLLECTION).doc(uid).get();
    
    const userDoc = await firestore.collection(FIREBASE_COLLECTIONS.USERS).doc(uid).get();


    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data() as UserObject;
    res.status(200).json(userData);
  } catch (error) {
    console.error('Fetch user data error:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};