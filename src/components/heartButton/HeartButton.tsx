import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import COLORS from '../../utils/colors';

export enum ButtonVariants {
  Like = 'like',
  Dislike = 'dislike',
}
export interface IHeartButtonProps {
  variant: ButtonVariants.Like | ButtonVariants.Dislike;
  onClick: any;
}

const HeartButton = ({ variant, onClick }: IHeartButtonProps) => {
  return (
    <IconButton sx={{ color: COLORS.red }} onClick={onClick}>
      {variant === ButtonVariants.Like ? (
        <FavoriteBorderIcon />
      ) : (
        <FavoriteIcon />
      )}
    </IconButton>
  );
};

export default HeartButton;
