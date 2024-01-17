import { Col } from "react-bootstrap";  
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./ChatroomPage.css";
import Data from "../Data/ChatData";
import ChatCard from "../Components/Card/ChatCard";
import { useEffect, useRef, useState } from "react";

const ChatroomPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [height, setHeight] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.scrollTop = contentElement.scrollHeight;
      setHeight(contentElement.scrollHeight);
    }
  }, [activeCard, height]);

  const handleCardSelect = (cardId) => {
    setActiveCard(cardId);
  };

  const handleSearchIconClicked = () => {
    setIsSearchActive(!isSearchActive);
  };

  const chatData = Data.map((data) => {
    return (
      <ChatCard
        key={data.id}
        name={data.name}
        lastSeen={data.lastSeen}
        isActive={activeCard === data.id}
        onSelect={() => handleCardSelect(data.id)}
      />
    );
  });

  return (
    <div style={{ height: "100vh", background: "#eaeaea" }}>
      <NewNav />
      <div className="chatroom-page">
        <Col xs={4} className="left-chatroom">
          <div className={isSearchActive ? "active-chatroom-header" : "left-chatroom-header"}>
            {isSearchActive ? (
              <>
                <img src="./assets/image/svg/BackChatIcon.svg" alt="" onClick={handleSearchIconClicked}/>
                <div className="left-chatroom-img">
                  <input
                    className="chat-name-input"
                    type="text"
                    placeholder="Search name."
                    style={{
                      background: `url('./assets/image/svg/SearchIcon.svg') no-repeat 12px center`,
                      backgroundColor: "rgba(127, 138, 154, 0.1)",
                      paddingLeft: "45px",
                      border: "none",
                    }}
                  />
                  <img src="./assets/image/svg/NewChat.svg" alt="" style={{ marginLeft: "8px" }} />
                </div>
              </>
            ) : (
              <>
                <p>Chatroom</p>
                <div className="left-chatroom-img">
                  <img src="./assets/image/svg/SearchIcon.svg" alt="" onClick={handleSearchIconClicked}/>
                  <img src="./assets/image/svg/NewChat.svg" alt="" style={{ marginLeft: "8px" }} />
                </div>
              </>
            )}
          </div>
          {chatData}
        </Col>
        {activeCard ? (
          <Col xs={8} className="right-chat-room">
            <div className="right-chatroom-header d-flex justify-content-between align-items-center">
              <div className="chat-profile  d-flex align-items-center">
                <img src="./assets/image/svg/Avatar.svg" alt="" />
                <div className="chat-name-seen">
                  <p className="chat-name-p">Annete Black</p>
                  <p className="chat-status-p">Online</p>
                </div>
              </div>
              <div className="search-chat">
                <input
                  className="chat-search-input"
                  type="text"
                  placeholder="Search message."
                  style={{
                    background: `url('./assets/image/svg/SearchIcon.svg') no-repeat 12px center`,
                    backgroundColor: "rgba(127, 138, 154, 0.1)",
                    paddingLeft: "45px",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="right-chatroom-content">
              <div className="bubble left-bubble">
                <div className="content" ref={contentRef}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, repellat.
                  </p>
                  <p className="time">13:24</p>
                </div>
              </div>
              <div className="bubble left-bubble">
                <div className="content" ref={contentRef}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, repellat.
                  </p>
                  <p className="time">13:24</p>
                </div>
              </div>
              <div className="bubble right-bubble">
                <div className="content" ref={contentRef}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, repellat.
                  </p>
                  <p className="time">13:24</p>
                </div>
              </div>
              <div className="bubble left-bubble">
                <div className="content" ref={contentRef}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae voluptate maxime minima id porro dolorum sit ipsum quo
                    aliquid ?
                  </p>
                  <p className="time">13:24</p>
                </div>
              </div>
              <div className="bubble right-bubble">
                <div className="content" ref={contentRef}>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p className="time">13:24</p>
                </div>
              </div>
            </div>
            <div className="footer-row">
              <div className="right-chatroom-footer mx-auto">
                <div className="footer-image d-flex">
                  <img src="./assets/image/svg/EmoticonIcon.svg" alt="" className="emot-icon" />
                  <img src="./assets/image/svg/ClipperIcon.svg" alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="message-input-box"
                />
                <div className="send-message">
                  <img src="./assets/image/svg/ChatSendIcon.svg" alt="" />
                </div>
              </div>
            </div>
          </Col>
        ) : (
          <Col xs={8} className="right-nochat-room ">
            <div className="right-chat-content ">
              <img src="./assets/image/svg/DiscussionIcon.svg" alt="" />
              <div className="">
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    marginBottom: "5px",
                  }}
                >
                  Discussion Space
                </p>
                <p style={{ fontSize: "16px" }}>
                  Let&apos;s start to more connecting with your partner
                </p>
              </div>
            </div>
          </Col>
        )}
      </div>
    </div>
  );
};

export default ChatroomPage;
