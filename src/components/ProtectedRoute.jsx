/*import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const ProtectedRoute = ({children }) => {
    const {isAuthFetched, user } = useContext(AuthContext);

    if (!isAuthFetched) {
        return (<p> Loading...</p>);
    }

    if (user.role === "admin") {
        return (<Navigate to="/login" />);
    }

    if (!user) {
        return (<Navigate to="/login" />);
    }

    

    return children;
}

export default ProtectedRoute;*/

import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthFetched, user } = useContext(AuthContext);
    const location = useLocation();

    if (!isAuthFetched) {
        return (<p>Loading...</p>);
    }

    if (!user) {
        return (<Navigate to="/login" replace />);
    }

    if (user.role !== "admin") {
        return (<Navigate to={location.pathname} />);
    }

    return children;
}

export default ProtectedRoute;
