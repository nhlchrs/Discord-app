import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: '',
    channelname:''
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelname = action.payload.channelname;
    }
  },
});

export const { setChannelInfo } = appSlice.actions;
export const selectChannelId = state => state.app.channelId;
export const selectChannelname = state => state.app.channelname;

export default appSlice.reducer;
