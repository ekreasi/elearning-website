import { Col, Container, Row } from "react-bootstrap";
// import DashboardNavbar from "../Components/Navbar/Nav";

const FeedbackPage = () => {
  return (
    <div style={{ backgroundColor: "#f6fdf8", height: "100vh" }}>
      {/* <DashboardNavbar /> */}
      <Container fluid="md" className="feedback">
        <Row className="feedback-row">
          <Col xs={5} className="feedback-score"></Col>
          <Col xs={1} className="feedback-score">
            1
          </Col>
          <Col xs={1} className="feedback-score">
            2
          </Col>
          <Col xs={1} className="feedback-score">
            3
          </Col>
          <Col xs={1} className="feedback-score">
            4
          </Col>
          <Col xs={1} className="feedback-score">
            5
          </Col>
        </Row>
        <Row className="question-row">
          <Col xs={5} className="feedback-question">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            esse quod commodi blanditiis corporis quis sint et repudiandae. Ex,
            fugit.
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="1" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="2" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="3" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="4" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="5" />
            </label>
          </Col>
        </Row>
        <Row className="question-row">
          <Col xs={5} className="feedback-question">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            esse quod commodi blanditiis corporis quis sint et repudiandae. Ex,
            fugit.
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="1" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="2" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="3" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="4" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="5" />
            </label>
          </Col>
        </Row>
        <Row className="question-row">
          <Col xs={5} className="feedback-question">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            esse quod commodi blanditiis corporis quis sint et repudiandae. Ex,
            fugit.
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="1" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="2" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="3" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="4" />
            </label>
          </Col>
          <Col xs={1} className="feedback-score">
            <label>
              <input type="radio" name="question1" value="5" />
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeedbackPage;
