import { Table } from "react-bootstrap";
import NewNav from "../Components/Navbar/RedNav/NewNav";
import "./HistoryPage.css";

const HistoryPage = () => {
  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <NewNav />
      <div className="history-page">
        <div className="history-title">
          <p className="main-title">History Training - Starter Modoule</p>
          <p className="second-title">Module 2 - Basic</p>
        </div>
        <div className="history-content d-flex align-align-items-center mt-3">
          <img src="HistoryIcon.svg" alt="" className="d-flex" />
          <div className="content-text flex-grow-1">
            <p className="main-content-title">NEW CHAPTER</p>
            <p className="second-content-title">Product Marketing</p>
          </div>
          <div className="content-button">
            <button className="history-progress-btn d-inline">
              All progress
            </button>
            <button className="start-progress-btn d-inline">
              Start{" "}
              <img src="StartIcon.svg" alt="" style={{ marginLeft: "4px" }} />
            </button>
          </div>
        </div>
        <hr />
        <div className="history-table mx-auto">
          <Table striped className="mt-2">
            <thead>
              <tr>
                <th className="chapter-name">Name of Chapter</th>
                <th>Start Date</th>
                <th>Finish Date</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ minHeight: "40px" }}>
                <td className="chapter-name">Pengetahuan Produk</td>
                <td>15-07-2021 11:49</td>
                <td>07-09-2021 12:09</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>100</td>
              </tr>
              <tr>
                <td className="chapter-name">Peningkatan Keterampilan</td>
                <td>15-07-2021 13:40</td>
                <td>07-09-2021 14:20</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>90</td>
              </tr>
              <tr>
                <td className="chapter-name">Pengembangan Diri</td>
                <td>15-07-2021 15:30</td>
                <td>07-09-2021 15:45</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>95</td>
              </tr>
              <tr>
                <td className="chapter-name">Manajemen Waktu</td>
                <td>18-07-2021 09:00</td>
                <td>18-07-2021 09:40</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>75</td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>80</td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>80</td>
              </tr>
              <tr>
                <td className="chapter-name">Public Speaking</td>
                <td>18-07-2021 11:00</td>
                <td>18-07-2021 11:45</td>
                <td>
                  <img src="GreenCheckIcon.svg" alt=""  style={{ marginRight:"6px"}}/>
                  Finished
                </td>
                <td>80</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="pagination justify-content-end mx-5" style={{ marginTop: "24px"}}>
          <img
            src="left-history-page.svg"
            alt=""
            style={{ width: "16px", height: "16px", margin: "-2px 0 0 0", cursor: "pointer" }}
          />
          <img
            src="page-frame.svg"
            alt=""
            style={{ width: "20px", height: "20px", margin: "-5px 8px" }}
          />
          <img
            src="right-history-page.svg"
            alt=""
            style={{ width: "16px", height: "16px", margin: "-2px 0 0 0", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
