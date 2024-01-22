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
      <div className="material-page pb-3">
        <Row>
          <Col>
            <div className="material-image">
              <div className="learning-includes py-4 px-3 px-md-5">
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    marginBottom: "26px",
                  }}
                >
                  This learning includes:{" "}
                </p>

                <div className="row g-3 g-md-2">
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <img src="../assets/image/svg/MaterialModulIcon.svg" alt="" />
                      <span style={{ fontSize: "14px" }}>
                        Material and video explanation
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <img src="../assets/image/svg/QuizModulIcon.svg" alt="" />
                      <span style={{ fontSize: "14px" }}>
                        Complete the quiz in the last chapter
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <img src="../assets/image/svg/AccessModulIcon.svg" alt="" />
                      <span style={{ fontSize: "14px" }}>
                        Access on mobile and website
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <img src="../assets/image/svg/AccessModulIcon.svg" alt="" />
                      <span style={{ fontSize: "14px" }}>
                        Access on mobile and website
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-3 align-items-start">
                      <img src="../assets/image/svg/CertifModulIcon.svg" alt="" />
                      <span style={{ fontSize: "14px" }}>
                        Certificate of completion for all chapters in the module
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={4}></Col>
          <Col md={4}>
            <span className="d-flex align-items-center justify-content-between px-3 w-100">
              <div
                className="prev-page d-flex gap-2 align-items-center"
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
              <div>
                Page {nextPage}/{data.length}
              </div>
              <div className="next-page d-flex gap-2 align-items-center">
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
          <Col md={4}>
            <div className="d-flex justify-content-center justify-content-md-end">
              <button className="chapter-list-btn text-center">
                List of Chapter
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MaterialPage;
