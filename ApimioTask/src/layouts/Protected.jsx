import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser";

const Protected = () => {
  const user = useUser();
  const location = useLocation();

  return (
    Object.keys(user).length !== 0
      ? <Outlet />
      : <Navigate to="/" state={{ from: location }} replace />
  );
}

export default Protected;