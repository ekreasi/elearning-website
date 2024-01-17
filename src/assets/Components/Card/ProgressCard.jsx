import "./ProgressCard.css";
import ClassCard from "./ClassCard";

const ProgressCard = () => {
  // const [data, setData] = useState("");

  // const fetchData = () => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     fetch("http://130.211.243.37/api/elearning/module", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.metaData && data.metaData.code === 200) {
  //           setData(data.data);
  //         } else {
  //           console.error("API error,", data.metaData.message);
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const reload = () => {
  //   fetchData();
  // };

  return (
    <div className="progCard shadow" style={{ overflow: "visible" }}>
      <div className="progress-content">
        <span
          style={{ color: "#2f523c", fontWeight: "500" }}
          className="progressHeader"
        >
          <img
            src="./assets/image/svg/ProgressIcon.svg"
            alt=""
            style={{
              width: "28px",
              height: "28px",
              marginRight: "8px",
            }}
            className="px-1"
          />
          Module Progress
        </span>
        <a
          style={{
            color: "#E82827",
            fontWeight: "600",
            fontSize: "12px",
            textDecoration: "none",
            textAlign: "center",
            display: "inline-block",
            cursor: "pointer",
            border: "1px solid #E82827",
            borderRadius: "8px",
            width: "117px",
            paddingTop: "10px",
            height: "42px",
          }}
        >
          <img src="ModuleIcon.svg" alt="" />
          All module
        </a>
      </div>
      <div className="scroll-container">
        <ClassCard />
      </div>
    </div>
  );
};

export default ProgressCard;
