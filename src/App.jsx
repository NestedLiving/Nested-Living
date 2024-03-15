import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from "./components/Footer"
import House from './pages/House';
import OrderingsPage from './pages/OrderingsPage';
import UserProfile from './pages/UserProfile';
import HouseDetail from './pages/HouseDetail';
import Map from './components/Map';
import Activation from './pages/Activation';
import EditHouse from './pages/EditHouse';
import AdminPage from './pages/AdminPage';
import UserListPage from './pages/UserListPage';




function App() {

    const location = useLocation();
    const isAdminDashboard = location.pathname === '/admin/dashboard';
    const isAdminUsers = location.pathname === '/admin/dashboard/users';

    return (
        <div>
           {!isAdminDashboard && !isAdminUsers && <Navbar />}

            {/* {!isAdminDashboard && <SearchBar />} */}

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/houses" element={<House />} />
                    <Route path="/ordering" element={<OrderingsPage />} />
                    <Route path="/profile" element={<UserProfile />  }/>
                    <Route path="/users/:id" element={<UserProfile />} />
                    <Route path="/houses/:id" element={<HouseDetail />} />
                    <Route path='/maps' element={<Map/>} />
                    <Route path="/activate/:token" element={<Activation />} />
                    <Route path="/houses/:id/edit" element={<EditHouse />} />
                    <Route path="/admin/dashboard" element={<AdminPage />} />
                    <Route path="/admin/dashboard/users" element={<UserListPage />} />
                </Routes>
            </div>
            {!isAdminDashboard && !isAdminUsers &&<Footer />}
        </div>
    )
}


export default App