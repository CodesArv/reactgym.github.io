import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chooseimg1 from "./asset/body1.webp";
import chooseimg2 from "./asset/body2.webp";
import chooseimg3 from "./asset/body3.webp";

function Getyour() {
  return (
    <Container fluid>
      <Row className="text-center rowbg-last">
        <h1 className="text-center hspan pb-3 animate__animated animate__backInLeft">
          choose your favorite <span className="trainer">trainer</span>
        </h1>

        <Col md={4}>
          <img src={chooseimg1} className="img-fluid  trainerimg" />
          <div className="btn-choose py-5">
            <button>smith</button>
          </div>
        </Col>

        <Col md={4} className="box">
          <img src={chooseimg2} className="img-fluid  trainerimg2" />
          <div className="btn-choose py-5">
            <button>salena</button>
          </div>
        </Col>

        <Col md={4}>
          <img src={chooseimg3} className="img-fluid  trainerimg" />
          <div className="btn-choose py-5">
            <button>christy</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Getyour;
