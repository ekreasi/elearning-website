import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Auth/AuthWrapper";
import { Button, Dropdown, DropdownButton, Modal, NavDropdown } from "react-bootstrap";
import "./WhiteNav.css";
import { useState } from "react";

const NotificationModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            width: "100%",
            borderRadius: "6px",
            color: "#c12121",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          Notification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="small-dropdown-notif">
          <div className="top-dropdown-event-item d-flex justify-content-between">
            <div className="top-left-dropdown-item">
              <img
                src="./assets/image/svg/notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p style={{ display: "contents" }}>Event</p>
            </div>
            <p className="top-date-item">25 Oct</p>
          </div>
          <div className="bot-dropdown-event-item notification-small-desc">
            <p className="notification-event-title">
              Webinar: Active learning methodologies
            </p>
            <p className="notification-event-desc notification-small-desc">
              Please join the training for achievement the level. Lorem ipsum
              dolor sit amet consectetur ligula
            </p>
          </div>
        </div>
        <hr />
        <div className="small-dropdown-notif">
          <div className="top-dropdown-event-item d-flex justify-content-between">
            <div className="top-left-dropdown-item">
              <img
                src="./assets/image/svg/notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p style={{ display: "contents" }}>Event</p>
            </div>
            <p className="top-date-item">25 Oct</p>
          </div>
          <div className="bot-dropdown-event-item">
            <p className="notification-event-title notification-small-desc">
              Webinar: Active learning methodologies
            </p>
            <p className="notification-event-desc notification-small-desc">
              Please join the training for achievement the level. Lorem ipsum
              dolor sit amet consectetur ligula
            </p>
          </div>
        </div>
        <hr />
        <div className="small-dropdown-notif">
          <div className="top-dropdown-event-item d-flex justify-content-between">
            <div className="top-left-dropdown-item">
              <img
                src="./assets/image/svg/notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p style={{ display: "contents" }}>Event</p>
            </div>
            <p className="top-date-item">25 Oct</p>
          </div>
          <div className="bot-dropdown-event-item">
            <p className="notification-event-title notification-small-desc">
              Webinar: Active learning methodologies
            </p>
            <p className="notification-event-desc notification-small-desc">
              Please join the training for achievement the level. Lorem ipsum
              dolor sit amet consectetur ligula
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>View more</Button>
      </Modal.Footer>
    </Modal>
  );
};

