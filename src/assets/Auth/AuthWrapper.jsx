import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [authData, setAuthData] = useState({
    token: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    const isAuthenticated = !!token;

    setAuthData({ token, isAuthenticated });
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuthData({ token, isAuthenticated: true });
  };

  const logout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("posisi");
        localStorage.removeItem("poin");
        localStorage.removeItem("totalBelajar");
        localStorage.removeItem("bergabungSejak");
        localStorage.removeItem("idPhoto");
        setAuthData({ token: "", isAuthenticated: false });
        Swal.fire("Logged Out!", "", "success");
        navigate("/");
      }
    });
  };

  return (
    <AuthContext.Provider value={{ ...authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
