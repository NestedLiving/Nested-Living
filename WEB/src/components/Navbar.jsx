/*import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Nested Living</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/houses">Add your house</Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;*/

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            </div>
        </nav>
    );
};

export default Navbar;
