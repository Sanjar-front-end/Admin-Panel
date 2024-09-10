import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: JSX.Element | JSX.Element[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = true;

  if (!token) {
    return <Navigate to="/" replace />
  }

  return children || <Outlet />;
};

export default ProtectedRoute;