import "./ChangeCard.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../Auth/AuthWrapper";

const ChangeCard = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard");
  };

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
    height: "46px",
    width: "192px",
    cursor: "not-allowed",
    marginRight: "auto",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : "password";

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
          height: "46px",
          width: "192px",
          marginRight: "auto",
          cursor: "pointer",
        });
      } else {
        setButtonStyle({
          background: "rgba(232, 40, 39, 0.3)",
          height: "46px",
          width: "192px",
          marginRight: "auto",
          cursor: "not-allowed",
        });
      }
    } else {
      setButtonStyle({
        background: "rgba(232, 40, 39, 0.3)",
        height: "46px",
        width: "192px",
        marginRight: "auto",
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
    <div className="changeCard" style={{ marginTop: "56px" }}>
      <Container>
        <Row className="changeRow">
          <Col xs={12} className="change-card-col">
            <p className="changeTitle">Change Password</p>
            <form action="#" onSubmit={handleConfirm} className="passwordChnge">
              <div className="password-input-container position-relative ">
                <input
                  className="change-form mb-3 mx-auto"
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
                  className="change-form mb-3 password-input mx-auto"
                  type={inputType}
                  placeholder="Confirm Password"
                  style={{
                    background: `url('ConfirmPasswordIcon.svg') no-repeat 12px center, url('ShowPassIcon.svg') no-repeat right 12px center`,
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
              <div className="password-terms">
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
                <ul className="registersnk">
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
              <div className="changeBtnContainer d-flex flex-row">
                <button
                  className="changeBtn"
                  onClick={handleCancel}
                  style={{
                    background: "#fff",
                    height: "46px",
                    width: "192px",
                    cursor: "pointer",
                    marginRight: "8px",
                    marginLeft: "auto",
                    color: "#E82827",
                  }}
                >
                  Cancel
                </button>
                <button className="changeSubmitBtn" style={buttonStyle}>
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangeCard;
