import { Col, Row } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./StartLearningPage.css";
import { useNavigate } from "react-router-dom";

const StartLearningPage = () => {
const navigate = useNavigate();
const goMaterial = () => {
  navigate("./material")
}

  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <NewNav />

      <div className="start-learning-page">
        <Row style={{ height: "84vh" }}>
          <Col
            md={8}
            style={{ background: "rgba(232, 40, 39, 0.1)" }}
            className="d-flex align-items-center justify-content-center"
          >
            <img src="./assets/image/svg/QuizImage.svg" alt="" />
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <p style={{ fontSize: "18px" }}>Ready to start this chapter?</p>
            <div className="chapter-btn-container align-items-center justify-content-center">
              <button className="chapter-yes-btn" onClick={goMaterial}>Yes</button>
              <button className="chapter-no-btn" onClick={() => history.go(-1)}>No</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StartLearningPage;
