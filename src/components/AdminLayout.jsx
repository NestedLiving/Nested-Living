import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import './AdminLayout.css'; // Aggiungi lo stile per il layout

const AdminLayout = ({ children }) => {
    const handleLogout = () => {
        // La tua logica per il logout
    };

    return (
        <div className="admin-page">
            <nav className="admin-sidebar">
                <div className="admin-brand">
                    <h2>Admin Panel</h2>
                </div>
                <ul className="admin-nav-links">
                    <li>
                        <Link to="/admin/dashboard">
                            <FaHome /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/houses">
                            <FaChartBar /> Houses
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/users">
                            <IoMdPeople /> Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/settings">
                            <FaCog /> Settings
                        </Link>
                    </li>
                </ul>
                <div className="admin-logout" onClick={handleLogout}>
                    <Link to="/login">
                        <FaSignOutAlt /> Logout
                    </Link>
                </div>
            </nav>
            <main className="admin-content">{children}</main>
        </div>
    );
};

export default AdminLayout;
