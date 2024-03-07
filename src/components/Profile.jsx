import { useContext, useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import { getMyHouses } from "../services/HouseService";
import "./Profile.css";
import Avatar from "../components/Avatar";
import AuthContext from "../contexts/AuthContext";



const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getMyHouses()
            .then((houses) => setHouses(houses))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="profile-container mt-4">
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
                        <HouseCard key={house.id} {...house} />
                    ))}
                </div>
            </div>
        </div>
    );
    };
export default Profile;