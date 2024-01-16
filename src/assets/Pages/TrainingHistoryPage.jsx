import { Table } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./TrainingHistoryPage.css";
import { useNavigate } from "react-router-dom";

const TrainingHistoryPage = () => {
  const navigate = useNavigate();

  const goTraining = (e) => {
    e.preventDefault();
    navigate("/training");
  };
  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <NewNav />
      <div className="training-history-page">
        <div className="training-page-header">
          <div className="left-training-header">
            <p className="left-training-event">EVENT</p>
            <p className="left-training">Training</p>
          </div>
          <div className="right-training-header">
            <button className="training-page-history-btn" onClick={goTraining}>All training</button>
          </div>
        </div>
        <div className="history-table mx-auto">
          <Table striped className="mt-2">
            <thead>
              <tr>
                <th className="chapter-name">Name of Training</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ minHeight: "40px" }}>
                <td className="chapter-name">Pengetahuan Produk</td>
                <td>15-07-2021 11:49</td>
                <td>07-09-2021 12:09</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Peningkatan Keterampilan</td>
                <td>15-07-2021 13:40</td>
                <td>07-09-2021 14:20</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Pengembangan Diri</td>
                <td>15-07-2021 15:30</td>
                <td>07-09-2021 15:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Manajemen Waktu</td>
                <td>18-07-2021 09:00</td>
                <td>18-07-2021 09:40</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img
                    src="GreenCheckIcon.svg"
                    alt=""
                    style={{ marginRight: "6px" }}
                  />
                  Done
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div
          className="pagination justify-content-end mx-5"
          style={{ marginTop: "18px" }}
        >
          <img
            src="left-history-page.svg"
            alt=""
            style={{
              width: "16px",
              height: "16px",
              margin: "2px 0 0 0",
              cursor: "pointer",
            }}
          />
          <img
            src="page-frame.svg"
            alt=""
            style={{ width: "20px", height: "20px", margin: "0px 8px" }}
          />
          <img
            src="right-history-page.svg"
            alt=""
            style={{
              width: "16px",
              height: "16px",
              margin: "2px 25px 0 0",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingHistoryPage;
