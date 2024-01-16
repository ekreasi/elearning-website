import { Col, Container, Row } from "react-bootstrap";
import MainNotificationCard from "../Components/Card/MainNotifCard";
import NewNav from "../Components/Navbar/RedNav/NewNav";

const NotificationPage = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
      <NewNav/>
      <Container className="setting-container mt-4">
        <Col>
          <Row xs={12}>
            <MainNotificationCard/>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default NotificationPage;
