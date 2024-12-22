export interface UserState {
    uid: string | null;
    email: string | null;
    displayName?: string | null;
    loading: boolean;
    error: string | null;
  }