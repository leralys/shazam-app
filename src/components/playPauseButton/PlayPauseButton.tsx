import React from 'react';
import { Typography, IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { buttonSx } from './styles';

export enum PlayButtonVariants {
  Stop = 'STOP',
  Play = 'PLAY',
}
export interface IHeartButtonProps {
  variant: PlayButtonVariants.Stop | PlayButtonVariants.Play;
  onClick: any;
}

const PlayPauseButton = ({ variant, onClick }: IHeartButtonProps) => {
  return (
    <IconButton onClick={onClick} sx={buttonSx}>
      {variant === PlayButtonVariants.Play ? (
        <>
          <PlayCircleIcon fontSize='large' />
          <Typography>{PlayButtonVariants.Play}</Typography>
        </>
      ) : (
        <>
          <StopCircleIcon fontSize='large' />
          <Typography>{PlayButtonVariants.Stop}</Typography>
        </>
      )}
    </IconButton>
  );
};

export default PlayPauseButton;
