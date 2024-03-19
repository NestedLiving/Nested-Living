import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentUser } from "../services/UserService";
import { useLocation } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const { pathname } = useLocation();
    const [user, setUser] = useState(null);
    const [isAuthFetched, setIsAuthFetched] = useState(false);

    const fetchCurrentUser = useCallback((callback) => {
        getCurrentUser()
            .then(user => {
                setUser(user)
                setIsAuthFetched(true)
                callback && callback()
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const login = useCallback((token, callback) => {
        setAccessToken(token)
        fetchCurrentUser(callback)
    }, [fetchCurrentUser])

    useEffect(() => {
        if (getAccessToken()) {
            fetchCurrentUser()
        } else {
            if (pathname !== '/login') {
                setIsAuthFetched(true);
            } else {
                setIsAuthFetched(false);
            }
        }
    }, [fetchCurrentUser, pathname])





    const contextValue = useMemo(() => ({
        isAuthFetched,
        user,
        login,
    }), [isAuthFetched, user, login]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}