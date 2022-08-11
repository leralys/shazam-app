import axios from '../axios/config';
import { MAX_RESULTS_API } from '../utils/maxValues';
import { prepareSongsArray } from '../utils/prepareSongsArray';

// term - required - Full name of songs or artists
// locale - optional - The language code
// offset - optional - For paging purpose
// limit - optional - For paging purpose, maximum is fixed at 5 items per response

export enum Shazam {
  Caption = 'Open in Shazam',
  Id = 'SHAZAM',
}

export const fetchSongs = async (term: string, offset: number) => {
  const res = await axios.get('/search', {
    params: {
      term,
      locale: 'en-US',
      offset: offset.toString(),
      limit: `${MAX_RESULTS_API}`,
    },
  });
  if (res.status === 200) {
    return prepareSongsArray(res.data.tracks.hits);
  } else {
    throw new Error('Could not fetch songs');
  }
};
