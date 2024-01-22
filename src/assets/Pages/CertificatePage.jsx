import { Col, Container, Row } from "react-bootstrap";
import WhiteNav from "../Components/Navbar/WhiteNav/WhiteNav";
import "./CertificatePage.css";
import { Helmet } from "react-helmet";

const CertificatePage = () => {
  return (
    <div
      className="certificate-page"
      style={{
        backgroundColor: "#FFF",
        height: "100vh",
      }}
    >
      <Helmet>
        <title>Certificate | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WhiteNav />

      <div className="certificate-page-container">
        <div>
          <div style={{
            backgroundImage: `url('./assets/image/svg/bg_red_1 1.svg')`,
            height: 132
          }} />

          <Container>
            <div className="cert-header">
              <div className="d-flex align-items-center">
                <img
                  src="./assets/image/svg/CertificatePageIcon.svg"
                  alt=""
                  style={{
                    width: "119px",
                    height: "119px",
                  }}
                />
                <div className="d-flex justify-content-center flex-column">
                  <p className="cert-header-title mb-0">Certificate</p>
                  <p className="cert-header-desc mb-0">
                    You will get a certificate if you have completed all chapter
                    in the module. The link to obtain your certificate is provided
                    when show the button link “Download”.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievedIcon.svg" alt="" />
              <div className="my-auto cert-card-container">
                <p className="certificate-card-title ">Pre Basic</p>
                <a className="certificate-download">Download</a>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievedIcon.svg" alt="" />
              <div className="my-auto cert-card-container">
                <p className="certificate-card-title">Basic</p>
                <a className="certificate-download">Download</a>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Beginner</p>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Elementary</p>
              </div>
            </Col>
          </Row>
          <Row >
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Intermediate</p>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Upper Intermediate</p>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Advance</p>
              </div>
            </Col>
            <Col xs={12} lg={3} className="d-flex certificate-column-card gap-3">
              <img src="./assets/image/svg/AchievementIcon.svg" alt="" />
              <div className="my-auto">
                <p className="certificate-disabled-title">Proficiency</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CertificatePage;
