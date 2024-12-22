import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
// Import other reducers here

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;