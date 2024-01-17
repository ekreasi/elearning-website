import { Col, Modal, Row } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./LearningPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const goStartChapter = () => {
    navigate("/chapter-start");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="learning-page-modal"
    >
      <Modal.Header closeButton style={{ padding: "9px 20px 20px" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p
            className="d-inline"
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "#E82827",
              marginLeft: "10px",
            }}
          >
            Module 2
          </p>
          <input
            className="search-form"
            type="text"
            placeholder="Search message."
            style={{
              background: `url('./assets/image/svg/SearchIcon.svg') no-repeat 16px center`,
              paddingLeft: "45px",
              backgroundColor: "#F5F6F8",
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ padding: "0px 28px 24px" }}
        className="learning-page-row"
      >
        <Row className="text-center">
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center ">
              <img src="./assets/image/svg/ColoredCoaching.svg" alt="" />
              <p
                className="mb-0 p-title ready-p-title"
                style={{ marginLeft: "12px" }}
              >
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>

          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/ColoredImprovement.svg" alt="" />
              <p
                className="mb-0 p-title ready-p-title"
                style={{ marginLeft: "12px" }}
              >
                Pengembangan Diri
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
            onClick={goStartChapter}
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/ColoredSkill.svg" alt="" />
              <p
                className="mb-0 p-title ready-p-title"
                style={{ marginLeft: "12px" }}
              >
                Peningkatan Keterampilan
              </p>
            </div>
            <p className="mb-0 p-arrow">{`>`}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title " style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-between align-items-center module-choices-card"
          >
            <div className="d-flex align-items-center">
              <img src="./assets/image/svg/TimeManagementIcon.svg" alt="" />
              <p className="mb-0 p-title" style={{ marginLeft: "12px" }}>
                Coaching
              </p>
            </div>
            <p className="mb-0 p-arrow" onClick={goStartChapter}>{`>`}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

const LearningPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
      <Helmet>
        <title>Learning | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />

      <div className="learning-page ">
        <p className="learning-page-header">E-Learning</p>
        <div className="learning-page-content d-flex flex-column justify-content-center align-items-center">
          <Row>
            <Col xs={3} className="learning-module-card">
              <img src="./assets/image/svg/ReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="learning-module-text-container my-auto">
                <p className="learning-module-title">Module 1</p>
                <p
                  className="learning-module-status"
                  style={{ color: "#35B572", cursor: "pointer" }}
                  onClick={() => setModalShow(true)}
                >{`Completed>`}</p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="./assets/image/svg/ReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="learning-module-text-container my-auto">
                <p className="learning-module-title">Module 2</p>
                <p
                  className="learning-module-status"
                  style={{ color: "#E82827", cursor: "pointer" }}
                  onClick={() => setModalShow(false)}
                >{`Ready>`}</p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module 3
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module 4
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
            <Col xs={3} className="learning-module-card">
              <img src="NotReadyModuleIcon.svg" alt="" className="module-img" />
              <div className="notready-module-text-container my-auto">
                <p
                  className="learning-module-title"
                  style={{ color: " #7F8A9A" }}
                >
                  Module #
                </p>
                <p
                  className="learning-module-status"
                  style={{ color: " #7F8A9A" }}
                >
                  Not Ready
                </p>
              </div>
            </Col>
          </Row>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
