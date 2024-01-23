import { Button, Col, Container, Row } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import("./ZoomTraining.css");

const ZoomTraining = () => {
  const navigate = useNavigate();
  const goZoom = () => {
    navigate("/zoom-webinar");
  };

  return (
    <div style={{ background: "#E5E5E5", minHeight: "100vh" }}>
      <Helmet>
        <title>Event | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />
      <div className="container mt-3">
        {/* <div className="zoom-training-header">
          <div className="left-training-header">
            <p className="left-training-event">EVENT</p>
            <p className="left-training">Zoom</p>
          </div>
        </div>
        <div className="zoom-training-content px-3">
          <Container>
            <Row className="zoom-content-row d-flex flex-column flex-md-row justify-content-center align-items-left">
              <Col xs={3} className="p-0" style={{ width: "230px" }}>
                <img src="./assets/image/svg/ZoomContentRowImage.svg" alt="" />
              </Col>
              <Col xs={7} className="p-0">
                <Row>
                  <p
                    className="fw-bold"
                    style={{ marginBottom: "6px", fontSize: "16px" }}
                  >
                    Webinar: Active learning methodologies
                  </p>
                  <p
                    style={{
                      marginBottom: "17px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    This event will feature session 1 with ELT teachers and
                    experts from around the world. All three webinars will help
                    English teachers think about how they plan activities and
                    lessons that involve active learning methodologies. The
                    webinars are for teachers of primary, secondary and young
                    adult English language learners.
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    Speaker: Eugenia Dell&apos;Osa (Argentina)
                  </p>
                </Row>
                <Row className="mt-2">
                  <span style={{ paddingLeft: "8px" }}>
                    <img
                      src="./assets/image/svg/TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="./assets/image/svg/Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="./assets/image/svg/JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="./assets/image/svg/Line 112.svg" alt="" className="garis-abu" />
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
                className="p-0 d-flex align-items-center justify-content-center"
              >
                <Button className="acc-training-btn" onClick={goZoom}>
                  Join
                </Button>
              </Col>
            </Row>
            <Row className="zoom-content-row d-flex flex-column flex-md-row justify-content-center align-items-left">
              <Col xs={3} className="p-0" style={{ width: "230px" }}>
                <img src="./assets/image/svg/ZoomContentRowImage.svg" alt="" />
              </Col>
              <Col xs={7} className="p-0">
                <Row>
                  <p
                    className="fw-bold"
                    style={{ marginBottom: "6px", fontSize: "16px" }}
                  >
                    Webinar: Active learning methodologies
                  </p>
                  <p
                    style={{
                      marginBottom: "17px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    This event will feature session 1 with ELT teachers and
                    experts from around the world. All three webinars will help
                    English teachers think about how they plan activities and
                    lessons that involve active learning methodologies. The
                    webinars are for teachers of primary, secondary and young
                    adult English language learners.
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>
                    Speaker: Eugenia Dell&apos;Osa (Argentina)
                  </p>
                </Row>
                <Row className="mt-2">
                  <span style={{ paddingLeft: "8px" }}>
                    <img
                      src="./assets/image/svg/TrainingDateIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                    23 Oct{" "}
                    <img src="./assets/image/svg/Line 112.svg" alt="" className="garis-abu" />
                    <img
                      src="./assets/image/svg/JamTrainingIcon.svg"
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                    />
                    09:10 - 10:10{" "}
                    <img src="./assets/image/svg/Line 112.svg" alt="" className="garis-abu" />
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
                className="p-0 d-flex align-items-center justify-content-center"
              >
                <Button className="acc-training-btn d-flex justify-content-center" onClick={goZoom}>
                  Join
                </Button>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="card p-3 bg-white border-0 shadow">
          <div className="card-header border-0 bg-white d-flex flex-column flex-md-row justify-content-between">
            <div className="left-training-header">
              <p className="left-training-event">EVENT</p>
              <p className="left-training">Zoom</p>
            </div>
          </div>
          <div className="card-body">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="zoom-content-row d-flex flex-column flex-md-row align-items-center gap-3">
                  <img
                    src="./assets/image/svg/ZoomContentRowImage.svg"
                    alt=""
                    className="zoom-image"
                  />
                  <div className="zoom-training-title">
                    <p
                      className="fw-bold"
                      style={{ marginBottom: "6px", fontSize: "16px" }}
                    >
                      Webinar: Active learning methodologies
                    </p>
                    <p
                      style={{
                        marginBottom: "17px",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      This event will feature session 1 with ELT teachers and
                      experts from around the world. All three webinars will
                      help English teachers think about how they plan activities
                      and lessons that involve active learning methodologies.
                      The webinars are for teachers of primary, secondary and
                      young adult English language learners.
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>
                      Speaker: Eugenia Dell&apos;Osa (Argentina)
                    </p>
                    <span style={{ paddingLeft: "8px", fontSize: "14px", fontWeight: "600" }}>
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
                  <div className="d-flex justify-content-center align-items-center">
                    <Button className="ms-md-auto d-flex acc-training-btn align-items-center justify-content-center">
                      Join
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="zoom-content-row d-flex flex-column flex-md-row align-items-center gap-3">
                  <img
                    src="./assets/image/svg/ZoomContentRowImage.svg"
                    alt=""
                    className="zoom-image"
                  />
                  <div className="zoom-training-title">
                    <p
                      className="fw-bold"
                      style={{ marginBottom: "6px", fontSize: "16px" }}
                    >
                      Webinar: Supporting literacy development
                    </p>
                    <p
                      style={{
                        marginBottom: "17px",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      This seminar includes discussions designed to clarify the
                      currently proposed 2019 Title 24 HVAC Standards and
                      Regulations, and answer questions the contractor, HVAC
                      designer, installer, or homeowner may have relating to the
                      installation and repair of the HVAC system.
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>
                      Speaker: Eugenia Dell&apos;Osa (Argentina)
                    </p>
                    <span style={{ paddingLeft: "8px", fontSize: "14px", fontWeight: "600" }}>
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
                  <div className="d-flex justify-content-center align-items-center">
                    <Button className="ms-md-auto d-flex acc-training-btn align-items-center justify-content-center">
                      Join
                    </Button>
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

export default ZoomTraining;
