export const KEY = 'recentSearches';

export const getSearchHistory = () => {
  const recentSearches = localStorage.getItem(KEY);
  return recentSearches ? JSON.parse(recentSearches) : undefined;
};
