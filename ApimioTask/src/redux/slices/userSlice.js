import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: [],
    currentUser: {}
  },
  reducers: {
    addUser(state, action) {
      state.allUsers = [...state.allUsers, action.payload];
    },
    setUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;