function WhiteNav() {
  const { logout } = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);
  const location = useLocation();

  const goTraining = (e) => {
    e.preventDefault();
    navigate("/training");
  };

  const goDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const goLearn = (e) => {
    e.preventDefault();
    navigate("/learning");
  };

  const goNotif = (e) => {
    e.preventDefault();
    navigate("/notif");
  };

  const goProfile = (e) => {
    e.preventDefault();
    navigate("/setting");
  };

  const goLibrary = (e) => {
    e.preventDefault();
    navigate("/library");
  };

  const goCertif = (e) => {
    e.preventDefault();
    navigate("/certificate");
  };

  const goSchedule = (e) => {
    e.preventDefault();
    navigate("/schedule");
  };

  const goZoom = (e) => {
    e.preventDefault();
    navigate("/zoom-training-page");
  };

  return (
    <div>
      <div
        className={`notification-wrapper ${
          isNotificationClicked ? "dark-overlay" : ""
        }`}
        onClick={() => setIsNotificationClicked(false)}
      />
      <Navbar
        expand="lg"
        className="bg-custom white-navbar w-100"
        style={{
          background: `url('./assets/image/svg/Profile-bg-logo.svg') no-repeat`,
          backgroundColor: "#fff",
          height: "62px",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./assets/image/svg/E-LogoMerah.svg"
              alt=""
              style={{ marginLeft: "15px", marginRight: "60px" }}
            />
            <img
              src="./assets/image/svg/JISLogoMerah.svg"
              alt=""
              style={{ marginRight: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-endd z-top">
            <Nav className="me-auto">
              <Nav.Link
                onClick={(e) => goDashboard(e)}
                className={`text-dark ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                onClick={(e) => goLearn(e)}
                className={`text-dark ${
                  location.pathname === "/learning" ? "active" : ""
                }`}
              >
                e-Learning
              </Nav.Link>
              <Nav.Link
                onClick={(e) => goCertif(e)}
                className={`text-dark ${
                  location.pathname === "/certificate" ? "active" : ""
                }`}
              >
                Certificate
              </Nav.Link>
              <Nav.Link
                onClick={(e) => goSchedule(e)}
                className={`text-dark ${
                  location.pathname === "/schedule" ? "active" : ""
                }`}
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                onClick={(e) => goLibrary(e)}
                className={`text-dark ${
                  location.pathname === "/library" ? "active" : ""
                }`}
              >
                My Library
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    Event <img src="./assets/image/svg/DropdownIconHtm.svg" />
                  </span>
                }
                id="basic-nav-dropdown "
                className={`title whiteTitle ${
                  location.pathname === "/training" ||
                  location.pathname === "/zoom-training-page"
                    ? "active"
                    : ""
                }`}
                style={{ marginLeft: "10px"}}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={(e) => goTraining(e)}
                >
                  <img
                    src="./assets/image/svg/PinkTraining.svg"
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Training
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={(e) => goZoom(e)}>
                  <img
                    src="./assets/image/svg/PinkZoom.svg"
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Zoom
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              onClick={() => setModalShow(true)}
              className={`text-dark d-sm-block d-lg-none ${
                location.pathname === "/notification" ? "active" : ""
              }`}
            >
              Notification
            </Nav.Link>
            <Nav.Link>
              <DropdownButton
                id="dropdown-basic-button"
                title={<img src="./assets/image/svg/RedNotifIcon.svg" alt="" />}
                className="white-notification-button d-none d-lg-block"
                onClick={() => {
                  setIsNotificationClicked(!isNotificationClicked);
                }}
              >
                <p
                  className="notification-title"
                  style={{
                    width: "100%",
                    height: "60px",
                    borderRadius: "6px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  Notification
                </p>
                <Dropdown.Item
                  href="#/action-1"
                  className="dropdown-notification-item"
                >
                  <div className="top-dropdown-event-item d-flex justify-content-between">
                    <div className="top-left-dropdown-item">
                      <img
                        src="./assets/image/svg/notification-event-icon.svg"
                        alt=""
                        style={{ marginRight: "5px" }}
                      />
                      <p style={{ display: "contents" }}>Event</p>
                    </div>
                    <p className="top-date-item">25 Oct</p>
                  </div>
                  <div className="bot-dropdown-event-item">
                    <p className="notification-event-title">
                      Webinar: Active learning methodologies
                    </p>
                    <p className="notification-event-desc">
                      Please join the training for achievement the level. Lorem
                      ipsum dolor sit amet consectetur ligula
                    </p>
                  </div>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item
                  href="#/action-1"
                  className="dropdown-notification-item"
                >
                  <div className="top-dropdown-event-item d-flex justify-content-between">
                    <div className="top-left-dropdown-item">
                      <img
                        src="./assets/image/svg/notification-event-icon.svg"
                        alt=""
                        style={{ marginRight: "5px" }}
                      />
                      <p style={{ display: "contents" }}>Event</p>
                    </div>
                    <p className="top-date-item">20 Oct</p>
                  </div>
                  <div className="bot-dropdown-event-item">
                    <p className="notification-event-title">
                      Training Talent PT 2
                    </p>
                    <p className="notification-event-desc">
                      Please join the training for achievement the level. Lorem
                      ipsum dolor sit amet consectetur ligula
                    </p>
                  </div>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item
                  href="#/action-1"
                  className="dropdown-notification-item last-item"
                >
                  <div className="top-dropdown-event-item d-flex justify-content-between">
                    <div className="top-left-dropdown-item">
                      <img
                        src="./assets/image/svg/notification-event-icon.svg"
                        alt=""
                        style={{ marginRight: "5px" }}
                      />
                      <p style={{ display: "contents" }}>Event</p>
                    </div>
                    <p className="top-date-item">16 Oct</p>
                  </div>
                  <div className="bot-dropdown-event-item">
                    <p className="notification-event-title">
                      Product Introduction
                    </p>
                    <p className="notification-event-desc">
                      Please join the training for achievement the level. Lorem
                      ipsum dolor sit amet consectetur ligula
                    </p>
                  </div>
                </Dropdown.Item>
                <p
                  style={{
                    color: "#E82827",
                    width: "100%",
                    height: "44px",
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "right",
                    justifyContent: "center",
                    marginBottom: "0",
                    padding: "20px 10px 15px",
                    boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.15)",
                    lineHeight: "5px",
                  }}
                  onClick={goNotif}
                >
                  View more
                </p>
              </DropdownButton>
            </Nav.Link>
            <Nav.Link className="d-none d-lg-block">
              <img
                src="./assets/image/svg/RedProfileIcon.svg"
                alt=""
                onClick={goProfile}
              />
            </Nav.Link>
            <Nav.Link className="d-md-block d-lg-none">
              <p
                onClick={goProfile}
                style={{
                  padding: "8px 10px",
                  marginBottom: "0",
                  fontSize: "14px",
                  color: "#000",
                }}
              >
                Profile
              </p>
            </Nav.Link>
            <Nav.Link className="mx-2 d-none d-lg-block">
              <img src="./assets/image/svg/RedLine 9.svg" alt="" />
            </Nav.Link>
            <Nav.Link className="d-none d-lg-block">
              <div
                style={{
                  width: "117px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./assets/image/svg/RedKeluarIcon.svg"
                  alt=""
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                    width: "113px",
                    height: "46px",
                  }}
                  onClick={logout}
                />
              </div>
            </Nav.Link>
            <Nav.Link className="d-sm-block d-lg-none">
              <div
                style={{
                  fontSize: "14px",
                  marginLeft: "10px",
                  color: "#000",
                  paddingBottom: "17px",
                }}
                onClick={logout}
              >
                Sign out
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NotificationModal show={modalShow} onHide={() => setModalShow(false)} />

    </div>
  );
}

export default WhiteNav;
