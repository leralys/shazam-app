import React from 'react';
import Typography from '@mui/material/Typography';
import {
  ListItemContent,
  ImageContainer,
  SongImage,
  ResponsiveRowFullLength,
} from './styles';

export interface ISongListItemProps {
  coverart: string;
  title: string;
  artist?: string;
  onClick?: any;
}

const SongListItem = ({
  coverart,
  title,
  artist,
  onClick,
}: ISongListItemProps) => {
  return (
    <ListItemContent>
      <ImageContainer onClick={onClick}>
        <SongImage src={coverart} />
      </ImageContainer>
      <ResponsiveRowFullLength>
        <Typography
          sx={{ width: '50%', mr: 1 }}
          variant='body1'
          onClick={onClick}
        >
          {title}
        </Typography>
        <Typography onClick={onClick} variant='body1'>
          {artist}
        </Typography>
      </ResponsiveRowFullLength>
    </ListItemContent>
  );
};

export default SongListItem;
