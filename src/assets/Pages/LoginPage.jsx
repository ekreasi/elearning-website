import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar/Nav";
import { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthWrapper";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pDashboard");
      Swal.fire("Welcome Back!");
    }
  }, [isAuthenticated, navigate]);

  async function login(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://130.211.243.37/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log("API Response", response);

      if (response.ok) {
        const data = await response.json();
        const token = data.data.access_token;
        const email = data.data.user.email;
        const username = data.data.user.name;
        const posisi = data.data.user.posisi;
        const poin = data.data.user.poin;
        const totalBelajar = data.data.user.totalSesiBelajar;
        const bergabungSejak = data.data.user.bergabungSejak;
        const idPhoto = data.data.user.idPhoto;

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        localStorage.setItem("posisi", posisi);
        localStorage.setItem("poin", poin);
        localStorage.setItem("totalBelajar", totalBelajar);
        localStorage.setItem("bergabungSejak", bergabungSejak);
        localStorage.setItem("idPhoto", idPhoto);

        setTimeout(() => {
          console.log(localStorage)
          navigate("/pDashboard");
        }, 500); 
      } else {
        console.log("Username atau password salah");
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  }

  return (
    <Container fluid="md" className="content" id="verification">
      {/* <Navbar to="register" header="Welcome Back" headerText="Sign Up" /> */}
      <p className="">Sign in to continue</p>
      <Row>
        <Col>
          <form onSubmit={login}>
            <input
              className="login-form"
              type="text"
              placeholder="&#128100;  Email or Phone Number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login-form"
              placeholder="&#128274;  Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="forget" id="forgot">
              Forgot Password ?{" "}
            </a>
            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
