import {
  Col,
  Container,
  DropdownButton,
  DropdownItem,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import WhiteNav from "../Components/Navbar/WhiteNav/WhiteNav";
import "./LibraryPage.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LibraryPage = () => {
  const navigate = useNavigate();
  const goBookmark = () => navigate("/bookmark");
  const goSelectedLib = () => navigate("/selected-library");

  return (
    <div
      className="w-100"
      style={{
        backgroundColor: "#FFF",
        height: "100vh",
      }}
    >
      <Helmet>
        <title>Library | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <WhiteNav />
      {/* <Container className="library-page">
        <Row className="library-page-header">
          <Col md={5} className="left-library-header">
            <p style={{ fontSize: "24px", marginBottom: "4px" }}>My Library</p>
            <p style={{ fontSize: "16px" }}>
              A collection of material from previous learning
            </p>
          </Col>
          <Col md={7} className="right-library-header align-items-center">
            <p className="sortbylib">Sort by</p>

            <DropdownButton
              className="library-page-dropdown"
              id="library-page-dropdown"
              title={
                <span className="library-dropdown-txt">
                  All <img src="./assets/image/svg/BlackDropdown.svg" alt="Dropdown Icon" />
                </span>
              }
            >
              <p className="training-dropdown-p">Event</p>
              <DropdownItem className="training-filter-button">
                <button className="">All</button> <button>Webinar</button>{" "}
                <button>Training</button> <button>Seminar</button>
              </DropdownItem>
            </DropdownButton>
            <input
              className="library-search-form"
              type="text"
              placeholder="Search with title or event."
              style={{
                background: `url('./assets/image/svg/SearchIcon.svg') no-repeat 16px center`,
                paddingLeft: "45px",
                backgroundColor: "#F5F6F8",
              }}
            />
            <div className="savedIcon" onClick={goBookmark}>
              <img src="./assets/image/svg/SaveLibraryIcon.svg" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="library-content-header">
          <Col md={8} className="library-name-col">
            Name
          </Col>
          <Col md={2} className="library-filter-col">
            Last Modified <img src="./assets/image/svg/LibrarySortIcon.svg" alt="" />
          </Col>
          <Col md={2} className="library-event-col">
            Event
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            Active Learning Methodologies
          </Col>
          <Col md={2} className="library-filter-col library-grey ">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Webinar
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            Communicating Effectively with Vulnerable Children and Young People
          </Col>
          <Col md={2} className="library-filter-col library-grey">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Training
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            What it means to be a professional teacher
          </Col>
          <Col md={2} className="library-filter-col library-grey">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Training
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            Rethinking multilingualism and the use of the L1 in English as a
            medium of instrcuction and the use of the
          </Col>
          <Col md={2} className="library-filter-col library-grey">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Webinar
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            Active Learning Methodologies
          </Col>
          <Col md={2} className="library-filter-col library-grey">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Webinar
          </Col>
        </Row>
        <Row className="library-page-content" onClick={goSelectedLib}>
          <Col md={8} className="library-name-col library-name">
            <img src="./assets/image/svg/LibraryFolderIcon.svg" alt="" className="library-icon" />
            Active Learning Methodologies
          </Col>
          <Col md={2} className="library-filter-col library-grey">
            5/10/2023 10:00
          </Col>
          <Col md={2} className="library-event-col library-grey">
            Webinar
          </Col>
        </Row>
        <Row className="library-page-pagination ">
          <Pagination className="d-flex justify-content-end">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Row>
      </Container> */}
      <div className="libCard">
        <div
          style={{
            background: `url('./assets/image/svg/bg_red_1 1.svg') `,
          }}
        >
          <div className="container p-3">
            <Row className="library-page-header">
              <Col md={5} className="left-library-header">
                <p style={{ fontSize: "24px", marginBottom: "4px" }}>
                  My Library
                </p>
                <p style={{ fontSize: "16px" }}>
                  A collection of material from previous learning
                </p>
              </Col>
              <Col md={7} className="right-library-header align-items-center">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                  <p className="sortbylib">Sort by</p>
                  <DropdownButton
                    className="library-page-dropdown"
                    id="library-page-dropdown"
                    title={
                      <span className="library-dropdown-txt">
                        All{" "}
                        <img
                          src="./assets/image/svg/BlackDropdown.svg"
                          alt="Dropdown Icon"
                        />
                      </span>
                    }
                  >
                    <p className="training-dropdown-p">Event</p>
                    <DropdownItem className="training-filter-button">
                      <button className="">All</button> <button>Webinar</button>{" "}
                      <button>Training</button> <button>Seminar</button>
                    </DropdownItem>
                  </DropdownButton>
                  <input
                    className="library-search-form"
                    type="text"
                    placeholder="Search with title or event."
                    style={{
                      background: `url('./assets/image/svg/SearchIcon.svg') no-repeat 16px center`,
                      paddingLeft: "45px",
                      backgroundColor: "#F5F6F8",
                    }}
                  />
                  <div className="savedIcon" onClick={goBookmark}>
                    <img src="./assets/image/svg/SaveLibraryIcon.svg" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container">
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  Last Modified
                  <img src="./assets/image/svg/LibrarySortIcon.svg" alt="" />
                </th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  Active Learning Methodologies
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Webinar</td>
              </tr>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  Communicating Effectively with Vulnerable Children and Young
                  People
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Training</td>
              </tr>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  What it means to be a professional teacher
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Training</td>
              </tr>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  Communicating Effectively with Vulnerable Children and Young
                  People
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Training</td>
              </tr>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  Rethinking multilingualism and the use of the L1 in English as
                  a medium of instrc...
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Training</td>
              </tr>
              <tr className="library-page-content" onClick={goSelectedLib}>
                <td className="library-name">
                  <img
                    src="./assets/image/svg/LibraryFolderIcon.svg"
                    alt=""
                    className="library-icon"
                  />
                  Communicating Effectively with Vulnerable Children and Young
                  People
                </td>
                <td className="library-grey">5/10/2023 10:00</td>
                <td className="library-grey">Training</td>
              </tr>
            </tbody>
          </Table>
          <Row className="library-page-pagination ">
            <Pagination className="d-flex justify-content-end">
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
