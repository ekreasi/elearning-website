import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./LearningCard.css";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
// import MaterialPage from "../../Pages/MaterialPage";
import { useNavigate } from "react-router-dom";

const LearningCard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("-Choose Module-");
  const [content, setContent] = useState([]);
  const [moduleId, setModuleId] = useState("");

  const goMaterial = (id, name) => {
    navigate(`/${name}/${id}`)
  }

  useEffect(() => {
    if (selected !== "-Choose Module-") {
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
              const selectedSubmodule = data.data
                .map((module) => module.subModule)
                .flat()
                .find((submodule) => submodule.name.trim() === selected.trim());

              if (selectedSubmodule) {
                setModuleId(selectedSubmodule.id);
              } else {
                console.error("Can not find selected module");
              }
            } else {
              console.error("API returned error: ", data.metaData.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, [selected]);

  useEffect(() => {
    if (moduleId) {
      const token = localStorage.getItem("token");

      fetch("http://130.211.243.37/api/elearning/chapter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subModuleId: moduleId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.metaData && data.metaData.code === 200) {
            if (Array.isArray(data.data)) {
              // Check if data.data is an array
              if (data.data.length > 0) {
                setContent(data.data);
              } else {
                Swal.fire("SweetAlert2 is working!");
              }
            } else {
              console.error("Data is not an array");
            }
          } else {
            console.error("API returned an error: ", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [moduleId]);

  return (
    <div className="backgroundCard">
      <Container>
        <Row className="learnRow">
          <Col xs={12} style={{ display: "flex" }}>
            <span
              className="learning-text"
              style={{ color: "#2f523c", fontWeight: "bold" }}
            >
              Learning
            </span>
            <Dropdown selected={selected} setSelected={setSelected} />
          </Col>
        </Row>
        {selected !== "-Choose Module-" && (
          <Row className="learning-row">
            {content.map((item, index) => (
              <Col key={index} xs={3} className="learning-comp">
                <a href={item.link}>
                  <img
                    className="learn-image"
                    src={item.image}
                    alt={item.name}
                    onClick={() => goMaterial(item.id, item.name)}
                  />
                </a>
                <br />
                <span className="image-text">{item.name}</span>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default LearningCard;
