import { createSlice} from '@reduxjs/toolkit'
import { loggedInterface } from '../../interface/global.interface'

const initialState: loggedInterface = {
  isLoggedIn: false,
};

export const loginSlice: any = createSlice({
  name: "Login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;