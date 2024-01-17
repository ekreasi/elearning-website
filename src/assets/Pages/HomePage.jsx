import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthWrapper";
import Swal from "sweetalert2";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate(`/register`);
  };
  const handleForgot = () => {
    navigate(`/forget`);
  };

  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonStyle, setButtonStyle] = useState({
    background: "rgba(232, 40, 39, 0.3)",
    boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.2)",
    cursor: "not-allowed",
  });

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
          console.log(localStorage);
          navigate("/pDashboard");
        }, 500);
      } else {
        console.log("Username atau password salah");
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  }

  const checkForm = () => {
    setTimeout(() => {
      if (email && password) {
        setButtonStyle({
          background: "rgba(232, 40, 39, 1)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.4)",
          cursor: "pointer",
        });
      } else {
        setButtonStyle({
          background: "rgba(232, 40, 39, 0.3)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.2)",
          cursor: "not-allowed",
        });
      }
    }, 0);
  };

  return (
    <div className="home overflow-hidden">
      <Row>
        <Col xs={6} style={{ backgroundColor: "#E828271A", height: "100vh" }}>
          <div className="justify-content-between h-100 ">
            <img
              src="./assets/image/svg/logo-elearning 1.svg"
              alt=""
              style={{ marginTop: "2rem", marginLeft: "6rem" }}
            />
            <img
              src="./assets/image/svg/img_login_rev 1.svg"
              alt=""
              className="mx-auto d-flex mt-3"
              style={{ display: "inline" }}
            />
          </div>
        </Col>
        <Col xs={6} style={{ backgroundColor: "white" }}>
          <div className="login">
            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "87vh" }}
            >
              <div className="signContainer">
                <p
                  style={{
                    display: "inline",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Don&apos;t have an account?{" "}
                </p>
                <button className="signBtn" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
              <div style={{ marginBottom: "90px" }}>
                <h3 className="welcomeTxt">Welcome Back</h3>
                <p className="signTxt">Please sign in to access your account</p>
                <form action="#" onSubmit={login}>
                  <input
                    className="login-form"
                    type="text"
                    placeholder="Email or Phone Number"
                    style={{
                      background: `url('./assets/image/svg/ic-login-user.svg') no-repeat 16px center`,
                      paddingLeft: "45px",
                      backgroundColor: "#F5F6F8",
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onInput={checkForm}
                  />

                  <input
                    className="login-form"
                    type="password"
                    placeholder="Password"
                    style={{
                      background: `url('./assets/image/svg/ic-login-password.svg') no-repeat 12px center, url('ShowPassIcon.svg') no-repeat right 12px center`,
                      backgroundColor: "#F5F6F8",
                      paddingLeft: "45px",
                      border: "none",
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onInput={checkForm}
                  />
                  <a onClick={handleForgot} className="forgotTxt">
                    Forgot Password?
                  </a>
                  <button className="loginBtn" style={buttonStyle}>
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="d-flex">
              <p className="homeCopy">
                Copyright &copy; 2024 Indocyber Global Teknologi
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
