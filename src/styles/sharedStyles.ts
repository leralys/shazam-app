import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import COLORS from '../../src/utils/colors';
import BREAKPOINTS from '../utils/breakpoints';
import somethingWentWrong from '../assets/somethingWentWrong.gif';

// mui overwrites and responsive components
export const theme = createTheme({
  typography: {
    h4: {
      '@media (max-width: 425px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      '@media (max-width: 768px)': {
        fontSize: '1.2rem',
      },
    },
    body1: {
      '&:hover': {
        color: '#4e358f',
      },
      cursor: 'pointer',
      '@media (max-width: 1024px)': {
        width: '65%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  },
});

// strings for more flexibility
export const FlexColumn = `
display: flex;
flex-direction: column;
`;

export const FlexRow = `
display: flex;
flex-direction: row;
`;

// shared styled components
export const ContainerContentCentered = styled.div`
  ${FlexColumn};
  align-items: center;
  justify-content: center;
`;

export const StyledPageContainer = styled.main`
  ${FlexColumn};
  width: 100%;
  min-height: 100vh;
  max-height: -webkit-fill-available;
  background: ${COLORS.darkPurple};
  padding: 0 2rem 2rem;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    padding-inline: 1rem;
  }
`;

export const ContentContainer = styled.div`
  ${FlexColumn};
  width: 80%;
  margin-top: 9.25rem;

  @media only screen and (max-width: ${BREAKPOINTS.laptopM}px) {
    width: 90%;
  }

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    width: 100%;
  }
`;

export const ColumnFullLength = styled.div`
  ${FlexColumn};
  width: 100%;
`;

export const RowFullLength = styled.div`
  ${FlexRow};
  width: 100%;
`;

export const ListItemWrapper = styled.div`
  ${FlexColumn};
  width: 100%;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  ${FlexRow};
  position: fixed;
  padding-top: 2rem;
  right: 2rem;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  background: ${COLORS.darkPurple};
  z-index: 10;
  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    right: 1rem;
  }
`;

export const HorizontalLine = styled.div`
  width: 93%;
  height: 1px;
  background: ${COLORS.lightGrey};
  align-self: center;
  margin-top: 1rem;
`;

export const ErrorImg = styled.img`
  content: url(${somethingWentWrong});
  width: min(18.75rem, 90%);
  height: auto;
  align-self: center;
`;
