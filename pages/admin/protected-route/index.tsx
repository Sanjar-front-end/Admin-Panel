import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: JSX.Element | JSX.Element[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;