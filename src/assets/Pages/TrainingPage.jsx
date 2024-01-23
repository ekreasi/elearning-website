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
    <div style={{ background: "#E5E5E5", minHeight: "100vh" }}>
      <Helmet>
        <title>Event | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />
      <div className="container mt-3">
        {/* <div className="training-page">
          <div className="training-page-header d-flex flex-column flex-md-row">
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
                    All{" "}
                    <img
                      src="./assets/image/svg/BlackDropdown.svg"
                      alt="Dropdown Icon"
                    />
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
                <img src="./assets/image/svg/HistoryTimeIcon.svg" alt="" />
                History
              </button>
            </div>
          </div>
          <div className="training-page-content">
            <Container className="training-page-container">
              <Row className="training-item-row d-flex flex-column flex-md-row gap-3">
                <Col
                  xs={1}
                  classNames="d-flex justify-content-center align-items-center"
                >
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                </Col>
                <Col xs={9} style={{ marginLeft: "0px" }}>
                  <Row className="training-page-title">
                    Training: Talent PT 2. This invitation has a long title. So
                    this title has reached the maximum character limit in two
                    lines.
                  </Row>
                  <Row className="mt-2">
                    <span className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block">
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      GSG Tower ABC
                    </span>
                  </Row>
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: "0", width: "13%" }}
                >
                  <Button
                    className="d-flex align-content-end acc-training-btn justify-content-center"
                    style={{ marginLeft: "auto" }}
                  >
                    Accept
                  </Button>
                </Col>
              </Row>
              <Row className="training-item-row d-flex flex-column flex-md-row gap-3">
                <Col
                  xs={1}
                  classNames="d-flex justify-content-center align-items-center"
                >
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                </Col>
                <Col xs={9} style={{ marginLeft: "0px" }}>
                  <Row className="training-page-title">
                    Training: Communicating Effectively with Vulnerable Children
                    and Young People
                  </Row>
                  <Row className="mt-2">
                    <span
                      className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block"
                      style={{ paddingLeft: "0" }}
                    >
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      Zoom Meeting
                    </span>
                  </Row>
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: "0", width: "13%" }}
                >
                  <Button
                    className="d-flex align-content-end acc-training-btn justify-content-center"
                    style={{ marginLeft: "auto" }}
                    onClick={goZoom}
                  >
                    Join
                  </Button>
                </Col>
              </Row>
              <Row className="training-item-row d-flex flex-column flex-md-row gap-3">
                <Col
                  xs={1}
                  classNames="d-flex justify-content-center align-items-center"
                >
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                </Col>
                <Col xs={9} style={{ marginLeft: "0px" }}>
                  <Row className="training-page-title">
                    Training: Product Introduction
                  </Row>
                  <Row className="mt-2">
                    <span
                      className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block"
                      style={{ paddingLeft: "0" }}
                    >
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      GSG Tower ABC
                    </span>
                  </Row>
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: "0", width: "13%" }}
                >
                  <div className="AcceptedTraining text-center">
                    <img
                      src="./assets/image/svg/TrainingAccIcon.svg"
                      alt=""
                      style={{ marginRight: "5px" }}
                    />
                    Accepted
                  </div>
                </Col>
              </Row>
              <Row className="training-item-row d-flex flex-column flex-md-row gap-3">
                <Col
                  xs={1}
                  classNames="d-flex justify-content-center align-items-center"
                >
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                </Col>
                <Col xs={9} style={{ marginLeft: "0px" }}>
                  <Row className="training-page-title">
                    Training: How to manage Your Time
                  </Row>
                  <Row className="mt-2">
                    <span
                      className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block"
                      style={{ paddingLeft: "0" }}
                    >
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      GSG Tower ABC
                    </span>
                  </Row>
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-left"
                  style={{ padding: "0", width: "13%" }}
                >
                  <div className="AcceptedTraining text-center">
                    <img
                      src="./assets/image/svg/TrainingAccIcon.svg"
                      alt=""
                      style={{ marginRight: "5px" }}
                    />
                    Accepted
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div> */}
        <div className="card p-3 bg-white border-0 shadow">
          <div className="card-header border-0 bg-white d-flex flex-column flex-md-row justify-content-between">
            <div className="left-training-header">
              <p className="left-training-event">EVENT</p>
              <p className="left-training">Training</p>
            </div>
            <div className="right-training-header">
              <p className="right-training-sort">Sort by</p>
              <DropdownButton
                id="training-page-dropdown"
                className="training-page-button"
                title={
                  <span className="training-dropdown-txt training-dropdown-p">
                    All{" "}
                    <img
                      src="./assets/image/svg/BlackDropdown.svg"
                      alt="Dropdown Icon"
                    />
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
                className="training-page-history "
                onClick={goTrainingHistory}
              >
                <img src="./assets/image/svg/HistoryTimeIcon.svg" alt="" />
                History
              </button>
            </div>
          </div>
          <div className="card-body">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="training-item-row d-flex flex-column flex-md-row gap-3">
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                  <div className="training-page-title">
                    <p>
                      Training: Talent PT 2. This invitation has a long title.
                      So this title has reached the maximum character limit in
                      two lines.
                    </p>
                    <span className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block">
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      GSG Tower ABC
                    </span>
                  </div>
                  <Button className="ms-md-auto d-flex align-content-end acc-training-btn justify-content-center">
                    Accept
                  </Button>
                </div>
              </Col>
              <Col xs={12}>
                <div className="training-item-row d-flex flex-column flex-md-row gap-3">
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                  <div className="training-page-title">
                    <p>
                      Training: Communicating Effectively with Vulnerable
                      Children and Young People
                    </p>
                    <span className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block">
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      23 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      15:00 PM
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      Zoom Meeting
                    </span>
                  </div>
                  <Button className="ms-md-auto d-flex  acc-training-btn justify-content-center">
                    Join
                  </Button>
                </div>
              </Col>
              <Col xs={12}>
                <div className="training-item-row d-flex flex-column flex-md-row gap-3">
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                  <div className="training-page-title">
                    <p>Training: Product Introduction</p>
                    <span className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block">
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      18 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      GSG Tower ABC
                    </span>
                  </div>
                  <div className="ms-md-auto AcceptedTraining">
                    <img
                      src="./assets/image/svg/TrainingAccIcon.svg"
                      alt=""
                      style={{ marginRight: "5px" }}
                    />
                    Accepted
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="training-item-row d-flex flex-column flex-md-row gap-3">
                  <img src="./assets/image/svg/Training-Main-Icon.svg" alt="" />
                  <div className="training-page-title">
                    <p>
                      Training: How to manage your time
                    </p>
                    <span className="training-img-container d-sm-flex align-align-items-sm-center justify-content-sm-center d-lg-block">
                      <img
                        src="./assets/image/svg/TrainingDateIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />{" "}
                      10 Oct{" "}
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/JamTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      09:10 - 10:10
                      <img
                        src="./assets/image/svg/Line 112.svg"
                        alt=""
                        className="garis-abu"
                      />
                      <img
                        src="./assets/image/svg/LocationTrainingIcon.svg"
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                      Zoom Meeting
                    </span>
                  </div>
                  <div className="ms-md-auto AcceptedTraining">
                    <img
                      src="./assets/image/svg/TrainingAccIcon.svg"
                      alt=""
                      style={{ marginRight: "5px" }}
                    />
                    Accepted
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
