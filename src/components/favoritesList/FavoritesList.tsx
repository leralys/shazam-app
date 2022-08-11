import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';

import { deleteFromFavorites } from '../../db/handler';
import { IFavoriteSongsTable } from '../../db/db';
import { formatDate } from '../../utils/formatDate';
import { Typography, IconButton } from '@mui/material';
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
import COLORS from '../../utils/colors';

const FavoritesList = () => {
  const songs = useLiveQuery(() => db.songs.reverse().toArray());
  if (!songs) return null; // Still loading

  const requestDeleteFromFavorites = (
    e: React.SyntheticEvent,
    id: number | undefined
  ) => {
    if (id) {
      try {
        deleteFromFavorites(id);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ul>
      {songs.map((song: IFavoriteSongsTable) => (
        <ListItemWrapper key={song.key}>
          <RowFullLength>
            <SongListItem
              coverart={song.coverart}
              title={song.title}
              artist={song.artist}
            />
            <Typography
              variant='body2'
              sx={{ alignSelf: 'center', mr: 1.5, ml: 3 }}
            >
              {formatDate(song.timestamp)}
            </Typography>
            <HeartButton
              variant={ButtonVariants.Dislike}
              onClick={(e: React.SyntheticEvent) =>
                requestDeleteFromFavorites(e, song.id)
              }
            />
            <IconButton>
              <MoreVertIcon sx={{ alignSelf: 'center', color: COLORS.white }} />
            </IconButton>
          </RowFullLength>
          <HorizontalLine />
        </ListItemWrapper>
      ))}
    </ul>
  );
};

export default FavoritesList;
