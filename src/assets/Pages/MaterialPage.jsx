import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChapterNav from "../Components/Navbar/RedNav/ChapterNav";
import "./MaterialPage.css";

const MaterialPage = () => {
  const navigate = useNavigate();
  const [contentId, setContentId] = useState("");
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(-1);
  const [maxPage, setMaxPage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const formData = new FormData();
    formData.append("chapterId", id);

    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://130.211.243.37/api/elearning/list-content", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.metaData && data.metaData.code === 200) {
            if (data.data.length > 0) {
              setData(data.data);
              setMaxPage(data.data.length);
              const firstContentId = data.data[0].id;
              setContentId(firstContentId);
            } else {
              console.error("No content data found.");
            }
          } else {
            console.error("API error: ", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  // useEffect(() => {
  //   if (nextPage > maxPage) {
  //     navigate("/quiz");
  //   }
  // }, [nextPage, maxPage, navigate]);

  const handleCancel = () => {
    navigate("/learning");
  };

  const handleQuiz = () => {
    console.log("clicked");
    navigate("/quiz-start");
  };

  const handleNext = () => {
    if (nextPage < data.length) {
      const nextContentId = data[nextPage].id;
      setContentId(nextContentId);
      setPrevPage(nextPage);
      setNextPage(nextPage + 1);
    } else {
      console.error("No More Pages");
    }
  };

  const handlePrevious = () => {
    if (prevPage >= 0) {
      const prevContentId = data[prevPage - 1].id;
      setContentId(prevContentId);
      setNextPage(prevPage);
      setPrevPage(prevPage - 1);
    } else {
      console.error("No More Pages");
    }
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
      <ChapterNav />
      <div className="material-page">
        <Row>
          <Col>
            <div className="material-image">
              <div className="learning-includes">
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    marginBottom: "26px",
                  }}
                >
                  This learning includes:{" "}
                </p>
                <span style={{ fontSize: "14px" }}>
                  <img src="../assets/image/svg/MaterialModulIcon.svg" alt="" />
                  Material and video explanation
                </span>
                <span style={{ fontSize: "14px", marginLeft: "50px" }}>
                  <img src="../assets/image/svg/QuizModulIcon.svg" alt="" />
                  Complete the quiz in the last chapter
                </span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  <img src="../assets/image/svg/AccessModulIcon.svg" alt="" />
                  Access on mobile and website
                </span>
                <span style={{ fontSize: "14px", marginLeft: "53px" }}>
                  <img src="../assets/image/svg/CertifModulIcon.svg" alt="" />
                  Certificate of completion for all chapters in the module
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="material-row align-items-center">
          <Col xs={4}></Col>
          <Col xs={4}>
            <span className="d-flex align-items-center justify-content-center">
              <div
                className="prev-page"
                onClick={prevPage >= 0 ? handlePrevious : handleCancel}
              >
                {prevPage >= 1 ? (
                  <>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ color: "#d6747a", marginRight: "5px" }}
                    />
                    Previous
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ color: "#d6747a", marginRight: "5px" }}
                    />{" "}
                    <span onClick={handleCancel}>Cancel</span>
                  </>
                )}
              </div>
              Page {nextPage}/{data.length}
              <div className="next-page">
                {nextPage >= maxPage ? (
                  <>
                    <span onClick={handleQuiz}>Next</span>
                    <img src="../assets/image/svg/NextModuleIcon.svg" alt="" />
                  </>
                ) : (
                  <>
                    <span onClick={handleQuiz}>Next</span>
                    <img src="../assets/image/svg/NextModuleIcon.svg" alt="" />
                  </>
                )}
              </div>
            </span>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <button className="ml-auto chapter-list-btn d-flex text-center justify-content-center">
              List of Chapter
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MaterialPage;
