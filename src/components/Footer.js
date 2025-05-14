import { useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <div className=" flex justify-center">
            <p>Made with ❣️ by {user.name}!</p>
        </div>
    )
}

export default Footer;
