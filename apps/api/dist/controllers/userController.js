"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const firebase_1 = require("../config/firebase");
//import { UserObject } from '../interfaces/user.interface';
const shared_1 = require("@monorepo/shared");
const USER_COLLECTION = 'users';
const updateUserData = async (req, res) => {
    try {
        const uid = req.user.uid;
        const userData = req.body;
        //await firestore.collection(USER_COLLECTION).doc(uid).set(userData, { merge: true });
        await firebase_1.firestore.collection(shared_1.FIREBASE_COLLECTIONS.USERS).doc(uid).set(userData, { merge: true });
        res.status(200).json({ message: 'User data updated successfully' });
    }
    catch (error) {
        console.error('Update user data error:', error);
        res.status(500).json({ error: 'Failed to update user data' });
    }
};
exports.updateUserData = updateUserData;
const fetchUserData = async (req, res) => {
    try {
        const uid = req.user.uid;
        //const userDoc = await firestore.collection(USER_COLLECTION).doc(uid).get();
        const userDoc = await firebase_1.firestore.collection(shared_1.FIREBASE_COLLECTIONS.USERS).doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: 'User not found' });
        }
        const userData = userDoc.data();
        res.status(200).json(userData);
    }
    catch (error) {
        console.error('Fetch user data error:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};
exports.fetchUserData = fetchUserData;
