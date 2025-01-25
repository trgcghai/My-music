import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "_types/component";

interface ModalState {
  open: boolean;
  title: string;
  type: ModalType;
}

const initialState: ModalState = {
  open: false,
  title: "",
  type: ModalType.DEFAULT,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
      state.type = action.payload.type;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
