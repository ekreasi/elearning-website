import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthWrapper";
import Dashboard from "./Dashboard";
import Swal from "sweetalert2";


const ProtectedDashboard = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        // Swal.fire('Please login first!')
        // navigate("/")
    }
    
  return <Dashboard/>
}

export default ProtectedDashboard