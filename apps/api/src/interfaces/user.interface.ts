export interface UserObject {
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