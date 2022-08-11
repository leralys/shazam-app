import { RootState } from '../store';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { ISongInfo } from '../../utils/types';
import { MAX_RESULTS_API } from '../../utils/maxValues';
import { RESPONSES } from '../../utils/types';
import { fetchSongs } from '../../services/shazamApiService';

interface ISongsState {
  showModal: boolean;
  offset: number;
  status: RESPONSES;
  songs: ISongInfo[];
  openModalIndex: number;
  isFirstMount: boolean;
  title: string;
  searchedWord: string;
}

const initialState: ISongsState = {
  showModal: false,
  offset: 0,
  status: RESPONSES.Idle,
  songs: [],
  openModalIndex: -1,
  isFirstMount: true,
  title: '',
  searchedWord: '',
};

export const searchSongs: AsyncThunk<any, string, { state: RootState }> =
  createAsyncThunk(
    'songs/searchSongs',
    async (payload, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const offset = state.songs.offset;
      try {
        const songs = await fetchSongs(payload, offset);
        return songs;
      } catch (err) {
        return rejectWithValue(JSON.stringify(err));
      }
    }
  );

export const loadMoreSongs: AsyncThunk<any, string, { state: RootState }> =
  createAsyncThunk(
    'songs/loadMoreSongs',
    async (payload, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const offset = state.songs.offset;
      try {
        const result = await fetchSongs(payload, offset);
        return result;
      } catch (err) {
        return rejectWithValue(JSON.stringify(err));
      }
    }
  );

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    hideModal(state) {
      state.showModal = false;
      state.openModalIndex = -1;
    },
    showModal(state) {
      const showModal = { ...state, showModal: true };
      return showModal;
    },
    setOpenSongIndex(state, action: PayloadAction<number>) {
      state.openModalIndex = action.payload;
    },
    incrementPage(state) {
      state.offset = state.offset + MAX_RESULTS_API;
    },
    resetPageNum(state) {
      state.offset = 0;
    },
    setNotIsFirstMount(state) {
      const isFirstMount = { ...state, isFirstMount: false };
      return isFirstMount;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setSearchedWord(state, action: PayloadAction<string>) {
      state.searchedWord = action.payload;
    },
  },
  extraReducers: {
    [searchSongs.pending.type]: (state) => {
      state.status = RESPONSES.Loading;
    },
    [searchSongs.fulfilled.type]: (
      state,
      action: PayloadAction<ISongInfo[]>
    ) => {
      state.status = RESPONSES.Success;
      state.songs = action.payload;
    },
    [searchSongs.rejected.type]: (state) => {
      state.status = RESPONSES.Error;
    },
    [loadMoreSongs.fulfilled.type]: (
      state,
      action: PayloadAction<ISongInfo[]>
    ) => {
      state.songs = [...state.songs, ...action.payload];
    },
    [loadMoreSongs.rejected.type]: (state) => {
      state.status = RESPONSES.Error;
    },
  },
});

export const songsActions = songsSlice.actions;

export default songsSlice.reducer;
