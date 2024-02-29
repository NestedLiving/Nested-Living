import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const ProtectedRoute = ({children }) => {
    const {isAuthFetched, user } = useContext(AuthContext);

    if (!isAuthFetched) {
        return (<p> Loading...</p>);
    }

    if (!user) {
        return (<Navigate to="/login" />);
    }

    return children;
}

export default ProtectedRoute;