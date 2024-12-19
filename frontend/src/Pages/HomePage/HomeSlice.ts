import { AxiosRequestConfig } from 'axios';
import { UserApiClient } from '../../Api/UserApiService';
import { User, userdata } from '../../Components/Profile/UserInterface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostApiClient } from '../../Api/PostApiService';
import { Post, postData } from './PostInterface';

interface FetchDataArgs {
  url: string;
  userId?: string | null;
  config?: AxiosRequestConfig;
}

/*rejectWithValue: Provided by redux, it returns the error payload and marks the thunk as rejected instead of throwing an error.*/
export const fetchData = createAsyncThunk(
  'home/fetchData',
  async (
    { url, userId = null, config = {} }: FetchDataArgs,
    { rejectWithValue }
  ) => {
    try {
      return await UserApiClient.getById(url, userId, config);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPostsByUserId = createAsyncThunk(
  'home/fetchPost',
  async (
    { url, userId = null, config = {} }: FetchDataArgs,
    { rejectWithValue }
  ) => {
    try {
      const res = await PostApiClient.getPostByUserId(url, userId, config);
      return res.data.posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export interface ErrorObject {
  [key: string]: any;
}

export interface HomeState {
  userData: User;
  postData: Post[];
  status: string;
  error: null | ErrorObject;
}

const initialState: HomeState = {
  userData: userdata,
  postData: [],
  status: 'idle',
  error: null,
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // Fetch Data
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.userData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      })
      .addCase(fetchPostsByUserId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostsByUserId.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.postData = action.payload;
      })
      .addCase(fetchPostsByUserId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default HomeSlice.reducer;
