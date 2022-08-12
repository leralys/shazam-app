import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { songsActions, loadMoreSongs } from '../../store/slices/songsSlice';
import { IconButton, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SongListItem from '../songListItem/SongListItem';
import HeartButton, {
  ButtonVariants,
} from '../../components/heartButton/HeartButton';
import {
  ListItemWrapper,
  RowFullLength,
  HorizontalLine,
} from '../../styles/sharedStyles';
import { RowJustifyEnd } from './styles';
import COLORS from '../../utils/colors';
import { MAX_OFFSET } from '../../utils/maxValues';

const SearchResultsList = () => {
  const dispatch = useAppDispatch();
  const foundSongs = useAppSelector((state) => state.songs.songs);
  const offset = useAppSelector((state) => state.songs.offset);
  const searchedWord = useAppSelector((state) => state.songs.searchedWord);
  const isFirstMount = useAppSelector((state) => state.songs.isFirstMount);

  const likedSongs = useLiveQuery(() => db.songs.toArray());
  if (!likedSongs) return null; // Still loading

  // check if a song has been already liked
  const findIfLiked = (key: string) => {
    return likedSongs?.some((song) => song.key === key);
  };

  const openModal = (e: React.SyntheticEvent, index: number) => {
    dispatch(songsActions.setOpenSongIndex(index));
    dispatch(songsActions.showModal());
  };

  const requestAddToFavorites = async (e: any, index: number) => {
    try {
      await db.addToFavorites(foundSongs[index], Date.now());
    } catch (error) {
      console.log(error);
    }
  };

  const requestFindByKeyAndDelete = async (key: string) => {
    try {
      await db.findByKeyAndDelete(key);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreResults = () => {
    dispatch(songsActions.incrementPage());
    dispatch(loadMoreSongs(searchedWord));
  };

  return (
    <>
      <ul>
        {foundSongs.length &&
          foundSongs.map((song, index) => (
            <ListItemWrapper key={`${song.key}-${Math.random()}`}>
              <RowFullLength>
                <SongListItem
                  coverart={song.coverart}
                  title={song.title}
                  artist={song.artist}
                  onClick={(e: React.SyntheticEvent) => openModal(e, index)}
                />
                {findIfLiked(song.key) ? (
                  <HeartButton
                    variant={ButtonVariants.Dislike}
                    onClick={() => requestFindByKeyAndDelete(song.key)}
                  />
                ) : (
                  <HeartButton
                    variant={ButtonVariants.Like}
                    onClick={(e: React.SyntheticEvent) =>
                      requestAddToFavorites(e, index)
                    }
                  />
                )}
                <IconButton onClick={(e) => openModal(e, index)}>
                  <MoreVertIcon
                    sx={{ alignSelf: 'center', color: COLORS.white }}
                  />
                </IconButton>
              </RowFullLength>
              <HorizontalLine />
            </ListItemWrapper>
          ))}
      </ul>
      {foundSongs.length > 0 && offset <= MAX_OFFSET && !isFirstMount && (
        <RowJustifyEnd>
          <Button
            size='medium'
            sx={{ color: 'white' }}
            onClick={loadMoreResults}
          >
            Load More
          </Button>
        </RowJustifyEnd>
      )}
    </>
  );
};

export default SearchResultsList;
