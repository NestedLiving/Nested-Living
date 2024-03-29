import { useContext, useEffect, useState } from "react";
import HouseCard from "./HouseCard"; // Importa il componente HouseCard
import { getMyHouses } from "../services/HouseService";
import "./Profile.css";
import Avatar from "../components/Avatar";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getMyHouses()
            .then((houses) => setHouses(houses))
            .catch((error) => console.error(error));
    }, []);

    if (user.role === "admin") {
        return (<Navigate to="/admin/dashboard" />);
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-header-info">
                    <h2 className="profile-title">Welcome, {user?.username}!</h2>
                    <p className="profile-email">{user?.email}</p>
                </div>
                <div className="profile-header-image">
                    <Avatar avatar={user?.avatar} />
                </div>
            </div>
            <div className="houses-container">
                <h3 className="houses-title">My Houses</h3>
                <div className="house-cards">
                    {houses.map((house) => (
                        <HouseCard key={house.id} {...house} /> // Usa il componente HouseCard
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
