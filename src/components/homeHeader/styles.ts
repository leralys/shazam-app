import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexRow } from '../../styles/sharedStyles';
import BREAKPOINTS from '../../utils/breakpoints';
import COLORS from '../../utils/colors';

export const HomeHeaderContainer = styled.header`
  ${FlexRow};
  width: 100%;
  height: 8.25rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem 0;
  position: fixed;
  z-index: 10;
  background: ${COLORS.darkPurple};
  background: linear-gradient(
    180deg,
    ${COLORS.lightPurple} 0%,
    ${COLORS.darkPurple} 100%
  );

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    height: 10rem;
    padding-inline: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  ${FlexRow};
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  min-width: min(20%, 11.25rem);
  flex-wrap: nowrap;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    align-self: flex-end;
  }
`;
