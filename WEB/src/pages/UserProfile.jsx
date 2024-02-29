import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { useParams } from "react-router";
import { getCurrentUser } from "../services/UserService";


const UserProfile = () => {
    const { id } = useParams(); 

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser(id)
            .then((user) => {
                setUser(user);
                setLoading(false);
            });
    }
    , [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Profile user={user} />
    );
}

export default UserProfile;