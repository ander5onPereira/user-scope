import { Route, Routes } from 'react-router-dom';
import { QueryProvider } from './context/QueryContext';

import { useAxiosErrorHandler } from './hooks/useAxiosErrorHandler';
import { CharacterProvider } from './context/character/CharacterContext';
import { UserList } from './pages/UserList';
import { FavoriteProvider } from './context/favorite/FavoriteContext';
import { UserPage } from './pages/User';

const AppRoutes = () => {
  useAxiosErrorHandler();
  return (
    <QueryProvider>
      <Routes>
        <Route
          path='/:id'
          element={
            <CharacterProvider>
              <UserPage />
            </CharacterProvider>
          }
        />
        <Route
          path='/'
          element={
            <CharacterProvider>
              <FavoriteProvider>
                <UserList />
              </FavoriteProvider>
            </CharacterProvider>
          }
        />
      </Routes>
    </QueryProvider>
  );
};
export default AppRoutes;
