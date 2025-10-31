import { useSelector } from "react-redux"
import EditProfile from "../components/EditProfile"

const Profile = () =>{
    const user = useSelector((state) => state.user);
    console.log("user in profile:", user);
    return (
        user && (<div>
            <EditProfile user={user} />
        </div>
        )
    )
}

export default Profile