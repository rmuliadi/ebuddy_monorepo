import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut
  } from 'firebase/auth';
  import { auth } from './clientApp';
  
  export const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };
  
  export const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Signup Error:', error);
      throw error;
    }
  };
  
  export const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Logout Error:', error);
      throw error;
    }
  };