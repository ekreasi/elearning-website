import { useNavigate } from "react-router-dom";
import ChapterNav from "../Components/Navbar/RedNav/ChapterNav";
import "./QuizFinishPage.css";

const QuizFinishPage = () => {
  const navigate = useNavigate();
  const goCertificate = () => {
    navigate("/certificate")

  }

  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <ChapterNav />

      <div className="quiz-finish-page">
        <div className="finish-quiz-content d-flex flex-column justify-content-between align-items-center">
          <img src="QuizSuccessImage.svg" alt="" />
          <div className="finish-success-desc text-center">
            <p className="amazing">Amazing!</p>
            <p className="successfully">
              You have successfully completed the quiz
            </p>
          </div>
          <p className="finish-score">Correct answer: 10/10</p>
          <div className="finish-button-container">
            <button className="white-quiz-btn" onClick={goCertificate}>Certificate</button>
            <button className="red-quiz-btn">View Score</button>
          </div>
        </div>
        <hr />
        <span className="d-flex align-items-center justify-content-center certificate-text-bottom ">
          <img src="CertifModulIcon.svg" alt="" className="mx-1 "/>
          Complete all the chapter in the module and get the certificate
        </span>
      </div>
    </div>
  );
};

export default QuizFinishPage;
