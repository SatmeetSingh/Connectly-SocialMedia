import { UserApiClient } from '../../Api/UserApiService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

export interface Data {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  Email: string;
  Password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  formData: Data;
  loginData: LoginData;
  errors: { field: string; message: string }[];
  isShown: boolean;
  loading: boolean;
  status: string;
}

interface PostDataArgs {
  url: string;
  data: Data;
  config?: AxiosRequestConfig;
}

interface PostLoginDataArgs {
  url: string;
  data: LoginData;
  config?: AxiosRequestConfig;
}

export const createUser = createAsyncThunk(
  'signup/createUser',
  async ({ url, data, config = {} }: PostDataArgs, { rejectWithValue }) => {
    try {
      return await UserApiClient.signupPost(url, data, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (
    { url, data, config = {} }: PostLoginDataArgs,
    { rejectWithValue }
  ) => {
    try {
      return await UserApiClient.loginPost(url, data, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const SignUpUser = As;

const initialState: AuthState = {
  isAuthenticated: false,
  formData: {
    username: '',
    name: '',
    email: '',
    password: '',
  },
  loginData: {
    Email: '',
    Password: '',
  },
  errors: [],
  status: 'idle',
  isShown: false,
  loading: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setIsShown: (state, action) => {
      state.isShown = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = 'pending';
        state.errors = [];
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.formData = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'pending';
        state.errors = [];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.loginData = action.payload;
      });
  },
});

export const {
  setFormData,
  setIsAuthenticated,
  setIsShown,
  setLoginData,
  setLoading,
  setErrors,
} = AuthSlice.actions;

export default AuthSlice.reducer;
