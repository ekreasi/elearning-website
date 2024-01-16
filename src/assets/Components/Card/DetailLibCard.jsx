import { Col, Container, Dropdown, Row } from "react-bootstrap";
import "./LibraryCard.css";
import SmallLibCard from "./SmallLibCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const DetailLibCard = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showIframe, setShowIframe] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Newest");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetch(
        "http://130.211.243.37/api/library/document?categoryId=5a16aea5-0f88-441d-a3f5-d14f0ccdd46f",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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

  const handleCardClick = (id, url) => {
    setSelectedData(url);
    setShowIframe(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const sortData = (data, filter) => {
    if (filter === "Newest") {
      return data.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
    } else if (filter === "Oldest") {
      return data.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
    } else if (filter === "Alphabetic") {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    return data;
  };

  const filteredData = sortData(
    data.filter((smallCard) =>
      smallCard.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    selectedFilter
  );

  return (
    <div>
      {showIframe ? (
        <Row>
          <Col xs={12}>
            <iframe className="myDocument" src={selectedData}></iframe>
          </Col>
        </Row>
      ) : (
        <div className="backgroundCard">
          <Container fluid="md">
            <Row>
              <Col xs={6}>
                <span
                  className="cert-text"
                  style={{ color: "#2f523c", fontWeight: "bold" }}
                >
                  Training Batch X
                </span>
              </Col>
              <Col xs={6}>
                <div
                  style={{
                    marginLeft: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="filter-dropdown">
                      <FontAwesomeIcon
                        className="filter"
                        icon={faArrowDownWideShort}
                        style={{ color: "#365143", cursor: "pointer" }}
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setSelectedFilter("Newest")}
                      >
                        Newest
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedFilter("Oldest")}
                      >
                        Oldest
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedFilter("Alphabetic")}
                      >
                        Alphabetic
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    style={{
                      color: "#7f8082",
                      borderRadius: "15px",
                      backgroundColor: "#f5f6f8",
                      padding: "5px",
                      marginLeft: "5px",
                    }}
                    type="text"
                    placeholder="Search... &#128269;"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </Col>
            </Row>
            <Row className="cert-row cert-container">
              {filteredData.map((smallCard) => (
                <SmallLibCard
                  key={smallCard.id}
                  title={smallCard.name}
                  image={smallCard.imageUrl}
                  docId={smallCard.id}
                  onClick={(docId) =>
                    handleCardClick(smallCard.id, smallCard.fileUrl, docId)
                  }
                />
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default DetailLibCard;
