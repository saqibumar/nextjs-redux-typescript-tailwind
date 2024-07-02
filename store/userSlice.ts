import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  email: string;
  loginCount: number;
}

const initialState: UserState = {
  username: '',
  email: '',
  loginCount: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string; email: string }>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.loginCount += 1;
    },
    clearUser: (state) => {
      state.username = '';
      state.email = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
