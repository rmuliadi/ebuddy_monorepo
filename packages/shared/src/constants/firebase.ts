export const FIREBASE_COLLECTIONS = {
    USERS: 'users',
    PROFILES: 'profiles',
    SETTINGS: 'settings'
  } as const;
  
  export const AUTH_ERROR_CODES = {
    INVALID_EMAIL: 'auth/invalid-email',
    USER_DISABLED: 'auth/user-disabled',
    USER_NOT_FOUND: 'auth/user-not-found',
    WRONG_PASSWORD: 'auth/wrong-password'
  } as const;