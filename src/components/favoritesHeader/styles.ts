import styled from 'styled-components';
import {
  ContainerContentCentered,
  FlexRow,
  FlexColumn,
} from '../../styles/sharedStyles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BREAKPOINTS from '../../utils/breakpoints';
import COLORS from '../../utils/colors';

export const FavoritesHeaderContainer = styled.header`
  ${FlexRow};
  width: 100%;
  height: 12.5rem;
  padding: 0 2rem 1rem;
  align-items: flex-end;
  margin-top: 2rem;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    padding: 0.5rem 0;
    height: 8rem;
  }
`;

export const HeartBox = styled(ContainerContentCentered)`
  height: max(12.5vw, 9rem);
  max-height: 10.5rem;
  width: max(12.5vw, 9rem);
  max-width: 10.5rem;
  background: rgb(78, 53, 143);
  background: radial-gradient(
    circle,
    ${COLORS.lightPurple} 0%,
    ${COLORS.darkPurple} 100%
  );
  box-shadow: 0px 12px 17px 2px black, 0px 5px 22px 4px black,
    0px 7px 8px -4px black;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    height: 5.8rem;
    width: 5.8rem;
  }
`;

export const BigHeartIcon = styled(FavoriteBorderIcon)`
  font-size: 6.25rem !important;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    font-size: 4rem !important;
  }
`;

export const FavoritesTextContainer = styled.div`
  ${FlexColumn};
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  margin-inline: 1rem;
`;
