import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchBar from './components/SearchBar';
import Footer from "./components/Footer"
import House from './pages/House';
import OrderingsPage from './pages/OrderingsPage';
import UserProfile from './pages/UserProfile';
import HouseDetail from './pages/HouseDetail';

function App() {
    return (
        <div>
            <Navbar />

            <SearchBar />

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/houses" element={<House />} />
                    <Route path="/ordering" element={<OrderingsPage />} />
                    <Route path="/profile" element={<UserProfile />}/>
                    <Route path="/users/:id" element={<UserProfile />} />
                    <Route path="/houses/:id" element={<HouseDetail />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}


export default App