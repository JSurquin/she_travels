import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@pages/notfound/NotFound';
import Home from '@pages/home/Home';
import PropTypes from 'prop-types';

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

Router.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};

export default Router;
