import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "_types/component";

interface ModalState {
  open: boolean;
  title: string;
  type: ModalType;
  data: string | object | null;
}

const initialState: ModalState = {
  open: false,
  title: "",
  type: ModalType.DEFAULT,
  data: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
