import { Col, Container, Row } from "react-bootstrap";
import ChangeCard from "../Components/Card/ChangeCard";
import WhiteNav from "../Components/Navbar/WhiteNav/WhiteNav"

const ChangePassword = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        height: "100vh",
        background: `url('bg_red_1 1.svg') no-repeat `,
        backgroundPosition: "center top 58px",
        backgroundSize: "100% 156px",
      }}
    >
      <WhiteNav />
      <Container className="setting-container">
        <Row>
          <Col xs={12}>
            <ChangeCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePassword;
