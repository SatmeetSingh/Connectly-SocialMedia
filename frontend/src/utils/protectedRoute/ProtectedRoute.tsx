import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');

  return <div>{isLoggedIn === 'true' ? <Outlet /> : <Navigate to="/" />}</div>;
}
