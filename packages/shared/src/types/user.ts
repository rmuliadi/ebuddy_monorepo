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

export interface UserState extends Omit<UserObject, 'uid'> {
    uid: string | null;
    loading: boolean;
    error: string | null;
}
  
export interface AuthRequest {
    email: string;
    password: string;
}