import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";

const SmallCertCard = ({ title, image, id }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${id}`, {state: {title}});
  };

 

  return (
    <Row>
      <Col xs={12} md={6} lg={4} className="my-4">
        <Card style={{ width: "10rem", height: "17rem", border: "none" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{
              borderRadius: "10px 0px 10px 10px",
              marginLeft: "0px",
              backgroundColor: "#F3F1F4",
            }}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
            <Button
              style={{ background: "#2f523c", borderRadius: "20px" }}
              className="mx-3"
              onClick={() => goDetail()}
            >
              Download
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SmallCertCard;
