import { Col, Row } from "react-bootstrap";
import WhiteNav from "../Components/Navbar/WhiteNav/WhiteNav";
import "./CertificatePage.css";

const CertificatePage = () => {

  return (
    <div
      className="certificate-page"
      style={{
        backgroundColor: "#FFF",
        height: "100vh",
        background: `url('bg_red_1 1.svg') no-repeat `,
        backgroundPosition: "center top 60px",
        backgroundSize: "100% 156px",
      }}
    >
      <WhiteNav />

      <div className="cert-header">
        <Row>
          <Col xs={2} className="image-col">
            <img
              src="CertificatePageIcon.svg"
              alt=""
              style={{ width: "110px", height: "110px", margin: "5px 10px 5px 20px" }}
            />
          </Col>
          <Col xs={10}>
            <Row className="my-3">
              <p className="cert-header-title">Certificate</p>
              <p className="cert-header-desc">
                You will get a certificate if you have completed all chapter in
                the module. The link to obtain your certificate is provided when
                show the button link “Download”.
              </p>
            </Row>
          </Col>
        </Row>
        <Row style={{ margin: "26px auto 40px" }}>
          <Col xs={3} className="d-flex">
            <img src="AchievedIcon.svg" alt="" />
            <div className="my-auto cert-card-container">
              <p className="certificate-card-title">Pre Basic</p>
              <a className="certificate-download">Download</a>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievedIcon.svg" alt="" />
            <div className="my-auto cert-card-container">
              <p className="certificate-card-title">Basic</p>
              <a className="certificate-download">Download</a>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Beginner</p>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Elementary</p>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "36px auto 40px" }}>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Intermediate</p>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Upper Intermediate</p>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Advance</p>
            </div>
          </Col>
          <Col xs={3} className="d-flex">
            <img src="AchievementIcon.svg" alt="" />
            <div className="my-auto">
              <p className="certificate-disabled-title">Proficiency</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CertificatePage;
