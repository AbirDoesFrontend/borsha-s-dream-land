import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <progress className="progress progress-error w-56"></progress>
    }

    if(user) {
        return children;
    }

    if(!user){
        Swal.fire("Please login first")
    }

    return <Navigate state={{ from : location }} to='/login' replace/>;

};

export default PrivateRoute;