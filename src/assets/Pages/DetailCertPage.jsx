import { Col, Container, Row } from "react-bootstrap";
import DetailCertCard from "../Components/Card/DetailCertCard";
// import DashboardNavbar from "../Components/Navbar/Nav";

const DetailCertPage = () => {
  return (
    <div style={{ backgroundColor: "#FDFDFD", height: "100vh" }}>
      {/* <DashboardNavbar /> */}
      <Container className="setting-container">
        <Row>
          <Col>
            <DetailCertCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailCertPage;
