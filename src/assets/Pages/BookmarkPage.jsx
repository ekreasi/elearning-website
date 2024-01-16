import { Card, Col, Row } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./BookmarkPage.css";
import { useNavigate } from "react-router-dom";

const BookmarkPage = () => {
  const navigate = useNavigate();
  const goLibrary = () => {
    navigate("/library");
  };

  return (
    <div style={{ background: "#e5e5e5", height: "100vh" }}>
      <NewNav />
      <div className="bookmark-page">
        <Row className="d-flex flex-row align-items-center header-row">
          <Col
            xs={4}
            className="left-bookmark-header d-flex align-items-center"
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "24px",
                marginRight: "26px",
              }}
            >
              Bookmark
            </p>
            <p
              style={{ fontWeight: "600", fontSize: "14px", color: "#e82827" }}
            >
              Category
            </p>
          </Col>
          <Col xs={6} className="input-bookmark-header">
            <input
              className="bookmark-search-form"
              type="text"
              placeholder="Search with title or event."
            />
          </Col>
          <Col
            xs={2}
            className="right-bookmark-header d-flex justify-content-end"
          >
            <button className="all-libraries-btn" onClick={goLibrary}>
              All libraries
            </button>
          </Col>
          <hr />
        </Row>
        <Row className="bookmark-card-row d-flex justify-content-center">
          <Card
            style={{
              width: "195px",
              height: "260px",
              overflow: "hidden",
              margin: "24px 14px 14px",
              backgroundSize: "contain",
            }}
          >
            <Card.Body>
              <Card.Title>
                <img
                  src="ModulImage.svg"
                  style={{ width: "100%", height: "125.29px" }}
                />
              </Card.Title>
              <Card.Text>
                Setting up activities and tasks efficiently in 5 Ste...pdf
              </Card.Text>
              <div className="bookmark-card-link">
                <Card.Link href="#">
                  <img
                    src="SavedLibraryIcon.svg"
                    alt=""
                    style={{ marginRight: "85px" }}
                  />
                </Card.Link>
                <Card.Link href="#" className="bookmark-view">
                  View
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "195px",
              height: "260px",
              overflow: "hidden",
              margin: "24px 14px 14px",
              backgroundSize: "contain",
            }}
          >
            <Card.Body>
              <Card.Title>
                <img
                  src="CreateMaterials.svg"
                  style={{ width: "100%", height: "125.29px" }}
                />
              </Card.Title>
              <Card.Text>
                Creating your own learning materials - six easy ste...pdf
              </Card.Text>
              <div className="bookmark-card-link">
                <Card.Link href="#">
                  <img
                    src="SavedLibraryIcon.svg"
                    alt=""
                    style={{ marginRight: "85px" }}
                  />
                </Card.Link>
                <Card.Link href="#" className="bookmark-view">
                  View
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "195px",
              height: "260px",
              overflow: "hidden",
              margin: "24px 14px 14px",
              backgroundSize: "contain",
            }}
          >
            <Card.Body>
              <Card.Title>
                <img
                  src="Periodic.svg"
                  style={{ width: "100%", height: "125.29px" }}
                />
              </Card.Title>
              <Card.Text>Periodic Structured Data.jpg</Card.Text>
              <div className="bookmark-card-link">
                <Card.Link href="#">
                  <img
                    src="SavedLibraryIcon.svg"
                    alt=""
                    style={{ marginRight: "85px" }}
                  />
                </Card.Link>
                <Card.Link href="#" className="bookmark-view">
                  View
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "195px",
              height: "260px",
              overflow: "hidden",
              margin: "24px 14px 14px",
              backgroundSize: "contain",
            }}
          >
            <Card.Body>
              <Card.Title>
                <img
                  src="Database.svg"
                  style={{ width: "100%", height: "125.29px" }}
                />
              </Card.Title>
              <Card.Text>Teacher Workforce database.jpg</Card.Text>
              <div className="bookmark-card-link">
                <Card.Link href="#">
                  <img
                    src="SavedLibraryIcon.svg"
                    alt=""
                    style={{ marginRight: "85px" }}
                  />
                </Card.Link>
                <Card.Link href="#" className="bookmark-view">
                  View
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "195px",
              height: "260px",
              overflow: "hidden",
              margin: "24px 14px 14px",
              backgroundSize: "contain",
            }}
          >
            <Card.Body>
              <Card.Title>
                <img
                  src="Wav.svg"
                  style={{ width: "100%", height: "125.29px" }}
                />
              </Card.Title>
              <Card.Text>Big Idea For Little Minds.wav</Card.Text>
              <div className="bookmark-card-link">
                <Card.Link href="#">
                  <img
                    src="SavedLibraryIcon.svg"
                    alt=""
                    style={{ marginRight: "85px" }}
                  />
                </Card.Link>
                <Card.Link href="#" className="bookmark-view">
                  View
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default BookmarkPage;
