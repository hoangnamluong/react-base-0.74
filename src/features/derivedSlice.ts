import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  isSplashShown: boolean;
};

const initialState: InitialState = {
  isSplashShown: false,
};

const derivedSlice = createSlice({
  name: 'root',
  initialState: initialState,
  reducers: {
    setIsSplashShown: (state, {payload}) => {
      state.isSplashShown = payload;
    },
  },
});

const {actions, reducer} = derivedSlice;

export const {setIsSplashShown} = actions;
export default reducer;
