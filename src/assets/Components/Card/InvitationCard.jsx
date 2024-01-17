import "./InvitationCard.css";
import { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const InvitationCard = () => {
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
    <div className="invite-card shadow">
      <div className="profile-content">
        <Container>
          <Row>
            <div
              className="invitation-header mb-2" 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "16px", display: "inline" }}>
                <img
                  src="./assets/image/svg/InvitationLogo.svg"
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                  }}
                />
                New Invitation
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
                All Training
              </a>
            </div>
          </Row>
          <div
            className="d-flex gap-2 align-items-center"
            style={{
              background: "rgba(127, 138, 154, 0.08)",
              border: "1px solid rgba(127, 138, 154, 0.4)",
              borderRadius: "4px",
              maxHeight: "6.5rem",
            }}
          >
            {loadedData ? (
              <>
                <div className="ps-3">
                  <img src="./assets/image/svg/TrainingIcon.svg" alt="" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px", marginRight: "0px" }}>
                    {" "}
                    Training: Product Introduction
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "600" }}>
                    Detail{" "}
                    <a href="">
                      <img src="./assets/image/svg/ArrowRight.svg" alt="" />
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <p
                className="d-flex justify-content-center align-items-center"
                style={{ color: "#828282", fontSize: "14px" }}
              >
                No Invitation
              </p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default InvitationCard;
