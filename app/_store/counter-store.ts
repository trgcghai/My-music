import { createStore } from "zustand/vanilla";
import { FileProps } from "../define";

export type CounterState = {
  files: FileProps[] | null;
};

export type CounterActions = {
  setFiles: (files: FileProps[]) => void;
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
    setFiles: (files: FileProps[]) => set(() => ({ files: files })),
  }));
};
