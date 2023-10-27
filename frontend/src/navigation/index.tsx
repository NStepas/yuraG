import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../constants/routes';
import { Login } from '../pages/Auth/Login/Login';

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path={SIGNUP_ROUTE} /> */}
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route element={<PrivateRoute isAuth={true} />}></Route>
      </Routes>
    </Router>
  );
};
