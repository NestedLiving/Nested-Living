// UserListPage.js
/*import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/UserService';
import AdminLayout from '../components/AdminLayout'
import '../components/UserListPage.css';
const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <AdminLayout>
            <div className="user-list-container">
                <h1>User List</h1>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`status-dot ${user.isActive ? 'active' : 'inactive'}`}></span>
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};
export default UserListPage;*/

import { useState, useEffect } from 'react';
import { deleteUser } from '../services/UserService';
import { getAllUsers } from '../services/UserService';
import AdminLayout from '../components/AdminLayout';
import '../components/UserListPage.css';

const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this user?');
            if (!confirmed) return;

            await deleteUser(id); // Elimina l'utente

            // Rimuovi l'utente dalla lista
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <AdminLayout>
            <div className="user-list-container">
                <h1>User List</h1>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`status-dot ${user.isActive ? 'active' : 'inactive'}`}></span>
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default UserListPage;



