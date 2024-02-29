/*import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // URL dell'immagine del profilo predefinita
    const defaultProfileImageUrl = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Nested Living
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
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/houses">
                                Add your house
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link className="nav-link" to="/ordering">
                                Order
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>
                
                <div className="profile-icon-container">
                    <img src={defaultProfileImageUrl} className="profile-icon" alt="Profile" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;*/

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import { logout } from "../stores/AccessTokenStore";
import AuthContext from "../contexts/AuthContext";

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

    // URL dell'immagine del profilo predefinita
    const defaultProfileImageUrl = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg";

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
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Nested Living
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
                            <Link className="nav-link" to="/ordering">
                                Order
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
                {/* Immagine del profilo */}
                <div className="profile-icon-container">
                    <Link className="nav-link" to="/profile">
                    <img src={defaultProfileImageUrl} className="profile-icon" alt="Profile" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
