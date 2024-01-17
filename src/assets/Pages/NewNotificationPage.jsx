import { Helmet } from "react-helmet";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./NewNotificationPage.css";

const NewNotificationPage = () => {
  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <Helmet>
        <title>Notification | e-Learning</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NewNav />
      <div className="full-notification-page ">
        <div className="training-page-header">
          <div className="left-training-header">
            <p className="left-training">Notification</p>
          </div>
        </div>
        <div className="full-notification-item">
          <div className="full-notification-item-title d-flex justify-content-between">
            <div className="left-full-item ">
              <img
                src="notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p
                style={{
                  display: "contents",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#7F8A9A",
                }}
              >
                Event
              </p>
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                color: "#7F8A9A",
              }}
            >
              25 Oct
            </p>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#231f20",
              marginBottom: "4px",
            }}
          >
            Webinar: Active learning methodologies
          </p>
          <p style={{ fontWeight: "400", fontSize: "12px", color: "#7F8A9A" }}>
            Please join the training for achievement the level. Lorem ipsum
            dolor sit amet consectetur ligula dolor sit amet consectetur amet
            consectetur ligula dolor sit amet.{" "}
          </p>
          <hr />
        </div>
        <div className="full-notification-item">
          <div className="full-notification-item-title d-flex justify-content-between">
            <div className="left-full-item ">
              <img
                src="notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p
                style={{
                  display: "contents",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#7F8A9A",
                }}
              >
                Event
              </p>
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                color: "#7F8A9A",
              }}
            >
              25 Oct
            </p>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#231f20",
              marginBottom: "4px",
            }}
          >
            Webinar: Active learning methodologies
          </p>
          <p style={{ fontWeight: "400", fontSize: "12px", color: "#7F8A9A" }}>
            Please join the training for achievement the level. Lorem ipsum
            dolor sit amet consectetur ligula dolor sit amet consectetur amet
            consectetur ligula dolor sit amet.{" "}
          </p>
          <hr />
        </div>
        <div className="full-notification-item">
          <div className="full-notification-item-title d-flex justify-content-between">
            <div className="left-full-item ">
              <img
                src="notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p
                style={{
                  display: "contents",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#7F8A9A",
                }}
              >
                Event
              </p>
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                color: "#7F8A9A",
              }}
            >
              25 Oct
            </p>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#231f20",
              marginBottom: "4px",
            }}
          >
            Webinar: Active learning methodologies
          </p>
          <p style={{ fontWeight: "400", fontSize: "12px", color: "#7F8A9A" }}>
            Please join the training for achievement the level. Lorem ipsum
            dolor sit amet consectetur ligula dolor sit amet consectetur amet
            consectetur ligula dolor sit amet.{" "}
          </p>
          <hr />
        </div>
        <div className="full-notification-item">
          <div className="full-notification-item-title d-flex justify-content-between">
            <div className="left-full-item ">
              <img
                src="notification-event-icon.svg"
                alt=""
                style={{ marginRight: "5px" }}
              />
              <p
                style={{
                  display: "contents",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#7F8A9A",
                }}
              >
                Event
              </p>
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                color: "#7F8A9A",
              }}
            >
              25 Oct
            </p>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#231f20",
              marginBottom: "4px",
            }}
          >
            Webinar: Active learning methodologies
          </p>
          <p style={{ fontWeight: "400", fontSize: "12px", color: "#7F8A9A" }}>
            Please join the training for achievement the level. Lorem ipsum
            dolor sit amet consectetur ligula dolor sit amet consectetur amet
            consectetur ligula dolor sit amet.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewNotificationPage;
