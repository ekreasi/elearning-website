import "./ProfileCard.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProfileCard = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [totalBelajar, setTotalBelajar] = useState("");
  const [bergabungSejak, setBergabungSejak] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const poin = localStorage.getItem("poin");
  const [dataLoaded, setDataLoaded] = useState(false);

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
          if (data.metaData && data.metaData.code === 200) {
            setName(data.data.name);
            setPosition(data.data.posisi);
            setTotalBelajar(data.data.totalSesiBelajar);
            setBergabungSejak(data.data.bergabungSejak);
            setIdPhoto(data.data.idPhoto);
            setDataLoaded(true);
          } else {
            console.error("API returned an error:", data.metaData.message);
            setDataLoaded(false);
          }
        })
        .catch((err) => {
          console.error(err);
          setDataLoaded(false);
        });
    }
  }, []);

  const replaceAltImg = (e) => {
    e.currentTarget.src = "./assets/image/svg/dum.svg";
  };

  return (
    <div className="profCard ">
      <div className="profile-content">
        <Container>
          <Row>
            <Col xs={3}>
              <img
                className="profile-image"
                src=/*{idPhoto}*/"./assets/image/svg/dum.svg"
                alt=""
                onError={replaceAltImg}
              />
            </Col>
            <Col xs={9} className="d-flex flex-column">
              <div
                className="profile-name fw-bold"
                style={{ margin: "15px 0 -10px -7px", fontSize: "24px" }}
              >
                {dataLoaded ? name : "Maya Nurmalasari"}
              </div>
              <div style={{ fontSize: "12px" }}>
                <img
                  className="profile-image"
                  src="./assets/image/svg/mingcute_certificate-fill.svg"
                  alt=""
                  style={{ width: "30px", height: "30px", marginLeft: "-12px" }}
                />
                - 
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <div className="profile-text">
                Poin
                <p className="text-custom">{dataLoaded ? poin : 0}</p>
              </div>
            </Col>

            <Col xs={6}>
              <div className="profile-text">
                Total Sesi Belajar
                <p className="text-custom">{dataLoaded ? totalBelajar : 0}</p>
              </div>
            </Col>

            <Col xs={4}>
              <div className="profile-text">
                Bergabung Sejak
                <p className="text-custom">{dataLoaded ? bergabungSejak : 0}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileCard;
