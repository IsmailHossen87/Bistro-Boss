import { useContext } from "react";
import { Authcontext } from "../Components/Provider/AuthProvider";


const UseAuth = () => {
    const auth= useContext(Authcontext)
    return auth;
};

export default UseAuth;