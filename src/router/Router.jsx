import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@pages/notfound/NotFound';
import Home from '@pages/home/Home';

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" replace element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
