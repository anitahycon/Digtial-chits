import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouter = ({ component: Component }) => {
  let location = useLocation();
  const [isAuth, setAuth] = useState(true);
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return <Component />;
  }
};
export default ProtectedRouter;
