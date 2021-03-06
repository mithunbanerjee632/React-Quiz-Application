import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Navigate to="/login" />
  );
}
