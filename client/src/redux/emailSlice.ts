import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface EmailState {
  value: string;
}

const initialState: EmailState = {
  value: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail } = emailSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmail = (state: RootState) => state.email.value;

export default emailSlice.reducer;
