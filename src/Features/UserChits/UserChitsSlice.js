import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChit: {},
  saveChitUserDatails: [],
};
export const UserChitsSlice = createSlice({
  name: "userchit",
  initialState,
  reducers: {
    //   get selected chit details
    getChits: (state, action) => {
      state.userChit = action.payload;
    },
    // save chit and user card/address details
    saveChitUserDetails : (state, action) => {
      state.saveChitUserDatails.push(action.payload);
    },
  },
});

export const { getChits ,saveChitUserDetails} = UserChitsSlice.actions;

export default UserChitsSlice.reducer;
