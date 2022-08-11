import styled from 'styled-components';
import { RowFullLength, FlexColumn } from '../../styles/sharedStyles';
import COLORS from '../../utils/colors';
import iconAppleMusic from '../../assets/iconAppleMusic.png';
import iconShazam from '../../assets/iconShazam.png';
import iconSpotify from '../../assets/iconSpotify.png';

export const sx = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  height: '60vh',
  bgcolor: `${COLORS.white}`,
  boxShadow: 24,
  borderRadius: '0.25rem',
};

export const ModalHeader = styled(RowFullLength)`
  justify-content: flex-end;
  z-index: 1;
  height: 50%;
  background: ${COLORS.darkGrey};
  background: linear-gradient(
    90deg,
    rgba(76, 78, 82, 1) 0%,
    rgba(144, 144, 144, 1) 75%,
    rgba(76, 78, 82, 0.40242034313725494) 100%
  );
  border-radius: inherit;
`;

export const ModalArtistImg = styled.img`
  z-index: -1;
`;

export const ModalTitle = styled.div`
  ${FlexColumn};
  height: 100%;
  width: 70%;
  justify-content: center;
  padding-left: 1rem;
`;

export const ModalBody = styled(RowFullLength)`
  background: ${COLORS.white};
  height: 50%;
  border-radius: inherit;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const AlbumCover = styled.img`
  height: 90%;
  width: auto;
`;

export const LinksBox = styled.div`
  ${FlexColumn};
  width: 60%;
  margin-left: 1.5rem;
  height: 100%;
  justify-content: space-evenly;
`;

export const StyledATag = styled.a`
  color: ${COLORS.darkPurple};
  border-bottom: 1px solid;
  &:hover {
    color: ${COLORS.lightPurple};
    border-bottom: none;
  }
`;
export const Logo = styled.img<{ id: string }>`
  content: url(${({ id }) =>
    id === 'SPOTIFY'
      ? iconSpotify
      : id === 'SHAZAM'
      ? iconShazam
      : iconAppleMusic});
  margin-right: 1rem;
`;
