import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import midimg1 from "./asset/slider3.webp";
import midimg2 from "./asset/luxery2.jpg";
import midimg3 from "./asset/slider2.webp";
import midimg4 from "./asset/luxerygym.jpg";

function Midsection5() {
  return (
    <Container fluid>
      <Row className="py-3 animate__animated animate__backInLeft">
        <h1 className="text-center py-3 tour">take a gym look tour</h1>
        <Col md={7}>
          <img src={midimg1} className="img-fluid section5-img1 py-3" />
        </Col>

        <Col md={5}>
          <img src={midimg3} className="img-fluid section5-img py-3" />
        </Col>
      </Row>

      <Row className="pb-5  animate__animated   animate__backInRight">
        <Col md={4}>
          <img src={midimg2} className="img-fluid section5-img py-3" />
        </Col>

        <Col md={8}>
          <img src={midimg4} className="img-fluid section5-img3 py-3" />
        </Col>
      </Row>
    </Container>
  );
}

export default Midsection5;
