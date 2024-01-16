import { Col, Container, Row } from "react-bootstrap";
import SmallCertCard from "./SmallCertCard";
import { useEffect, useState } from "react";

const CertificateCard = () => {
  const [certData, setCertData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://130.211.243.37/api/elearning/certificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.metaData && data.metaData.code === 200) {
        setCertData(data.data);
      } else {
        console.error("API returned an error: ", data.metaData.message);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div className="backgroundCard">
      <Container fluid="md">
        <Row className="certRow">
          <Col xs={12} md={6} lg={4} style={{ display: "flex" }}>
            <span
              className="cert-text"
              style={{ color: "#2f523c", fontWeight: "bold" }}
            >
              My Certificate
            </span>
          </Col>
        </Row>
        <Row className="cert-row cert-container">
          {certData.map((cert) => (
            <SmallCertCard
              key={cert.id}
              title={cert.name}
              image={cert.urlImageCertificate}
              id={cert.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CertificateCard;
