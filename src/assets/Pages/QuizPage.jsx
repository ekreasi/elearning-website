import { Col, Row } from "react-bootstrap";
import ChapterNav from "../Components/Navbar/RedNav/ChapterNav";
import "./QuizPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [contentId, setContentId] = useState("");
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(-1);
  const [maxPage, setMaxPage] = useState(0);
  const { id } = useParams();

  const goMaterial = () => {
    navigate("./material");
  };

  const finishQuiz = () => {
    navigate("/finish-quiz")
  }

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                clearInterval(interval);
                return 0;
              }
            });
            return 59;
          }
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes]);

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

  const handleCancel = () => {};

  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <ChapterNav />

      <div className="quiz-page">
        <Row className="d-flex justify-content-between quiz-header-row align-items-center">
          <Col xs={4} className="quiz-question-count">
            Question 1/10
          </Col>
          <Col xs={4} className="d-flex justify-content-center quiz-time">
            {seconds > 0 || minutes > 0 ? (
              <p>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>00:00</p>
            )}
          </Col>
          <Col xs={4} className="d-flex justify-content-end quiz-desc">
            Assesment - Single Select
          </Col>
        </Row>
          <hr />
        <Row className="quiz-question-row">
          <Col xs={5} className="">
            <img src="QuizQuestionImage.svg" alt="" />
          </Col>
          <Col xs={7}>
            <div className="quiz-question-col">
              <form action="#">
                <p>{'Using a planner or making a "to-do" list every day'}</p>
                <label htmlFor="a" className="quiz-choices">
                  <input
                    type="radio"
                    id="a"
                    name="a"
                    value="A. Is a waste of paper"
                    className="quiz-input"
                  />
                  A. Is a waste of paper
                </label>
                <br />
                <label htmlFor="b" className="quiz-choices">
                  <input
                    type="radio"
                    id="b"
                    name="a"
                    value="B. Help keep things “in sight, in mind"
                    className="quiz-input"
                  />
                  B. Help keep things “in sight, in mind”
                </label>
                <br />
                <label htmlFor="c" className="quiz-choices">
                  <input
                    type="radio"
                    id="c"
                    name="a"
                    value="C. Take too long to fill out"
                    className="quiz-input"
                  />
                  C. Take too long to fill out{" "}
                </label>
                <br />
                <label htmlFor="d" className="quiz-choices">
                  <input
                    type="radio"
                    id="d"
                    name="a"
                    value="D. Lazy to doing every day"
                    className="quiz-input"
                  />
                  D. Lazy to doing every day
                </label>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center quiz-navigation-row"
          >
            <div className="back-quiz">
              <img src="BackQuizIcon.svg" alt="" />
              <span>Back</span>
            </div>
            <div className="quiz-page-count">Page 14/24</div>
            <div className="next-quiz" onClick={finishQuiz}>
              <span>Next</span>
              <img src="NextModuleIcon.svg" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default QuizPage;
