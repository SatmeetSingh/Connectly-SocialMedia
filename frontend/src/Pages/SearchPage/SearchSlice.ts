import { UserApiClient } from '../../Api/UserApiService';
import { User, userdata } from '../../Components/Profile/UserInterface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';

interface searchUserProp {
  url: string;
  Data: string;
  config?: AxiosRequestConfig;
}

export const searchUser = createAsyncThunk(
  'search/searchuser',
  async ({ url, Data, config = {} }: searchUserProp, { rejectWithValue }) => {
    try {
      return await UserApiClient.searchByName(url, Data, config);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 404) return [];
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue(Data);
    }
  }
);

export interface SearchState {
  userData: User[];
  input: string;
  status: 'idle' | 'pending' | 'fulfilled' | 'failed';
  error: null | object | string;
}

const initialState: SearchState = {
  input: '',
  userData: [],
  status: 'idle',
  error: null,
};
const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    clearSearch: (state) => {
      state.input = '';
      state.userData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          state.status = 'fulfilled';
          state.userData = [];
          state.error = 'No users found';
        }
        state.status = 'fulfilled';
        state.userData = action.payload;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const { setSearch, clearSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
