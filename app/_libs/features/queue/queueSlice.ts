import { createSlice } from "@reduxjs/toolkit";
import { shuffleFromIndex } from "@utils/shuffleFromIndex";
import { SongRowProps } from "_types/component";

interface QueueState {
  queue: SongRowProps[];
  originalQueue: SongRowProps[];
  currentIndex: number;
  shuffle: boolean;
  loop: "one" | "all" | "none";
  volume: number;
  muted: boolean;
  status: "playing" | "paused";
}

const initialState: QueueState = {
  queue: [],
  originalQueue: [],
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
      if (action.payload.type == "addByPlay") {
        state.queue = [action.payload.song, ...state.queue];
        state.currentIndex = 0;
        state.status = "playing";
      } else if (action.payload.type == "addByAddToQueue") {
        state.queue = [...state.queue, action.payload.song];
      }
    },
    removeFromQueue: (state, action) => {
      state.queue = [
        ...state.queue.filter((song) => song.id != action.payload.song.id),
      ];
    },
    toggleShuffle: (state) => {
      if (!state.shuffle) {
        // Bật shuffle: lưu hàng đợi ban đầu và xáo trộn từ sau currentIndex
        state.originalQueue = [...state.queue];
        state.queue = shuffleFromIndex(state.queue, state.currentIndex);
      } else {
        // Tắt shuffle: khôi phục hàng đợi ban đầu
        const fixedPart = state.queue.slice(0, state.currentIndex + 1); // Giữ nguyên từ 0 đến currentIndex
        const restoredPart = state.originalQueue.slice(state.currentIndex + 1); // Khôi phục từ currentIndex + 1
        state.queue = [...fixedPart, ...restoredPart];
      }
      state.shuffle = !state.shuffle;
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
        state.status = "playing";
        state.currentIndex = 0;
        return;
      }

      if (state.currentIndex === state.queue.length - 1) {
        state.status = "paused";
        return;
      }

      state.currentIndex = state.currentIndex + 1;
      state.status = "playing";
    },
    playPrevious: (state) => {
      if (state.loop === "one") {
        return;
      }
      if (state.loop === "all" && state.currentIndex === 0) {
        state.status = "playing";
        state.currentIndex = state.queue.length - 1;
        return;
      }

      if (state.currentIndex === 0) {
        state.status = "playing";
        state.currentIndex = 0;
        return;
      }

      state.currentIndex = state.currentIndex - 1;
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
