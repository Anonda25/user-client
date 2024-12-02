import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {
    const {name}= useContext(AuthContext)
    return (
        <div>
            home{name}
        </div>
    );
};

export default Home;