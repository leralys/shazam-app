import styled from 'styled-components';
import { Input } from '@mui/material';
import COLORS from '../../utils/colors';
import BREAKPOINTS from '../../utils/breakpoints';

export const InputStyled = styled(Input)`
  border-radius: 2rem;
  padding: 0.5rem 0.8rem;
  background: ${COLORS.white};
  margin-block: 2rem;
  width: 75%;
  align-self: center;

  @media only screen and (min-width: ${BREAKPOINTS.laptopL}px) {
    width: 60%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.tabletS}px) {
    width: 100% !important;
  }
  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    padding-block: 0.4rem;
  }
`;
