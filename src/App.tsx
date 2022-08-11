import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/sharedStyles';
import BasicModal from './components/songModal/SongModal';
import './css/index.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      <BasicModal />
    </ThemeProvider>
  );
};

export default App;
