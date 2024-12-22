declare const FIREBASE_COLLECTIONS: {
    readonly USERS: "users";
    readonly PROFILES: "profiles";
    readonly SETTINGS: "settings";
};
declare const AUTH_ERROR_CODES: {
    readonly INVALID_EMAIL: "auth/invalid-email";
    readonly USER_DISABLED: "auth/user-disabled";
    readonly USER_NOT_FOUND: "auth/user-not-found";
    readonly WRONG_PASSWORD: "auth/wrong-password";
};

interface UserObject {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
    lastLogin?: Date;
    createdAt?: Date;
    role?: 'user' | 'admin' | 'moderator';
    isActive?: boolean;
    customClaims?: Record<string, any>;
}
interface UserState extends Omit<UserObject, 'uid'> {
    uid: string | null;
    loading: boolean;
    error: string | null;
}
interface AuthRequest {
    email: string;
    password: string;
}

declare const validateEmail: (email: string) => boolean;
declare const validatePassword: (password: string) => boolean;

export { AUTH_ERROR_CODES, type AuthRequest, FIREBASE_COLLECTIONS, type UserObject, type UserState, validateEmail, validatePassword };
