import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterPage from '../pages/character.page/character.page';

const CustomLibrary = lazy(
  () => import('../../components/pages/custom.library/custom.library')
);

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<CharacterPage></CharacterPage>}></Route>
        <Route
          path="/custom-library"
          element={<CustomLibrary></CustomLibrary>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
