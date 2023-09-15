import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/sharedLayout/sharedLayout';
const Cars = lazy(() => import('../pages/Cars/Cars'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const Home = lazy(() => import('../pages/Home/Home'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Cars />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

 export default App;
