import { useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import { getHouse } from "../services/HouseService";
import "./Profile.css";



const Profile = ({ user, profileImage }) => {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouse()
            .then((houses) => {
                setHouses(houses);
            });
    }, []);

    const defaultProfileImage = 'https://via.placeholder.com/150';
    return (
        <div className="profile-container mt-4">
            <div className="profile-header">
                <div className="profile-header-info">
                    <h2 className="profile-title">Welcome, {user.username}!</h2>
                    <p className="profile-email">{user.email}</p>
                </div>
                <div className="profile-header-image">
                    <img src={profileImage || defaultProfileImage} alt="Profile" />
                </div>
            </div>
            <div className="houses-container">
                <h3 className="houses-title">My Houses</h3>
                <div className="house-cards">
                    {houses.map((house) => (
                        <HouseCard key={house.id} {...house} />
                    ))}
                </div>
            </div>
        </div>
    );
    };
export default Profile;