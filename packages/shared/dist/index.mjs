// src/constants/firebase.ts
var FIREBASE_COLLECTIONS = {
  USERS: "users",
  PROFILES: "profiles",
  SETTINGS: "settings"
};
var AUTH_ERROR_CODES = {
  INVALID_EMAIL: "auth/invalid-email",
  USER_DISABLED: "auth/user-disabled",
  USER_NOT_FOUND: "auth/user-not-found",
  WRONG_PASSWORD: "auth/wrong-password"
};

// src/utils/validation.ts
var validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
var validatePassword = (password) => {
  return password.length >= 8;
};
export {
  AUTH_ERROR_CODES,
  FIREBASE_COLLECTIONS,
  validateEmail,
  validatePassword
};
