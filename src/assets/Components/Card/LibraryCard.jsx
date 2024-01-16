import { Col, Container, Row } from "react-bootstrap";
import "./LibraryCard.css";
import SmallLibCard from "./SmallLibCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LibraryCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const goDetail = () => {
    navigate("/detailLib");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://130.211.243.37/api/library/category", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.metaData && data.metaData.code === 200) {
            setData(data.data);
            console.log(data.data);
          } else {
            console.error("API error: ", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="backgroundCard">
      <Container fluid="md">
        <Row>
          <Col xs={12} md={6} lg={4} style={{ display: "flex" }}>
            <span
              className="cert-text"
              style={{ color: "#2f523c", fontWeight: "bold" }}
            >
              Category
            </span>
          </Col>
        </Row>
        <Row className="cert-row cert-container">
          {data.map((smallCard) => (
            <SmallLibCard
              key={smallCard.id}
              title={smallCard.title}
              image={smallCard.img}
              onClick={goDetail}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LibraryCard;
