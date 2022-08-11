import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { searchSongs, songsActions } from '../../store/slices/songsSlice';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { getSearchHistory, KEY } from '../../utils/localStorageHandler';
import Typography from '@mui/material/Typography';
import InputSearch from '../../components/inputSearch/InputSearch';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import SearchResultsList from '../../components/searchResultsList/SearchResultsList';
import SkeletonResults from '../../components/skeletons/SkeletonResults';
import { RESPONSES } from '../../utils/types';
import {
  StyledPageContainer,
  ContentContainer,
  ColumnFullLength,
  RowFullLength,
  ErrorImg,
} from '../../styles/sharedStyles';

const HomePage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  // Similar to useState but first arg is key to the value in local storage.
  const [recentSearch, setRecentSearch] = useLocalStorage<string>(KEY, '');
  const isFirstMount = useAppSelector((state) => state.songs.isFirstMount);
  const status = useAppSelector((state) => state.songs.status);
  const title = useAppSelector((state) => state.songs.title);
  const dispatch = useAppDispatch();

  // initialize localStorage
  useEffect(() => {
    if (!getSearchHistory()) {
      setRecentSearch(recentSearch);
    }
  }, [setRecentSearch]);

  // show the most recent search on the first mount of the app
  useEffect(() => {
    if (isFirstMount) {
      const lastSearch = getSearchHistory();
      if (lastSearch || lastSearch !== '') {
        dispatch(songsActions.setSearchedWord(recentSearch));
        dispatch(searchSongs(recentSearch));
        dispatch(songsActions.setTitle('Last search'));
        setInputValue(recentSearch);
      }
      dispatch(songsActions.setNotIsFirstMount());
    }
  }, [dispatch, isFirstMount]);

  return (
    <StyledPageContainer>
      <HomeHeader />
      <ContentContainer>
        <InputSearch
          setRecentSearch={setRecentSearch}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <ColumnFullLength>
          <RowFullLength>
            {status === RESPONSES.Success && (
              <Typography variant='overline'>{title}</Typography>
            )}
          </RowFullLength>
          <br />
          <br />
          {status === RESPONSES.Loading && <SkeletonResults />}
          {status === RESPONSES.Success && <SearchResultsList />}
          {status === RESPONSES.Error && <ErrorImg />}
        </ColumnFullLength>
      </ContentContainer>
    </StyledPageContainer>
  );
};
export default HomePage;
