import { Col, Container, Row } from "react-bootstrap"
// import DashboardNavbar from "../Components/Navbar/Nav"
import DetailLibCard from "../Components/Card/DetailLibCard"

const DetailLib = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
        {/* <DashboardNavbar/> */}
        <Container>
          <Row>
            <Col xs={12}>
              <DetailLibCard/>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default DetailLib