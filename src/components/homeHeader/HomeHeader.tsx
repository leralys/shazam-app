import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { greetUser } from '../../utils/greetUser';
import COLORS from '../../utils/colors';
import BREAKPOINTS from '../../utils/breakpoints';
import { HomeHeaderContainer, StyledLink } from './styles';

const HomeHeader = () => {
  const [greeting, setGreeting] = useState<string>('');
  const mobile = useMediaQuery(`(max-width:${BREAKPOINTS.small}px)`);

  useEffect(() => {
    const now = new Date();
    const greeting = greetUser(now);
    setGreeting(greeting);
  }, []);

  return (
    <HomeHeaderContainer>
      <Typography variant='h4' component='h1' noWrap>
        Good {greeting}!
      </Typography>
      <StyledLink to={'/favorites'}>
        <Typography
          variant='h5'
          component='span'
          noWrap
          sx={{ borderBottom: `1px solid ${COLORS.white}` }}
        >
          Favorites
        </Typography>
        <FavoriteBorderIcon
          fontSize={mobile ? 'medium' : 'large'}
          sx={{ color: COLORS.white, ml: 2 }}
        />
      </StyledLink>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
