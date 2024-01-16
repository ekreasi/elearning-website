import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthWrapper";
import Swal from "sweetalert2";

const NewPasswordPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(false);
  const [isPasswordContainNumber, setIsPasswordContainNumber] = useState(false);
  const [isPasswordHaveCapital, setIsPasswordHaveCapital] = useState(false);
  const [isPasswordHaveSpecial, setIsPasswordHaveSpecial] = useState(false);

  const [buttonStyle, setButtonStyle] = useState({
    background: "rgba(232, 40, 39, 0.3)",
    boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
    cursor: "not-allowed",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : "password";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pDashboard");
      Swal.fire("Welcome Back!");
    }
  }, [isAuthenticated, navigate]);

  const handleConfirm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://130.211.243.37/api/auth/register/check-instance-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: password }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok && data?.metaData?.code === 200) {
        navigate("/");
      } else {
        Swal.fire(data?.message || "Code not found !");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkForm();
  }, [password, confirmPassword]);

  const checkForm = () => {
    if (password && confirmPassword && password === confirmPassword) {
      if (
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
              src="logo-elearning 1.svg"
              alt=""
              style={{ marginTop: "2rem", marginLeft: "6rem" }}
            />
            <img
              src="img_forgot password 1.svg"
              alt=""
              className="mx-auto d-flex mt-3"
            />
          </div>
        </Col>
        <Col xs={6} style={{ backgroundColor: "white", height: "100vh" }}>
          <div className="login">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="" style={{ margin: "auto 0" }}>
                <h3 className="registerTxt">Set New Password</h3>
                <p className="signTxt mb-5">Please input new password below</p>
                <form action="#" onSubmit={handleConfirm}>
                  <div className="password-input-container position-relative">
                    <input
                      className="login-form mb-3"
                      type={inputType}
                      placeholder="Password"
                      style={{
                        background: `url('ic-login-password.svg') no-repeat 12px center, url('ShowPassIcon.svg') no-repeat right 12px center`,
                        paddingLeft: "45px",
                        cursor: "pointer",
                        backgroundColor: "#F5F6F8",
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        checkPasswordLength(e.target.value);
                        checkPasswordContainNumber(e.target.value);
                        checkPasswordContainCapital(e.target.value);
                        checkPasswordContainSpecial(e.target.value);
                        checkForm();
                      }}
                      onInput={checkForm}
                    />
                    <input
                      className="login-form mb-3 password-input"
                      type={inputType}
                      placeholder="Confirm Password"
                      style={{
                        background: `url('ic-login-password.svg') no-repeat 12px center, url('ShowPassIcon.svg') no-repeat right 12px center`,
                        paddingLeft: "45px",
                        backgroundColor: "#F5F6F8",
                      }}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        checkForm();
                      }}
                      onInput={checkForm}
                    />
                  </div>
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
                                ? "ic-register-checklist-ijo.svg"
                                : "ic-register-checklist.svg"
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
                                ? "ic-register-checklist-ijo.svg"
                                : "ic-register-checklist.svg"
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
                                ? "ic-register-checklist-ijo.svg"
                                : "ic-register-checklist.svg"
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
                                ? "ic-register-checklist-ijo.svg"
                                : "ic-register-checklist.svg"
                            }
                            style={{ marginRight: "8px" }}
                            alt=""
                          />
                        </span>{" "}
                        Terdiri dari min 1. Special karakter
                      </li>
                    </ul>
                  </div>
                  <button className="loginBtn" style={buttonStyle}>
                    Send
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

export default NewPasswordPage;
