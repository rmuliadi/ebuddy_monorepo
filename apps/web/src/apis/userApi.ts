import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
//import { UserState } from '../types/user';
import { UserState, FIREBASE_COLLECTIONS } from '@monorepo/shared';

export const updateUserData = async (userData: Partial<UserState>) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error('No authenticated user');
  }

  //const userDocRef = doc(firestore, 'users', user.uid);
  const userDocRef = doc(firestore, FIREBASE_COLLECTIONS.USERS, user.uid);
  await setDoc(userDocRef, userData, { merge: true });
};

export const fetchUserData = async (): Promise<UserState | null> => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  //const userDocRef = doc(firestore, 'users', user.uid);
  const userDocRef = doc(firestore, FIREBASE_COLLECTIONS.USERS, user.uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data() as UserState;
  }

  return null;
};