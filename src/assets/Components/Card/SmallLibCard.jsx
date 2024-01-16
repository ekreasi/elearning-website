import { faFileArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const SmallCertCard = ({ title, image, onClick, docId }) => {
  const [isClickedHeart, setIsClickedHeart] = useState(false);
  const [isClickedArrow, setIsClickedArrow] = useState(false);
  const token = localStorage.getItem("token");

  const handleFavorite = async () => {
    const favoriteFile = {
      documentId: docId,
    };

    try {
      const response = await fetch(
        "http://130.211.243.37/api/library/document/favorite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(favoriteFile),
        }
      );

      if (response.ok) {
        console.log("Added to favorites:", docId);
      } else {
        console.error("Error adding favorite file", response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleClickedHeart = () => {
    setIsClickedHeart(!isClickedHeart);
    handleFavorite(); 
  };

  const toggleClickedArrow = () => {
    setIsClickedArrow(!isClickedArrow);
  };

  const isDetailLibPage = location.pathname === "/detailLib";

  return (
    <Row>
      <Col xs={12} md={6} lg={4} className="my-4">
        <Card
          style={{
            width: "10rem",
            height: "17rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Card.Img
            variant="top"
            className="mx-auto mt-3"
            src={image}
            style={{
              borderRadius: "5px",
              marginLeft: "0px",
              backgroundColor: "#F3F1F4",
              maxWidth: "70%",
            }}
            onClick={() => onClick(docId)}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
            {isDetailLibPage && (
              <>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      color: isClickedHeart ? "#ce365a" : "#f5f6f8",
                      margin: "0 7px",
                      fontSize: "20px",
                    }}
                    onClick={toggleClickedHeart}
                  />
                  <FontAwesomeIcon
                    icon={faFileArrowDown}
                    style={{
                      color: isClickedArrow ? "#e69522" : "#f5f6f8",
                      margin: "0 7px",
                      fontSize: "20px",
                    }}
                    onClick={toggleClickedArrow}
                  />
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SmallCertCard;
