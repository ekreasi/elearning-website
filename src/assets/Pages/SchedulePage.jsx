import NewNav from "../Components/Navbar/RedNav/NewNav";
import Calendar from "../Components/Calendar/Calendar";
import { Col, Modal, Row } from "react-bootstrap";
import "./SchedulePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ScheduleModal = (props) => {
  var someDate = new Date();
  var date = someDate.setDate(someDate.getDate());
  var defaultValue = new Date(date).toISOString().split("T")[0];
  const [timeValue, setTimeValue] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="calendar-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Manual</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="#" className="schedule-form" id="schdform" required>
          <label htmlFor="Title">
            Title<p className="asterisk">*</p>
          </label>
          <br />
          <input
            type="text"
            placeholder="Add the title"
            className="schdinput"
          />
          <br />
          <label htmlFor="Title">
            Schedule<p className="asterisk">*</p>
          </label>

          <br />
          <input
            type="date"
            className="schd-date-input"
            style={{ marginRight: "8px" }}
            defaultValue={defaultValue}
          />
          <div className="cs-form d-inline">
            <input
              type="time"
              className="form-control schd-date-input"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
            />
          </div>
          <br />
          <label htmlFor="Title">Location</label>

          <br />
          <input
            type="text"
            placeholder="Add the location"
            className="schdinput"
          />
          <br />
          <label htmlFor="Title">
            Note<p className="asterisk">*</p>
          </label>

          <br />
          <textarea
            name="note"
            id="note"
            form="schdform"
            cols="70"
            rows="4"
            placeholder="Add note"
          ></textarea>
          <div className="modal-btn-container d-flex justify-content-center">
            <button onClick={props.onHide} className="schd-cancel-btn">
              Cancel
            </button>
            <button className="schd-submit-btn">Submit</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const SchedulePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);
  const [activeButton, setActiveButton] = useState("Event");
  const toggleActiveButton = (buttonName) => {
    setActiveButton(buttonName);
  };
  const navigate = useNavigate();
  const goZoom = () => navigate("/zoom-webinar");

  return (
    <div style={{ height: "100vh", background: "#eaeaea" }}>
      <Helmet>
        <title>Schedule | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />
      <div className="schedule-page">
        <Row>
          <Col xs={9} className="schedule-calendar overflow-hidden">
            <Calendar onModalShow={handleModalShow} />
          </Col>
          <Col xs={3} className="right-schedule-col overflow-hidden">
            <div className="right-schedule-header">
              <button
                onClick={() => toggleActiveButton("Event")}
                className={activeButton === "Event" ? "active-button" : ""}
              >
                Event
              </button>
              <button
                onClick={() => toggleActiveButton("Agenda")}
                className={activeButton === "Agenda" ? "active-button" : ""}
              >
                Agenda
              </button>
            </div>
            {activeButton === "Event" && (
              <div className="event-schedule-content" onClick={goZoom}>
                <p className="today-schedule">Today</p>
                <div className="schedule-event-container">
                  <p className="schedule-event-title">
                    Webinar: Active learning methodologies
                  </p>
                  <div className="schedule-image-container">
                    <div className="schedule-event-time d-flex ">
                      <img src="./assets/image/svg/JamTrainingIcon.svg" alt="" />
                      <p>10:00 AM - 12:00 PM</p>
                    </div>
                    <div className="schedule-event-location d-flex">
                      <img src="./assets/image/svg/LocationTrainingIcon.svg" alt="" />
                      <p className="link">https://zoom.us/j/5551112222</p>
                    </div>
                  </div>
                </div>
                <div className="schedule-event-container">
                  <p className="schedule-event-title">
                    Discussion: Learning Material
                  </p>
                  <div className="schedule-image-container">
                    <div className="schedule-event-time d-flex ">
                      <img src="./assets/image/svg/JamTrainingIcon.svg" alt="" />
                      <p>14:00 PM</p>
                    </div>
                    <div className="schedule-event-location d-flex">
                      <img src="./assets/image/svg/LocationTrainingIcon.svg" alt="" />
                      <p>Lt.3 Meeting Room</p>
                    </div>
                    <div className="schedule-event-person d-flex">
                      <img src="./assets/image/svg/FileIcon.svg" alt="" />
                      <p>With Mrs.Rianti and Mr.Surya.Lorem ipsum dolor</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Agenda" && (
              <div className="agenda-schedule-content">
                <img src="./assets/image/svg/October.svg" alt="" />
                <div className="agenda-schedule-container ">
                  <div className="agenda-date d-flex flex-column align-items-center">
                    <p className="schedule-day">Tue</p>
                    <p className="schedule-date">10</p>
                  </div>
                  <div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Training:Speaking Basics
                      </p>
                      <p className="agenda-schedule-time">10:00 - 12:00</p>
                    </div>
                  </div>
                </div>
                <div className="agenda-schedule-container ">
                  <div className="agenda-date d-flex flex-column align-items-center">
                    <p className="schedule-day">Wed</p>
                    <p className="schedule-date">18</p>
                  </div>
                  <div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Training: Product Introduction
                      </p>
                      <p className="agenda-schedule-time">10:10 - 11:10</p>
                    </div>
                  </div>
                </div>
                <div className="agenda-schedule-container ">
                  <div className="agenda-date d-flex flex-column align-items-center">
                    <p className="schedule-day">Mon</p>
                    <p className="schedule-date">23</p>
                  </div>
                  <div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Training: Talent PT 2
                      </p>
                      <p className="agenda-schedule-time">09:10 - 10:10</p>
                    </div>
                  </div>
                </div>
                <img src="./assets/image/svg/November.svg" alt="" />
                <div className="agenda-schedule-container ">
                  <div className="agenda-date d-flex flex-column align-items-center">
                    <p className="schedule-day">Wed</p>
                    <p className="schedule-date">15</p>
                  </div>
                  <div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Training:Regulation
                      </p>
                      <p className="agenda-schedule-time">10:00 - 12:00</p>
                    </div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Meet-up with Mrs.Ayu
                      </p>
                      <p className="agenda-schedule-time">15:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <div className="agenda-schedule-container ">
                  <div className="agenda-date d-flex flex-column align-items-center">
                    <p className="schedule-day">Tue</p>
                    <p className="schedule-date">10</p>
                  </div>
                  <div>
                    <div className="agenda-title">
                      <p className="agenda-schedule-title">
                        Training:Speaking Basics
                      </p>
                      <p className="agenda-schedule-time">10:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
      <ScheduleModal show={modalShow} onHide={handleModalClose} />
    </div>
  );
};

export default SchedulePage;
