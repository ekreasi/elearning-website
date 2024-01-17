import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../Components/Card/ProfileCard";
import ProgressCard from "../Components/Card/ProgressCard";
import ScheduleCard from "../Components/Card/ScheduleCard";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import AchievementCard from "../Components/Card/AchievementCard";
import InvitationCard from "../Components/Card/InvitationCard";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const navigate = useNavigate();
  const goChat = () => {
    navigate("/chat");
  };

  return (
    <div
      className="dashboard"
      style={{
        backgroundColor: "#E5E5E5",
        minHeight: "100vh",
        overflow: "visible",
      }}
    >
      <Helmet>
        <title>Dashboard | e-Learning</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <NewNav />
      <Container>
        <Row className="justify-content-between">
          <Col xs={4}>
            <ProfileCard />
          </Col>
          <Col xs={4}>
            <AchievementCard />
          </Col>
          <Col xs={3}>
            <InvitationCard />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ScheduleCard />
          </Col>
          <Col xs={8}>
            <ProgressCard />
          </Col>
        </Row>
      </Container>
      <button
        className="floating-btn"
        style={{ boxShadow: "2px 6px 10px rgba(0, 0, 0, 0.2)" }}
        onClick={goChat}
      >
        <img
          src="./assets/image/svg/FloatingIcon.svg"
          style={{ width: "24px", marginRight: "5px" }}
          alt=""
        />
        Chatroom
      </button>
    </div>
  );
};

export default Dashboard;
