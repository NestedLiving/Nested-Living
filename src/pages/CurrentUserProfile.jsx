import Profile from "../components/Profile";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const CurrentUserProfile = () => {
    const { user } = useContext(AuthContext);

    console.log('in')

    return (
        <Profile user={user} />
    );
}

export default CurrentUserProfile;