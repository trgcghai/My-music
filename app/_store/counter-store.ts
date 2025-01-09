// src/stores/counter-store.ts
// import { File } from "buffer";
import { createStore } from "zustand/vanilla";

export type CounterState = {
  files: File[] | null;
};

export type CounterActions = {
  setFiles: (files: File[]) => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (): CounterState => {
  return { files: [] };
};

export const defaultInitState: CounterState = {
  files: [],
};

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    setFiles: (files: File[]) => set(() => ({ files: files })),
  }));
};
