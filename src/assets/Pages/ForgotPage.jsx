import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthWrapper";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate(`/register`);
  };

  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [loadingForgot, setLoadingForgot] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    background: "rgba(232, 40, 39, 0.3)",
    boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
    cursor: "not-allowed",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pDashboard");
      Swal.fire("Welcome Back!");
    }
  }, [isAuthenticated, navigate]);

  const handleConfirm = async (e) => {
    setLoadingForgot(true)
    e.preventDefault();

    try {
      const response = await fetch(
        "http://130.211.243.37/api/auth/register/check-instance-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: email }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok && data?.metaData?.code === 200) {
        navigate("/newPasswordPage");
      } else {
        Swal.fire(data?.message || "Code not found !");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkForm = () => {
    setTimeout(() => {
      if (email) {
        setLoadingForgot(false); 
        setButtonStyle({
          background: "rgba(232, 40, 39, 1)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.2)",
          cursor: "pointer",
        });
      } else {
        setLoadingForgot(false); 
        setButtonStyle({
          background: "rgba(232, 40, 39, 0.3)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
          cursor: "not-allowed",
        });
      }
    }, 0);
  };

  return (
    <div className="home">
      <Row>
        <Col
          md={6}
          className="d-none d-md-block"
          style={{ backgroundColor: "#E828271A", height: "100vh" }}
        >
          <div className="justify-content-between h-100">
            <img
              src="./assets/image/svg/logo-elearning 1.svg"
              alt=""
              style={{ marginTop: "2rem", marginLeft: "6rem" }}
            />
            <img
              src="./assets/image/svg/img_forgot password 1.svg"
              alt=""
              className="mx-auto d-flex mt-3"
            />
          </div>
        </Col>

        {/* <Col xs={6} style={{ backgroundColor: "white", height: "96.8vh"}}>
          <div className="login">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="signContainer">
                <p
                  style={{
                    display: "inline",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Already have an account ?{" "}
                </p>
                <button className="signBtn" onClick={handleSignIn}>
                  Sign In
                </button>
              </div>
              <div style={{ marginBottom: "196.5px", marginTop: "100px"}}>
                <h3 className="registerTxt">Registration New Account</h3>
                <p className="signTxt mb-5">
                  Please submit the registration code
                </p>
                <form action="#" onSubmit={handleConfirm}>
                  <input
                    className="login-form mb-4"
                    type="text"
                    placeholder="Registration code"
                    style={{
                      background: `url('ic-register-referral.svg') no-repeat 12px center`,
                      backgroundColor: "#F5F6F8",
                      paddingLeft: "45px",
                    }}
                    onChange={(e) => {
                      setRef(e.target.value);
                    }}
                    onInput={checkForm}
                  />
                  <button className="loginBtn" style={buttonStyle}>
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div className="d-flex">
              <p
                className="mx-auto homeCopy"
              >
                Copyright &copy; 2022 Indocyber Global Teknologi
              </p>
            </div>
          </div>
        </Col> */}

        <Col md={6} style={{ backgroundColor: "white", height: "96.8vh" }}>
          <div className="login">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="signContainer">
                <p
                  style={{
                    display: "inline",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Don&apos;t have an account ?{" "}
                </p>
                <button className="signBtn" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>

              <div
                className=""
                style={{ marginBottom: "196.5px", marginTop: "100px" }}
              >
                <h3 className="registerTxt">Forgot Password</h3>
                <p className="signTxt mb-5">
                  Please input field below for reset the password
                </p>
                <form action="#" onSubmit={handleConfirm}>
                  <input
                    className="login-form mb-3"
                    type="text"
                    placeholder="email or phone number"
                    style={{
                      background: `url('./assets/image/svg/akeong.svg') no-repeat 16px center`,
                      paddingLeft: "45px",
                      backgroundColor: "#F5F6F8",
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onInput={checkForm}
                  />

                  <Link to={"/"} className="forgotTxt">
                    Back to Login?
                  </Link>

                  <button
                    className="loginBtn"
                    disabled={loadingForgot === true}
                    style={{
                      ...buttonStyle,
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Send
                    {loadingForgot === true && <Spinner size="sm"/>}
                  </button>
                </form>
              </div>

              <p className="mx-auto"></p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
