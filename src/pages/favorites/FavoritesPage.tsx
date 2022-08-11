import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoritesHeader from '../../components/favoritesHeader/FavoritesHeader';
import FavoritesList from '../../components/favoritesList/FavoritesList';

import {
  StyledPageContainer,
  ContentContainer,
  ColumnFullLength,
  StyledLink,
} from '../../styles/sharedStyles';

const FavoritesPage = () => {
  return (
    <StyledPageContainer>
      <StyledLink to={'/'}>
        <HomeIcon />
      </StyledLink>
      <FavoritesHeader />
      <ContentContainer>
        <ColumnFullLength>
          <FavoritesList />
        </ColumnFullLength>
      </ContentContainer>
    </StyledPageContainer>
  );
};
export default FavoritesPage;
