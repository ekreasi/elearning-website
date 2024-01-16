import "./AchievementCard.css";
import { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const AchievementCard = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [totalBelajar, setTotalBelajar] = useState("");
  const [bergabungSejak, setBergabungSejak] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const poin = localStorage.getItem("poin");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://130.211.243.37/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.metaData && data.metaData.code === 200) {
            // Data retrieval was successful
            setName(data.data.name);
            setPosition(data.data.posisi);
            setTotalBelajar(data.data.totalSesiBelajar);
            setBergabungSejak(data.data.bergabungSejak);
            setIdPhoto(data.data.idPhoto);
          } else {
            console.error("API returned an error:", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="achievCard shadow">
      <div className="profile-content">
        <Container>
          <Row>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "16px", display: "inline" }}>
                <img
                  src="AchievmentIcon.svg"
                  alt=""
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                Your Achievement
              </div>
              <a
                style={{
                  color: "#E82827",
                  fontWeight: "600",
                  fontSize: "12px",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                See more
              </a>
            </div>
          </Row>
          <Row className="my-1 mt-3">
            <Col xs={4} className="status">
              Pre Basic
            </Col>
            <Col xs={6} className="my-auto">
              <ProgressBar variant="danger" now={0} className="bar" />
            </Col>
            <Col xs={1}>
              {/* <img src="Verified.svg" alt="" className="iconWidth"/> */}
              <img src="Unverified.svg" alt="" className="iconWidth" />
            </Col>
          </Row>
          <Row className="my-1">
            <Col xs={4} className="status">
              Basic
            </Col>
            <Col xs={6} className="my-auto">
              <ProgressBar variant="danger" now={0} className="bar" />
            </Col>
            <Col xs={1}>
              <img src="Unverified.svg" alt="" className="iconWidth" />
            </Col>
          </Row>
          <Row className="my-1">
            <Col xs={4} className="status">
              Beginner
            </Col>
            <Col xs={6} className="my-auto">
              <ProgressBar variant="danger" now={0} className="bar" />
            </Col>
            <Col xs={1}>
              <img src="Unverified.svg" alt="" className="iconWidth" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AchievementCard;
