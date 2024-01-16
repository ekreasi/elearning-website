import { useRef } from "react";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./ZoomTrainingPage.css";
import { useNavigate } from "react-router-dom";

const ZoomTrainingPage = () => {
  const navigate = useNavigate();
  const goBackTraining = () => {
    navigate("/training");
  };
  const zoomLinkRef = useRef(null);

  const copyFunction = () => {
    if (zoomLinkRef.current) {
      zoomLinkRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <NewNav />
      <div className="zoom-training-page">
        <div className="training-page-header">
          <div className="left-training-header">
            <p className="left-training">Webinar via Zoom</p>
          </div>
        </div>
        <div className="zoom-training-card">
          <img src="ZoomLinkIcon.svg" alt="" className="zoom-icon" />
          <p className="zoom-card-txt">
            Webinar: Active learning methodologies
          </p>
          <p className="zoom-card-link">
            Link Zoom:{" "}
            <textarea
              ref={zoomLinkRef}
              value="https://zoom.us/j/5551112222"
              readOnly
              className="zoom-card-link"
              style={{
                background: "transparent",
                border: "none",
                width: "523px",
                height: "30px",
                overflow: "hidden",
                resize: "none",
              }}
            />
          </p>

          <div className="zoom-card-btn-container">
            <img
              src="ZoomCopyBtn.svg"
              alt=""
              style={{ marginRight: "10px" }}
              className="zoom-copy-btn"
              onClick={copyFunction}
            />
            <a
              href="https://zoom.us/j/5551112222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="ZoomForward.svg" alt="" />
            </a>
          </div>
        </div>
        <button
          className="d-flex mx-auto back-train-btn"
          onClick={goBackTraining}
        >
          Back to training
        </button>
      </div>
    </div>
  );
};

export default ZoomTrainingPage;
