import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { signIn, signUp, signOut } from '../../firebase/auth';
import { updateUserData, fetchUserData } from '../../apis/userApi';

// Async Thunks
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const user = await signIn(email, password);
      return {
        uid: user.uid,
        email: user.email
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/update',
  async (userData: Partial<UserState>, { rejectWithValue }) => {
    try {
      await updateUserData(userData);
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.uid = action.payload.uid;
        state.email = action.payload.email;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default userSlice.reducer;