import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchSongs, songsActions } from '../../store/slices/songsSlice';
import { InputAdornment, IconButton } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { InputStyled } from './styles';
import { RESPONSES } from '../../utils/types';

export interface IInputProps {
  setRecentSearch: any;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({
  setRecentSearch,
  inputValue,
  setInputValue,
}: IInputProps) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.songs.status);

  useEffect(() => {
    if (status === RESPONSES.Error) {
      setRecentSearch('');
      dispatch(songsActions.setSearchedWord(''));
    }
  }, [status, dispatch, setRecentSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleEnterKeyPress = (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter') {
      dispatch(songsActions.resetPageNum());
      // save to the redux store to be able to load more results
      dispatch(songsActions.setSearchedWord(value));
      // save to the local storage to show on first mount the latest search
      setRecentSearch(value);
      // search
      dispatch(searchSongs(value));
      dispatch(songsActions.setTitle('Results'));
    }
  };
  const clearSearch = () => {
    setInputValue('');
  };
  return (
    <InputStyled
      onChange={handleChange}
      value={inputValue}
      onKeyPress={(e) => handleEnterKeyPress(e, inputValue)}
      disableUnderline
      placeholder='Search'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        inputValue !== '' && (
          <InputAdornment position='end'>
            <IconButton onClick={clearSearch}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        )
      }
    />
  );
};

export default InputSearch;
