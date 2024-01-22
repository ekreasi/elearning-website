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

      <div className="quiz-finish-page d-flex flex-column justify-content-between">
        <div className="finish-quiz-content p-3 d-flex flex-column justify-content-between align-items-center">
          <img src="./assets/image/svg/QuizSuccessImage.svg" alt="" />
          <div className="finish-success-desc text-center">
            <p className="amazing">Amazing!</p>
            <p className="successfully">
              You have successfully completed the quiz
            </p>
          </div>
          <p className="finish-score">Correct answer: 10/10</p>
          <div className="finish-button-container d-flex flex-column flex-md-row gap-3 mb-5">
            <button className="white-quiz-btn" onClick={goCertificate}>Certificate</button>
            <button className="red-quiz-btn">View Score</button>
          </div>
        </div>

        <div className="py-4 d-flex flex-column gap-2 border-top">
          <span className="mx-3 d-flex gap-2 align-items-center justify-content-center certificate-text-bottom ">
            <img src="./assets/image/svg/CertifModulIcon.svg" alt="" />
            <span>Complete all the chapter in the module and get the certificate</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizFinishPage;
