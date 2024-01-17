import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthWrapper";
import Swal from "sweetalert2";
import "./ContinueRegister.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const { isAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(false);
  const [isPasswordContainNumber, setIsPasswordContainNumber] = useState(false);
  const [isPasswordHaveCapital, setIsPasswordHaveCapital] = useState(false);
  const [isPasswordHaveSpecial, setIsPasswordHaveSpecial] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserData = {
      name: name,
      email: email,
      password: password,
    };

    if (name && password && email && isTermsChecked) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://130.211.243.37/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newUserData),
          }
        );
        if (response.ok) {
          navigate("/forgetVerification");
        } else {
          console.error("All fields must be filled");
          console.error("Couldn't register");
        }
      } catch (error) {
        console.error("Couldn't register:", error);
        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response text:", await error.response.text());
        }
      }
    }
  };

  useEffect(() => {
    checkForm();
  }, [name, email, password, isTermsChecked]);

  const checkForm = () => {
    if (name && email) {
      if (
        password &&
        isPasswordLengthValid &&
        isPasswordContainNumber &&
        isPasswordHaveCapital &&
        isPasswordHaveSpecial
      ) {
        setButtonStyle({
          background: "rgba(232, 40, 39, 1)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 1)",
          cursor: "pointer",
        });
      } else {
        setButtonStyle({
          background: "rgba(232, 40, 39, 0.3)",
          boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
          cursor: "not-allowed",
        });
      }
    } else {
      setButtonStyle({
        background: "rgba(232, 40, 39, 0.3)",
        boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
        cursor: "not-allowed",
      });
    }
  };

  const checkPasswordLength = (value) => {
    if (value.length >= 8) {
      setIsPasswordLengthValid(true);
    } else {
      setIsPasswordLengthValid(false);
    }
  };

  const checkPasswordContainNumber = (value) => {
    const numberRegex = /\d/;
    setIsPasswordContainNumber(numberRegex.test(value));
  };

  const checkPasswordContainCapital = (value) => {
    const capitalRegex = /[A-Z]/;
    setIsPasswordHaveCapital(capitalRegex.test(value));
  };

  const checkPasswordContainSpecial = (value) => {
    const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;
    setIsPasswordHaveSpecial(specialRegex.test(value));
  };

  return (
    <div className="home">
      <Row>
        <Col xs={6} style={{ backgroundColor: "#E828271A", height: "100vh" }}>
          <div className="justify-content-between h-100">
            <img
              src="./assets/image/svg/logo-elearning 1.svg"
              alt=""
              style={{ marginTop: "2rem", marginLeft: "6rem" }}
            />
            <img
              src="./assets/image/svg/img_sign up 3.svg"
              alt=""
              className="mx-auto d-flex mt-3"
            />
          </div>
        </Col>
        <Col xs={6} style={{ backgroundColor: "white" }}>
          <div className="login">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="">
                <h3 className="registerTxt">Jakarta International School</h3>
                <p className="signTxt mb-4">Register New Account</p>
                <form action="#" onSubmit={handleSubmit}>
                  <input
                    className="login-form mb-3"
                    type="text"
                    placeholder="Full name"
                    style={{
                      background: `url('./assets/image/svg/ic-login-user.svg') no-repeat 16px center`,
                      paddingLeft: "45px",
                      backgroundColor: "#F5F6F8",
                    }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onInput={checkForm}
                  />
                  <input
                    className="login-form mb-3"
                    type="email"
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
                  <input
                    className="login-form mb-3"
                    type="password"
                    placeholder="password"
                    style={{
                      background: `url('./assets/image/svg/ic-login-password.svg') no-repeat 12px center, url('ShowPassIcon.svg') no-repeat right 12px center`,
                      paddingLeft: "45px",
                      backgroundColor: "#F5F6F8",
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      checkPasswordLength(e.target.value);
                      checkPasswordContainNumber(e.target.value);
                      checkPasswordContainCapital(e.target.value);
                      checkPasswordContainSpecial(e.target.value);
                    }}
                    onInput={checkForm}
                  />
                  <div className="px-4">
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231F20",
                        margin: "0 0 8px",
                      }}
                    >
                      Password harus memiliki :
                    </span>
                    <ul className="registersnk mt-2">
                      <li id="dot">
                        <span>
                          <img
                            src={
                              isPasswordLengthValid
                                ? "./assets/image/svg/ic-register-checklist-ijo.svg"
                                : "./assets/image/svg/ic-register-checklist.svg"
                            }
                            alt=""
                            style={{ marginRight: "8px" }}
                          />
                        </span>{" "}
                        Min. terdiri dari 8 digit
                      </li>
                      <li id="dot">
                        <span>
                          <img
                            src={
                              isPasswordContainNumber
                                ? "./assets/image/svg/ic-register-checklist-ijo.svg"
                                : "./assets/image/svg/ic-register-checklist.svg"
                            }
                            style={{ marginRight: "8px" }}
                            alt=""
                          />
                        </span>{" "}
                        Terdiri dari min. 1 angka
                      </li>
                      <li id="dot">
                        <span>
                          <img
                            src={
                              isPasswordHaveCapital
                                ? "./assets/image/svg/ic-register-checklist-ijo.svg"
                                : "./assets/image/svg/ic-register-checklist.svg"
                            }
                            style={{ marginRight: "8px" }}
                            alt=""
                          />
                        </span>{" "}
                        Terdiri dari kombinasi huruf besar dan huruf kecil
                      </li>
                      <li id="dot">
                        <span>
                          <img
                            src={
                              isPasswordHaveSpecial
                                ? "./assets/image/svg/ic-register-checklist-ijo.svg"
                                : "./assets/image/svg/ic-register-checklist.svg"
                            }
                            style={{ marginRight: "8px" }}
                            alt=""
                          />
                        </span>{" "}
                        Terdiri dari min 1. Special karakter
                      </li>
                    </ul>
                  </div>
                  <div style={{ margin: "20px 0 42px" }}>
                    <input
                      style={{
                        marginRight: "5px",
                        backgroundColor: "rgba(232, 40, 39, 0.2)",
                        borderRadius: "4px",
                      }}
                      type="checkbox"
                      id="termsCheck"
                      onChange={(e) => setIsTermsChecked(e.target.checked)}
                      required
                    />
                    <p
                      style={{
                        display: "inline",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#231F20",
                      }}
                    >
                      Saya setuju dengan{" "}
                      <a href="#" id="tnc">
                        Terms{" "}
                      </a>
                      &{" "}
                      <a href="" id="tnc">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div className="registerBtnContainer">
                    <button
                      className="loginBtn"
                      onClick={handleCancel}
                      style={{
                        background: "#fff",
                        boxShadow: "0px 8px 18px rgba(196, 196, 196, 0.3)",
                        cursor: "pointer",
                        marginRight: "23px",
                        color: "#E82827",
                      }}
                    >
                      CANCEL
                    </button>
                    <button className="loginBtn" style={buttonStyle}>
                      REGISTER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
