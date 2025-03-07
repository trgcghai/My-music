import { createSlice } from "@reduxjs/toolkit";
import { shuffleFromIndex } from "@utils/shuffleFromIndex";

interface QueueState {
  queue: string[];
  currentIndex: number;
  shuffle: boolean;
  loop: "one" | "all" | "none";
  volume: number;
  muted: boolean;
  status: "playing" | "paused";
}

const initialState: QueueState = {
  queue: [],
  currentIndex: 0,
  shuffle: false,
  loop: "none",
  volume: 100,
  muted: false,
  status: "paused",
};

export const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    addToQueue: (state, action) => {
      state.queue = [...state.queue, ...action.payload.queue];
    },
    removeFromQueue: (state, action) => {
      state.queue = state.queue.filter((song) => song !== action.payload.song);
    },
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
      state.queue = shuffleFromIndex(state.queue, state.currentIndex + 1);
    },
    toogleLoop: (state) => {
      if (state.loop === "none") {
        state.loop = "all";
      } else if (state.loop === "all") {
        state.loop = "one";
      } else {
        state.loop = "none";
      }
    },
    setVolume: (state, action) => {
      state.volume = action.payload.volume;
    },
    toogleMuted: (state, action) => {
      state.muted = action.payload.muted;
    },
    playSong: (state) => {
      state.status = "playing";
    },
    pauseSong: (state) => {
      state.status = "paused";
    },
    playNext: (state) => {
      if (state.loop === "one") {
        return;
      }
      if (
        state.loop === "all" &&
        state.currentIndex === state.queue.length - 1
      ) {
        state.currentIndex = 0;
      } else {
        state.currentIndex = state.currentIndex + 1;
      }
      state.status = "playing";
    },
    playPrevious: (state) => {
      if (state.loop === "one") {
        return;
      }
      if (state.loop === "all" && state.currentIndex === 0) {
        state.currentIndex = state.queue.length - 1;
      } else {
        state.currentIndex = state.currentIndex - 1;
      }
      state.status = "playing";
    },
  },
});

export const {
  addToQueue,
  removeFromQueue,
  toggleShuffle,
  toogleLoop,
  setVolume,
  toogleMuted,
  playSong,
  pauseSong,
  playNext,
  playPrevious,
} = queueSlice.actions;
export default queueSlice.reducer;
