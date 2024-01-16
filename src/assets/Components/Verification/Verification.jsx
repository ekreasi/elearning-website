import { Container, Row, Col } from "react-bootstrap";
// import Button from "../Button/Button";
// import { BUTTON_TYPES } from "../../Data/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Verification.css";

// const Verification = (props) => {
//   const navigate = useNavigate();
// const [otpArray, setOtpArray] = useState(Array(6).fill(""));
// const inputRefs = useRef([]);

// const handleConfirm = () => {
//   const to = props.to;
//   console.log("Go to Login");
//   navigate(`/${to}`);
// };

// const handleInputChange = (e, index) => {
//   const value = e.target.value;

//   if(value.length > 1){
//     e.target.value = value.chartAt(0);
//   }

//   otpArray[index] = value;

//   if (value.match(/^\d$/) && index < otpArray.length - 1) {
//     inputRefs.current[index + 1].focus();
//   }

//   if (e.key === "Backspace" && index > 0 && value === "") {
//     inputRefs.current[index - 1].focus();
//   }

//   setOtpArray([...otpArray]);
// };

//   return (
// <Container fluid="md" className="content" id="verification">
//   <h2 style={{ color: "#0c6b56" }}>Verification</h2>
//   <p>We have already sent an OTP to your email/phone number</p>
//   <p>Enter the OTP below</p>
// <Row className="justify-content-center">
//   {" "}
//   <Col xs={12} md={6} lg={4}>
//     {" "}
//     <div className="otp-container">
//       {otpArray.map((value, index) => (
//         <input
//           key={index}
//           type="number"
//           className="otp"
//           value={value}
//           onChange={(e) => handleInputChange(e, index)}
//           onKeyUp={(e) => handleInputChange(e, index)}
//           min={0}
//           max={9}
//           required
//           ref={(el) => (inputRefs.current[index] = el)}
//         />
//       ))}
//     </div>
//     <p>Don&apos;t receive the OTP?</p>
//     <p style={{ color: "red", fontWeight: "bold" }}>
//       Waiting #s to resend OTP
//     </p>
//     <div className="btn-container">
//       <Button
//         type={BUTTON_TYPES.GREEN}
//         buttonText="VERIFY"
//         onClick={() => handleConfirm()}
//       />
//     </div>
//   </Col>
// </Row>
// </Container>
//   );
// };

// export default Verification;

const Verification = (props) => {
  const navigate = useNavigate();
  const [otpArray, setOtpArray] = useState(Array(4).fill(""));
  const [seconds, setSeconds] = useState(59);

  const inputRefs = useRef([]);
  const [buttonStyle, setButtonStyle] = useState({
    background: "rgba(232, 40, 39, 0.3)",
    boxShadow: "0px 8px 18px rgba(232, 40, 39, 0.3)",
    cursor: "not-allowed",
  });

  const resendOtp = () => {
    setSeconds(59);
  }

  const handleConfirm = () => {
    const to = props.to;
    console.log("Go to Login");
    navigate(`/${to}`);
  };

  const handleBack = () => {
    navigate("/continue");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const checkForm = () => {
    setTimeout(() => {
      if (otpArray.every((value) => value.length === 1)) {
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
    }, 0);
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.chartAt(0);
    }

    otpArray[index] = value;

    if (value.match(/^\d$/) && index < otpArray.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (e.key === "Backspace" && index > 0 && value === "") {
      inputRefs.current[index - 1].focus();
    }

    setOtpArray([...otpArray]);
    checkForm();
  };

  return (
    <div className="container mt-3">
      <img src="logo-elearning 1.svg" alt="" />
      <div
        className="container shadow"
        style={{
          width: "420px",
          height: "485px",
          borderRadius: "8px",
          padding: "36px",
        }}
      >
        <div
          className="txtContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="welcomeTxt" style={{ display: "inline" }}>
            Verification
          </h3>
          <a
            style={{
              color: "#E82827",
              fontWeight: "600",
              fontSize: "16px",
              textDecoration: "none",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={handleBack}
          >
            Back
          </a>
        </div>
        <p style={{ fontSize: "14px", margin: "8px 0 16px" }}>
          We have already sent you an OTP to your email/ phone number. Enter the
          OTP below.
        </p>
        <Row className="justify-content-center">
          {" "}
          <Col xs={12}>
            {" "}
            <div className="otp-container">
              {otpArray.map((value, index) => (
                <input
                  key={index}
                  type="number"
                  className="otp"
                  value={value}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyUp={(e) => handleInputChange(e, index)}
                  min={0}
                  max={9}
                  required
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <div className="d-flex justify-content-center otp-timer-container">
              <p className="my-1">OTP can be resent in </p>{" "}
              {seconds > 0 ? (
                <button className="d-inline-block verif-timer">{seconds < 10 ? `00: 0${seconds}` : `00:${seconds}`}</button>
              ) : <button className="d-inline-block verif-timer">00:00</button>}
            </div>
            <div className="mx-auto">
              <button
                className="bigBtn "
                style={{
                  background: "#fff",
                  boxShadow: "0px 8px 18px rgba(196, 196, 196, 0.3)",
                  cursor: "pointer",
                  marginRight: "23px",
                  color: "#E82827",
                  marginBottom: "20px",
                }}
                onClick={resendOtp}
              >
                Resend OTP
              </button>
              <button className="bigBtn" style={buttonStyle}>
                Verify & Submit
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Verification;
