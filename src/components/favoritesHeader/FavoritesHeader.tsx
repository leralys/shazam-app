import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';
import Typography from '@mui/material/Typography';
import {
  FavoritesHeaderContainer,
  HeartBox,
  BigHeartIcon,
  FavoritesTextContainer,
} from './styles';

const FavoritesHeader = () => {
  const songCount = useLiveQuery(() => db.songs.count());
  if (songCount === undefined) return null; //Still loading

  return (
    <FavoritesHeaderContainer>
      <HeartBox>
        <BigHeartIcon />
      </HeartBox>
      <FavoritesTextContainer>
        <Typography variant='h4' component='h1' noWrap>
          Liked Songs
        </Typography>
        <Typography variant='subtitle1' noWrap>
          {songCount + ' songs'}
        </Typography>
      </FavoritesTextContainer>
    </FavoritesHeaderContainer>
  );
};

export default FavoritesHeader;
