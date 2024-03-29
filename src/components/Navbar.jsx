import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import { logout } from "../stores/AccessTokenStore";
import AuthContext from "../contexts/AuthContext";
import Avatar from "./Avatar";
import logo2 from "../assets/logo3.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const {user, isAuthFetched} = useContext(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        logout();
    };

    
    

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${scrollY > 0 ? "scrolled" : ""}`}>
            <div className="container ">
                <Link className="navbar-brand" to="/">
                    <img src={logo2} alt="" className="navbar-logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <motion.div
                    className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {isAuthFetched && user ? (
                        <>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleLogout}>
                            <Link className="nav-link" to="/login">
                                Logout
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/houses">
                                Add your house
                            </Link>
                        </motion.li>
                                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <Link className="nav-link" to="/likes">
                                        WishList
                                    </Link>
                                </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/profile">
                                {user.username}
                            </Link>
                        </motion.li>
                        </>
                        ) : (
                        <>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </motion.li>
                        </>
                        )}
                    </ul>
                </motion.div>
                {user ? (
                    <div className="profile-icon-container">
                        <Link className="nav-link" to="/profile">
                            <Avatar avatar={user.avatar} />
                        </Link>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
