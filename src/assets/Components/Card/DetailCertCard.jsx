import { Button, Col, Container, Row } from "react-bootstrap";
import "./DetailCertCard.css";
import { useRef } from "react";
import html2canvas from "html2canvas";

const DetailCertCard = () => {
  const pdfRef = useRef();

  const donwloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", imgData);
      anchor.setAttribute("download", "certificate.png");
      anchor.click();
      anchor.remove();
    });
  };

  return (
    <div className="detailCertCard">
      <Container fluid="md">
        <Row style={{ minHeight: "70vh" }} ref={pdfRef}>
          <Col
            xs={3}
            style={{
              backgroundColor: "#2f523c",
              
            }}
          ></Col>
          <Col xs={9} className="detail-text">
            <span
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#2f523c",
                display: "block",
              }}
              className="d-text"
            >
              Certificate
            </span>
            <span style={{ display: "block" }} className="d-text enter">
              is awarded to :
            </span>
            <span
              style={{
                display: "block",
                color: "#e49721",
                fontWeight: "bold",
                fontSize: "23px",
                borderBottom: "3px dashed grey",
              }}
              className="d-text enter"
            >
              ANDRE
            </span>
            <span
              style={{
                display: "block",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              className="d-text enter"
            >
              Who Has Fulfilled All The Requirements and
            </span>
            <span
              style={{
                display: "block",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              className="d-text enter"
            >
              Completed Module
            </span>
            <span
              style={{
                display: "block",
                color: "#e49721",
                fontWeight: "bold",
                fontSize: "23px",
                borderBottom: "3px dashed grey",
              }}
              className="d-text enter"
            >
              ISO 2007
            </span>
            <span style={{ display: "block" }} className="d-text">
              Date :
            </span>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                borderBottom: "3px dashed grey",
              }}
              className="d-text"
            >
              17 October 2022{" "}
            </span>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Button
            style={{
              background: "#2f523c",
              borderRadius: "20px",
              maxWidth: "300px",
            }}
            onClick={() => donwloadPdf()}
          >
            Download
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default DetailCertCard;
