import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userURL = 'http://localhost:8000/user';
const headers = {
  'Content-type': 'application/json',
  'x-access-token': localStorage.getItem('token'),
};

// Add New user
export const userRegister = createAsyncThunk(
  'user/register',
  async (userNewData) => {
    try {
      const response = await axios.post(userURL, userNewData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// user login
export const userLoggin = createAsyncThunk(
  'user/login',
  async (userLogginData) => {
    try {
      const response = await axios.post(`${userURL}/login`, userLogginData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const loginStatus = createAsyncThunk('authUser', async () => {
  try {
    const response = await axios.get(`${userURL}/auth`, { headers });
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

export const logout = createAsyncThunk('logoutUser', async () => {
  try {
    const response = await axios.get(`${userURL}/logout`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    isLoggedIn: false,
    isTokenChecking: true,
    isLoggedOut: false,
  },

  extraReducers: (builder) => {
    builder.addCase(userLoggin.fulfilled, (state, { payload }) => {
      localStorage.setItem('token', payload.token);
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(loginStatus.fulfilled, (state, { payload }) => {
      state.isTokenChecking = false;
      state.isLoggedIn = payload.isLoggedIn;
      // eslint-disable-next-line no-undef, no-console
      // console.log('2', state.isLoggedIn);
    });
    builder.addCase(loginStatus.pending, (state) => {
      state.isTokenChecking = true;
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-console
      console.log(payload);
      state.isLoggedOut = payload.isLoggedOut;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoggedOut = false;
    });
  },
});

export default userSlice.reducer;

// export default authReducer;
