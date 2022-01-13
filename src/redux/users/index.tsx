import { Action, Reducer } from "redux";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { UsersState } from "@models";

const initialState: UsersState = {
  email: null,
  firstName: null,
  lastName: null,
};

// First, create the thunk
export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    return;
  }
);

// Then, handle actions in your reducers:
const UsersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    set: (state, action: PayloadAction<UsersState>) =>
      Object.assign({}, state, action.payload),
    reset: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUserById.fulfilled, (state, action) => {
  //     Object.assign({}, state, action.payload);
  //   });
  // },
});

export { UsersSlice };
