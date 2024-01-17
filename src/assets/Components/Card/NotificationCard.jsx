

import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NotificationCard = ({ id, event, date, time, location }) => {
  const [isAttend, setIsAttend] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAttendance = async (e) => {
    e.preventDefault();

    const changeAttendance = {
      offlineId: id,
      isAttend: isAttend,
    };

    try {
      const response = await fetch(
        "http://130.211.243.37/api/notif/confirm-invitation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(changeAttendance),
        }
      );
      if (response.ok) {
        console.log("berhasil katanya");
        navigate("/dashboard");
      } else {
        console.log("Gak berhasil katanya");
        console.error("Error changing password: " + response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAccept = () => {
    setIsAttend("1");
    Swal.fire({
      title: "Are you sure to accept the meeting invitation?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Accepted!", "", "success");
        handleAttendance({ preventDefault: () => {} }, "1");
      }
    });
  };

  const handleDeny = () => {
    setIsAttend("0");
    Swal.fire({
      title: "Are you sure to deny the meeting invitation?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Denied!", "", "success");
        handleAttendance({ preventDefault: () => {} }, "0");
      }
    });
  };

  return (
    <div style={{ background: "#f6fdf8" }}>
      <Row
        className="learnRow"
        style={{ margin: "0px auto", padding: "10px 0px 0 10px" }}
      >
        <Col className="green-notif-text text-center alig">{event}</Col>
        <Col className="notif-col text-center">
          <span>Waktu</span>
          <br />
          <div className="green-notif-text mb-4">
            <span>{date}</span>
            <br />
            <span>{time}</span>
          </div>
        </Col>
        <Col className="notif-col text-center">
          <span>Location</span>
          <br />
          <span className="green-notif-text">{location}</span>
        </Col>
        <Col className="notif-col">
          <button className="acc-btn" onClick={handleAccept}>
            Accept
          </button>
          <button className="dny-btn" onClick={handleDeny}>
            Deny
          </button>
        </Col>
        <hr style={{ border: "1.5px solid grey" }} />
      </Row>
    </div>
  );
};

export default NotificationCard;
