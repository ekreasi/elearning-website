import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./TrainingPage.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const TrainingPage = () => {
  const navigate = useNavigate();
  const goTrainingHistory = () => {
    navigate("/training-history");
  };

  const goZoom = () => {
    navigate("/zoom-training");
  };

  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <Helmet>
        <title>Event | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />
      <div className="training-page">
        <div className="training-page-header">
          <div className="left-training-header">
            <p className="left-training-event">EVENT</p>
            <p className="left-training">Training</p>
          </div>
          <div className="right-training-header ">
            <p className="d-inline right-training-sort">Sort by</p>
            <DropdownButton
              id="training-page-dropdown"
              className="training-page-button"
              title={
                <span className="training-dropdown-txt training-dropdown-p">
                  All <img src="BlackDropdown.svg" alt="Dropdown Icon" />
                </span>
              }
            >
              <p className="training-dropdown-p">Event</p>
              <Dropdown.Item className="training-filter-button">
                <button>All</button> <button>Online</button>{" "}
                <button>Offline</button>
              </Dropdown.Item>
            </DropdownButton>
            <button
              className="training-page-history"
              onClick={goTrainingHistory}
            >
              <img src="HistoryTimeIcon.svg" alt="" />
              History
            </button>
          </div>
        </div>
        <div className="training-page-content">
          <Container>
            <Row className="training-item-row">
              <Col xs={1}>
                <img src="Training-Main-Icon.svg" alt="" />
              </Col>
              <Col xs={9} style={{ marginLeft: "20px" }}>
                <Row className="training-page-title">
                  Training: Talent PT 2. This invitation has a long title. So
                  this title has reached the maximum character limit in two
                  lines.
                </Row>
                <Row className="mt-2">
                  <span className="training-img-container">
                    <img
                      src="TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="LocationTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    GSG Tower ABC
                  </span>
                </Row>
              </Col>
              <Col xs={2} style={{ padding: "0", width: "13%" }}>
                <Button
                  className="d-flex align-content-end acc-training-btn justify-content-center"
                  style={{ marginLeft: "auto" }}
                >
                  Accept
                </Button>
              </Col>
            </Row>
            <Row className="training-item-row">
              <Col xs={1}>
                <img src="Training-Main-Icon.svg" alt="" />
              </Col>
              <Col xs={9} style={{ marginLeft: "20px" }}>
                <Row className="training-page-title">
                  Training: Communicating Effectively with Vulnerable Children
                  and Young People
                </Row>
                <Row className="mt-2">
                  <span
                    className="training-img-container"
                    style={{ paddingLeft: "0" }}
                  >
                    <img
                      src="TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="LocationTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    Zoom Meeting
                  </span>
                </Row>
              </Col>
              <Col xs={2} style={{ padding: "0", width: "13%" }}>
                <Button
                  className="d-flex align-content-end acc-training-btn justify-content-center"
                  style={{ marginLeft: "auto" }}
                  onClick={goZoom}
                >
                  Join
                </Button>
              </Col>
            </Row>
            <Row className="training-item-row">
              <Col xs={1}>
                <img src="Training-Main-Icon.svg" alt="" />
              </Col>
              <Col xs={9} style={{ marginLeft: "20px" }}>
                <Row className="training-page-title">
                  Training: Product Introduction
                </Row>
                <Row className="mt-2">
                  <span
                    className="training-img-container"
                    style={{ paddingLeft: "0" }}
                  >
                    <img
                      src="TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="LocationTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    GSG Tower ABC
                  </span>
                </Row>
              </Col>
              <Col xs={2} style={{ padding: "0", width: "13%" }}>
                <div className="AcceptedTraining text-center">
                  <img
                    src="TrainingAccIcon.svg"
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Accepted
                </div>
              </Col>
            </Row>
            <Row className="training-item-row">
              <Col xs={1}>
                <img src="Training-Main-Icon.svg" alt="" />
              </Col>
              <Col xs={9} style={{ marginLeft: "20px" }}>
                <Row className="training-page-title">
                  Training: How to manage Your Time
                </Row>
                <Row className="mt-2">
                  <span
                    className="training-img-container"
                    style={{ paddingLeft: "0" }}
                  >
                    <img
                      src="TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="LocationTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    GSG Tower ABC
                  </span>
                </Row>
              </Col>
              <Col xs={2} style={{ padding: "0", width: "13%" }}>
                <div className="AcceptedTraining text-center">
                  <img
                    src="TrainingAccIcon.svg"
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Accepted
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
