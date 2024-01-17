import { ProgressBar } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "./ClassCard.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClassCard = () => {
  const navigate = useNavigate();

  const goHistory = () => {
    navigate("/history");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://130.211.243.37/api/elearning/module", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.metaData && data.metaData.code === 200) {
            setData(data.data);
            console.log(data.data);
          } else {
            console.error("API error,", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const accumulateProgress = (submodules) => {
    let totalProgress = 0;

    if (submodules && submodules.length > 0) {
      submodules.forEach((submodule) => {
        if (submodule.progress) {
          totalProgress += submodule.progress;
        }
      });
    }

    return totalProgress;
  };

  const progressStatus = (accumulateProgress) => {
    let status = "";

    if (accumulateProgress === 100) {
      status = "completed";
    } else if (accumulateProgress > 0 && accumulateProgress < 100) {
      status = "in progress";
    } else {
      status = "not started";
    }

    return status;
  };

  return (
    <Container className="class-bar-row">
      {data.length > 0 ? (
        data.map((item, index) => (
          <React.Fragment key={index}>
            <Row className="progress-card-row">
              <Col sm={1} className="progressImg">
                <img
                  className="progress-image"
                  src={
                    progressStatus(accumulateProgress(item.subModule)) ===
                    "not started"
                      ? "./assets/image/svg/NotStartedIconModule.svg"
                      : "./assets/image/svg/Icon Module.svg"
                  }
                  style={{ width: "39px" }}
                  alt=""
                />
              </Col>
              <Col sm={3} className="progressTxt">
                <span>{item.name}</span>
              </Col>
              <Col sm={8} className="progress-bar-row justify-content-end">
                {item.subModule && item.subModule.length > 0 ? (
                  <div>
                    {progressStatus(accumulateProgress(item.subModule)) ===
                    "completed" ? (
                      <div className="d-flex justify-content-between justify-content-center">
                        <img
                          src="./assets/image/svg/CompletedIconModule.svg"
                          alt=""
                          className="flex-grow-1"
                          style={{
                            width: "323px",
                            height: "39px",
                            marginTop: "10px",
                          }}
                        />
                        <img
                          src="./assets/image/svg/RightArrowIcon.svg"
                          alt=""
                          onClick={goHistory}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <ProgressBar
                            variant="danger"
                            now={accumulateProgress(item.subModule)}
                            className="flex-grow-1"
                            style={{
                              width: "323px",
                              height: "6px",
                              marginTop: "10px",
                            }}
                          />
                          <div className="d-flex">
                            <span className="complete">
                              <p>
                                Your progress is{" "}
                              </p>
                              {progressStatus(
                                accumulateProgress(item.subModule)
                              )}
                            </span>
                          </div>
                        </div>
                        <img
                          src="./assets/image/svg/RightArrowIcon.svg"
                          alt=""
                          onClick={goHistory}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ marginTop: "10px" }}
                    >
                      <ProgressBar
                        variant="danger"
                        now={accumulateProgress(item.subModule)}
                        className="flex-grow-1"
                        style={{
                          maxWidth: "343px",
                          maxheight: "6px",
                          marginLeft: "13%",
                        }}
                      />
                      <img
                        src="./assets/image/svg/RightArrowIcon.svg"
                        alt=""
                        onClick={goHistory}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="d-flex">
                      <span className="complete"></span>
                    </div>
                    <p
                      style={{
                        maxWidth: "343px",
                        height: "6px",
                        marginLeft: "13%",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "rgba(127, 138, 154, 0.5)",
                      }}
                    >
                      Not started
                    </p>
                  </div>
                )}
              </Col>
            </Row>
            {index !== data.length - 1 && <hr />}
          </React.Fragment>
        ))
      ) : (
        <p
          className="d-flex text-center justify-content-center"
          style={{ color: "#828282", fontSize: "14px" }}
        >
          No data available.
        </p>
      )}
    </Container>
  );
};

export default ClassCard;
