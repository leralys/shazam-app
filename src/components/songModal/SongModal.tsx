import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { songsActions } from '../../store/slices/songsSlice';
import { ILink } from '../../utils/types';
import { Modal, Typography, Box } from '@mui/material';
import PlayPauseButton, {
  PlayButtonVariants,
} from '../playPauseButton/PlayPauseButton';
import { RowFullLength } from '../../styles/sharedStyles';
import {
  sx,
  ModalHeader,
  ModalArtistImg,
  ModalBody,
  ModalTitle,
  AlbumCover,
  LinksBox,
  StyledATag,
  Logo,
} from './styles';

const SongModal = () => {
  const [currAudio, setCurrAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isOpen = useAppSelector((state) => state.songs.showModal);
  const songIndex = useAppSelector((state) => state.songs.openModalIndex);
  const songs = useAppSelector((state) => state.songs.songs);
  const song = songs[songIndex];
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(songsActions.hideModal());
    currAudio && currAudio.pause();
    setIsPlaying(false);
  };

  const handlePlayAudio = (e: React.SyntheticEvent, file: string) => {
    const audio = new Audio(file);
    if (isPlaying) {
      currAudio && currAudio.pause();
      setIsPlaying(false);
    }
    setCurrAudio(audio);
    setIsPlaying(true);
    audio.play();
  };

  const handlePauseAudio = () => {
    currAudio && currAudio.pause();
    setIsPlaying(false);
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box sx={sx}>
        {song && (
          <>
            <ModalHeader>
              <ModalTitle>
                <Typography variant='h3'>{song.title}</Typography>
                <Typography variant='subtitle1' sx={{ mt: 1 }}>
                  {song.artist}
                </Typography>
              </ModalTitle>
              <ModalArtistImg src={song?.artistImage ?? ''} />
            </ModalHeader>
            <ModalBody>
              <AlbumCover src={song.coverart} />
              {!isPlaying ? (
                <PlayPauseButton
                  variant={PlayButtonVariants.Play}
                  onClick={(e: React.SyntheticEvent) =>
                    song.file && handlePlayAudio(e, song.file)
                  }
                />
              ) : (
                <PlayPauseButton
                  variant={PlayButtonVariants.Stop}
                  onClick={handlePauseAudio}
                />
              )}
              <LinksBox>
                {song.links.map((link: ILink) => (
                  <RowFullLength key={link.id}>
                    <Logo id={link.id} />
                    <Typography variant='h4' key={link.uri}>
                      <StyledATag
                        href={link.uri}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {link.caption}
                      </StyledATag>
                    </Typography>
                  </RowFullLength>
                ))}
              </LinksBox>
            </ModalBody>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default SongModal;
