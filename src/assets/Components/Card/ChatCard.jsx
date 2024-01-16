import "./ChatCard.css";

const ChatCard = (props) => {
  const { isActive, onSelect } = props;

  const handleClick = () => {
    onSelect();
  };

  return (
    <div
      className={`chat-card d-flex align-items-center ${
        isActive ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <img src="Avatar.svg" alt="" />
      <div className="name-last-seen my-auto">
        <p className="name-chat">{props.name}</p>
        <p className="last-seen-chat">{props.lastSeen}</p>
      </div>
      <p className="chat-count">2</p>
    </div>
  );
};

export default ChatCard;
