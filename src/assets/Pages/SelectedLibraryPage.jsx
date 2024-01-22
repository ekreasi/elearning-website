import { Button, Card, Col, Modal, Nav, Row } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./SelectedLibraryPage.css";
import { useEffect, useRef, useState } from "react";

const LibraryImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="library-image-modal"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src="BigImageImage.svg" alt="" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
};

const LibraryVideoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="video-library-modal"
    >
      <Modal.Body>
        <p className="modal-body-title">Session 1</p>
        <video
          src="./assets/vid1.mp4"
          className="thumbnail-image"
          autoPlay
          controls
          controlsList="nodownload"
        ></video>
      </Modal.Body>
    </Modal>
  );
};

const SelectedLibraryPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [imageModalShow, setImageModalShow] = useState(false);
  const [videoModalShow, setVideoModalShow] = useState(false);
  const [activeKey, setActiveKey] = useState("/home");
  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  const goPdf = (e) => {
    e.preventDefault();
    window.location.href = "/docs.pdf";
  };

  const audioRef = useRef(null);

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      console.log("Paused");
      handlePause();
    } else {
      console.log("Play");
      handlePlay();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const formatDuration = (durationSeconds) => {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div style={{ background: "#e5e5e5", height: "100vh" }}>
      <NewNav />
      <div className="selected-library-page">
        <div className="selected-library-header">
          <div className="top-library-header">
            <div className="left-selected-header">
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#7F8A9A",
                  marginBottom: "4px",
                }}
              >
                WEBINAR
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#c12121",
                }}
              >
                Active Learning Methodologies
              </p>
            </div>
            <div className="right-selected-header">
              <button className="all-libraries-btn">All libraries</button>
            </div>
          </div>
          <div className="selected-library-nav">
            <Nav defaultActiveKey={activeKey} onSelect={handleSelect} as="ul">
              <Nav.Item
                as="li"
                className={activeKey === "/home" ? "active" : ""}
              >
                <Nav.Link eventKey="/home" href="#" className="material-icon">
                  {activeKey === "/home" ? (
                    <img src="./assets/image/svg/RedMaterialLibraryIcon.svg" alt="" />
                  ) : (
                    <img src="./assets/image/svg/MaterialLibraryIcon.svg" alt="" />
                  )}
                  Materi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                as="li"
                className={activeKey === "image" ? "active" : ""}
              >
                <Nav.Link eventKey="image">
                  {activeKey === "image" ? (
                    <img src="./assets/image/svg/RedImageLibraryIcon.svg" alt="" />
                  ) : (
                    <img src="./assets/image/svg/ImageLibraryIcon.svg" alt="" />
                  )}
                  Image
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                as="li"
                className={activeKey === "audio" ? "active" : ""}
              >
                <Nav.Link eventKey="audio">
                  {activeKey === "audio" ? (
                    <img src="./assets/image/svg/RedAudioLibraryIcon.svg" alt="" />
                  ) : (
                    <img src="./assets/image/svg/AudioLibraryIcon.svg" alt="" />
                  )}
                  Audio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                as="li"
                className={activeKey === "video" ? "active" : ""}
              >
                <Nav.Link eventKey="video">
                  {activeKey === "video" ? (
                    <img src="./assets/image/svg/RedVideoLibraryIcon.svg" alt="" />
                  ) : (
                    <img src="./assets/image/svg/VideoLibraryIcon.svg" alt="" />
                  )}
                  Video
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <hr />
        </div>
        <div className="selected-library-content">
          {activeKey === "/home" && (
            <div className="material-library-container">
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdfs
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                    onClick={goPdf}
                  >
                    Read
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/LibraryPdfIcon.svg" alt="" />
                  <div className="content-txt">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#231f20",
                        marginBottom: "4px",
                      }}
                    >
                      Gentle Discipline in classroom management system.pdf
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    Read
                  </p>
                </Col>
              </Row>
            </div>
          )}
          {activeKey === "image" && (
            <div className="image-library-container">
              <Row className="bookmark-card-row d-flex justify-content-center">
                <Card
                  style={{
                    width: "195px",
                    height: "260px",
                    overflow: "hidden",
                    margin: "24px 14px 14px",
                    backgroundSize: "contain",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        src="./assets/image/svg/Database.svg"
                        style={{ width: "100%", height: "125.29px" }}
                      />
                    </Card.Title>
                    <Card.Text>Teacher Workforce Database</Card.Text>
                    <div className="bookmark-card-link">
                      <Card.Link href="#">
                        <img
                          src="./assets/image/svg/UnsavedLibraryIcon.svg"
                          alt=""
                          style={{ marginRight: "85px" }}
                        />
                      </Card.Link>
                      <Card.Link href="#" className="bookmark-view">
                        View
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "195px",
                    height: "260px",
                    overflow: "hidden",
                    margin: "24px 14px 14px",
                    backgroundSize: "contain",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        src="./assets/image/svg/Periodic.svg"
                        style={{ width: "100%", height: "125.29px" }}
                      />
                    </Card.Title>
                    <Card.Text>Periodic Structured Data</Card.Text>
                    <div className="bookmark-card-link">
                      <Card.Link href="#">
                        <img
                          src="./assets/image/svg/UnsavedLibraryIcon.svg"
                          alt=""
                          style={{ marginRight: "85px" }}
                        />
                      </Card.Link>
                      <Card.Link href="#" className="bookmark-view">
                        View
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "195px",
                    height: "260px",
                    overflow: "hidden",
                    margin: "24px 14px 14px",
                    backgroundSize: "contain",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        src="./assets/image/svg/IssueSupport.svg"
                        style={{ width: "100%", height: "125.29px" }}
                      />
                    </Card.Title>
                    <Card.Text>Some issue that need support</Card.Text>
                    <div className="bookmark-card-link">
                      <Card.Link href="#">
                        <img
                          src="./assets/image/svg/UnsavedLibraryIcon.svg"
                          alt=""
                          style={{ marginRight: "85px" }}
                        />
                      </Card.Link>
                      <Card.Link
                        href="#"
                        className="bookmark-view"
                        onClick={() => setImageModalShow(true)}
                      >
                        View
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "195px",
                    height: "260px",
                    overflow: "hidden",
                    margin: "24px 14px 14px",
                    backgroundSize: "contain",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        src="./assets/image/svg/Percentages.svg"
                        style={{ width: "100%", height: "125.29px" }}
                      />
                    </Card.Title>
                    <Card.Text>
                      Precentages of the desired characteristic
                    </Card.Text>
                    <div className="bookmark-card-link">
                      <Card.Link href="#">
                        <img
                          src="./assets/image/svg/UnsavedLibraryIcon.svg"
                          alt=""
                          style={{ marginRight: "85px" }}
                        />
                      </Card.Link>
                      <Card.Link href="#" className="bookmark-view">
                        View
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "195px",
                    height: "260px",
                    overflow: "hidden",
                    margin: "24px 14px 14px",
                    backgroundSize: "contain",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <img
                        src="./assets/image/svg/DataDriven.svg"
                        style={{ width: "100%", height: "125.29px" }}
                      />
                    </Card.Title>
                    <Card.Text>3 Data Driven Instruction</Card.Text>
                    <div className="bookmark-card-link">
                      <Card.Link href="#">
                        <img
                          src="./assets/image/svg/UnsavedLibraryIcon.svg"
                          alt=""
                          style={{ marginRight: "85px" }}
                        />
                      </Card.Link>
                      <Card.Link href="#" className="bookmark-view">
                        View
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          )}
          {activeKey === "audio" && (
            <div className="audio-library-container">
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <div className="library-content-title">
                      <p className="library-inner-title">
                        Big ideas for little minds!
                      </p>
                      <div className="track-duration">
                        <p>
                          {formatDuration(currentTime)}/
                          {formatDuration(duration)} secs
                        </p>
                      </div>
                    </div>

                    <div className="audio-duration">
                      {/* <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p> */}
                      <audio src="./assets/sound.mp3" ref={audioRef}></audio>
                      <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                      />
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <button onClick={handlePlayPause}>
                      {isPlaying ? (
                        <img
                          src="./assets/image/svg/BlackPauseIcon.svg"
                          alt=""
                          className="play-pause-button"
                        />
                      ) : (
                        <img
                          src="./assets/image/svg/RedPlayIcon.svg"
                          alt=""
                          className="play-pause-button"
                        />
                      )}
                    </button>
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Teaching your students to learn and unlearn
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Piloting PBL in the primary classroom
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Big ideas for little minds!
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Piloting PBL in the primary classroom
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Big ideas for little minds!
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
              </Row>
              <Row className="selected-content-row">
                <Col
                  xs={6}
                  className="left-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Piloting PBL in the primary classroom
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
                <Col
                  xs={6}
                  className="right-selected-content d-flex justify-content-between align-items-center"
                >
                  <img src="./assets/image/svg/MicrofonLibraryIcon.svg" alt="" />
                  <div className="content-txt">
                    <p className="library-inner-title">
                      Big ideas for little minds!
                    </p>
                    <div className="audio-duration">
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        1.5 KB
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        09/01/23
                      </p>
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#7f8a9a",
                          marginBottom: "0",
                        }}
                      >
                        10:15
                      </p>
                    </div>
                  </div>
                  <img src="./assets/image/svg/UnsavedLibraryIcon.svg" alt="" />
                  <img src="./assets/image/svg/RedLine 9.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#e82827",
                      fontSize: "14px",
                      marginBottom: "0",
                    }}
                  >
                    <img src="./assets/image/svg/RedPlayIcon.svg" alt="" />
                  </p>
                </Col>
              </Row>
            </div>
          )}
          {activeKey === "video" && (
            <div className="video-library-container">
              <Row className="selected-content-row">
                <Col xs={3}>
                  <div
                    className="library-video-img"
                    onClick={() => setVideoModalShow(true)}
                  >
                    <img
                      src="./assets/image/seaside.jpg"
                      alt=""
                      className="thumbnail-image"
                    />
                    <img
                      src="./assets/image/svg/CloseVideoBtn.svg"
                      alt=""
                      className="play-lib-btn"
                    />
                    <img
                      src="./assets/image/svg/VideoBookmark.svg"
                      alt=""
                      className="lib-bookmark-video"
                    />
                  </div>
                  <p className="video-title">Session 1: Research Methods</p>
                  <p className="video-speaker">Speaker: Eugenia Dell&apos;Osa</p>
                </Col>
                <Col xs={3}>
                  <div
                    className="library-video-img"
                    onClick={() => setVideoModalShow(true)}
                  >
                    <img
                      src="./assets/image/seaside.jpg"
                      alt=""
                      className="thumbnail-image"
                    />
                    <img
                      src="./assets/image/svg/CloseVideoBtn.svg"
                      alt=""
                      className="play-lib-btn"
                    />
                    <img
                      src="./assets/image/svg/VideoBookmark.svg"
                      alt=""
                      className="lib-bookmark-video"
                    />
                  </div>
                  <p className="video-title">Session 2: classroom management system</p>
                  <p className="video-speaker">Speaker: Frida Rianita</p>
                </Col>
                <Col xs={3}>
                  <div
                    className="library-video-img"
                    onClick={() => setVideoModalShow(true)}
                  >
                    <img
                      src="./assets/image/seaside.jpg"
                      alt=""
                      className="thumbnail-image"
                    />
                    <img
                      src="./assets/image/svg/CloseVideoBtn.svg"
                      alt=""
                      className="play-lib-btn"
                    />
                    <img
                      src="./assets/image/svg/VideoBookmark.svg"
                      alt=""
                      className="lib-bookmark-video"
                    />
                  </div>
                  <p className="video-title">Session 3: Train the trainer</p>
                  <p className="video-speaker">Speaker: Rio Hirawan</p>
                </Col>
                <Col xs={3}>
                  <div
                    className="library-video-img"
                    onClick={() => setVideoModalShow(true)}
                  >
                    <img
                      src="./assets/image/seaside.jpg"
                      alt=""
                      className="thumbnail-image"
                    />
                    <img
                      src="./assets/image/svg/CloseVideoBtn.svg"
                      alt=""
                      className="play-lib-btn"
                    />
                    <img
                      src="./assets/image/svg/VideoBookmark.svg"
                      alt=""
                      className="lib-bookmark-video"
                    />
                  </div>
                  <p className="video-title">Session 4: Methods Research</p>
                  <p className="video-speaker">Speaker: Dell&apos;Osa Eugenia</p>
                </Col>
              </Row>
            </div>
          )}

          <LibraryImageModal
            show={imageModalShow}
            onHide={() => setImageModalShow(false)}
          />

          <LibraryVideoModal
            show={videoModalShow}
            onHide={() => setVideoModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedLibraryPage;
