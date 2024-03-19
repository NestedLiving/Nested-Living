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
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const ProtectedRoute = ({ children, role }) => {
    const { isAuthFetched, user } = useContext(AuthContext);

    if (!isAuthFetched) {
        return (<p>Loading...</p>);
    }

    if (!user || (role && user.role !== role)) {
        return (<Navigate to="/login" replace />);
    }

    return children;
}

export default ProtectedRoute;
