import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // adjust this import to your slice file location

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
