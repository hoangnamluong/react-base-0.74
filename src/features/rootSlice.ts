import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  user: any;
};

const initialState: InitialState = {
  user: {},
};

const rootSlice = createSlice({
  name: 'root',
  initialState: initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});

const {actions, reducer} = rootSlice;

export const {setUser} = actions;
export default reducer;
