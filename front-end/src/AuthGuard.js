import { loginStatus } from 'slice/authSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isTokenChecking = useSelector((state) => state.auth.isTokenChecking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginStatus());
  }, [isLoggedIn]);

  if (isTokenChecking) {
    return <h1>loading</h1>;
  } else {
    if (isLoggedIn) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default AuthGuard;
