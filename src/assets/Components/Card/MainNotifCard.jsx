import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";

const MainNotifCard = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://130.211.243.37/api/notif", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.metaData && data.metaData.code === 200) {
          setNotifications(data.data);
          console.log(data.data);
          console.log(data.data.offlineId);
        } else {
          console.error("API error: ", data.metaData.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <NotificationCard
              id={notification.offlineId}
              event={notification.event}
              date={notification.date}
              time={notification.time}
              location={notification.location}
            />
          </React.Fragment>
        ))
      ) : (
        <div className="backgroundCard">
          <p>No notifications available</p>
        </div>
      )}
    </div>
  );
};

export default MainNotifCard;
