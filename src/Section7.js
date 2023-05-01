import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bodyimg11 from "./asset/body1.webp";
import bodimg12 from "./asset/bodybulid3.webp";
import bodyomg13 from "./asset/bodybuil2.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Userreview() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container fluid>
      <h3 className="text-center mt-3 bodyhead">
        bodybuilders <span className="span2">review</span>
      </h3>
      <Row className="text-center py-5">
        <Carousel responsive={responsive} autoPlay="true">
          <div>
            <img
              src={bodyimg11}
              className="img-fluid buli-img"
              alt="loding error"
            />
            <h4>shivam</h4>
            <p>
              I have been going to this gym for three months and I am very
              satisfied with the facilities and the staff.
            </p>
          </div>
          <div>
            <img
              src={bodyimg11}
              className="img-fluid buli-img"
              alt="loding error"
            />
            <h4>shivam</h4>
            <p>
              I have been going to this gym for three months and I am very
              satisfied with the facilities and the staff.
            </p>
          </div>
          <div>
            <img
              src={bodyimg11}
              className="img-fluid buli-img"
              alt="loding error"
            />
            <h4>shivam</h4>
            <p>
              I have been going to this gym for three months and I am very
              satisfied with the facilities and the staff.
            </p>
          </div>
          <div>
            <img
              src={bodyimg11}
              className="img-fluid buli-img"
              alt="loding error"
            />
            <h4>shivam</h4>
            <p>
              I have been going to this gym for three months and I am very
              satisfied with the facilities and the staff.
            </p>
          </div>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Userreview;
