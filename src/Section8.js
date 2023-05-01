import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footerlast() {
  return (
    <Container fluid>
      <Row className="text-center bg-color py-5">
        <Col md={6}>
          <h4 className="heading5">gym name</h4>
          <p className="look">out look gym</p>
          <p className="h5">vip group partner</p>
          <p className="text-white">
            Id laborum aute pariatur elit. Commodo ullamco non non velit elit
            pariatur laborum sit mollit laborum laborum. Incididunt ipsum est
            dolor id quis ut minim non dolor ea laboris.
          </p>
        </Col>

        <Col md={3}>
          <h2 className="userfull text-white">usefull link</h2>
          <ul type="none" className="text-white">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </Col>

        <Col md={3}>
          <h2 className="userfull text-white">usefull link</h2>
          <ul type="none" className="text-white">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footerlast;
