import "./ScheduleCard.css";
import { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const ScheduleCard = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [totalBelajar, setTotalBelajar] = useState("");
  const [bergabungSejak, setBergabungSejak] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const poin = localStorage.getItem("poin");
  const [loadedData, setLoadedData] = useState(false);

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
            setLoadedData(true);
          } else {
            console.error("API returned an error:", data.metaData.message);
            setLoadedData(false);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoadedData(false);
        });
    }
  }, []);

  return (
    <div className="schedCard shadow">
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
                  src="ScheduleIcon.svg"
                  alt=""
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                Schedule
              </div>
              <a
                style={{
                  color: "rgba(127, 138, 154, 1)",
                  background: "rgba(127, 138, 154, 0.1)",
                  fontWeight: "500",
                  width: "90px",
                  height: "30px",
                  fontSize: "14px",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                  border: "1px solid rgba(212, 216, 221, 1)",
                  borderRadius: "20px",
                }}
              >
                <img src="CalendarIcon.svg" alt="" style={{ margin: "7px " }} />
                Weekly
              </a>
            </div>
          </Row>
          <Row className="my-1">
            <div
              className="d-flex flex-row justify-content-between text-center"
              style={{ marginTop: "24px" }}
            >
              <div>
                <p className="days">Sun</p>
                <p className="date">1</p>
              </div>
              <div>
                <p className="days">Mon</p>
                <p className="date">2</p>
              </div>
              <div>
                <p className="days">Tue</p>
                <p className="date">3</p>
              </div>
              <div
                style={{
                  background: "#E82827",
                  width: "38px",
                  height: "60px",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                }}
              >
                <p className="days">Wed</p>
                <p className="date">4</p>
              </div>
              <div>
                <p className="days">Thu</p>
                <p className="date">5</p>
              </div>
              <div>
                <p className="days">Fri</p>
                <p className="date">6</p>
              </div>
              <div>
                <p className="days">Sat</p>
                <p className="date">7</p>
              </div>
            </div>
          </Row>
          <Row>
            <div
              style={{
                border: "1px solid #d2d2d2",
                borderRadius: "4px",
                background: "#f9f9f9",
                height: "180px",
                padding: "10px",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#E82827",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline",
                  }}
                >
                  October 2023
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
              {loadedData ? (
                <>
                  <div className="mt-2">
                    <p className="day d-inline ">10:00 AM</p>
                    <p
                      className="date d-inline mx-4"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Traning: Speaking Basic
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="day d-inline">14:00 AM</p>
                    <p
                      className="date d-inline mx-4"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Discussion: Learning Material
                    </p>
                  </div>
                </>
              ) : (
                <p
                  className="d-flex justify-content-center align-items-center"
                  style={{ color: "#828282", fontSize: "14px", height: "140px" }}
                >
                  No Schedule
                </p>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ScheduleCard;
