import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CustomLibrary = lazy(
  () => import('../../components/pages/custom.library/custom.library')
);

const Home = lazy(() => import('../pages/character.page/character.page'));

const ErrorPage = lazy(() => import('../pages/error.page/error.page'));

const DetailsPage = lazy(() => import('../pages/details.page/details.page'));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/custom-library"
          element={<CustomLibrary></CustomLibrary>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/details" element={<DetailsPage></DetailsPage>}></Route>
      </Routes>
    </Suspense>
  );
}

//
