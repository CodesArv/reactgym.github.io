import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Midsection() {
  return (
    <Container fluid>
      <Row className=" py-5 hov-col bg ">
        <Col md={6} className="py-3">
          <h1  className="text-center heading4 py-3">professional training</h1>
          <p className="font text-center">
            Professional gym training is a service that provides personalized
            and effective workouts for clients who want to achieve their fitness
            goals. A professional gym trainer can design a customized program
            based on the client's needs, preferences, and abilities, and monitor
            their progress and performance. Professional gym training can help
            clients improve their health, fitness, strength, endurance,
            flexibility, and body composition. Professional gym training can
            also motivate clients to stay consistent and committed to their
            workouts, and provide feedback and guidance along the way.
          </p>
          <div className="btn1">
          <button className="btn">get start</button>
          </div> 
        </Col>

        <Col md={6} className="py-3">
          <h1 className="text-center heading4 py-3">group training</h1>
          <p className="font text-center">
            If you're looking for a fun and effective way to get fit, why not
            try group gym training? Group gym training is a type of exercise
            where you work out with other people who share your goals and
            fitness level. You can enjoy the benefits of social support,
            motivation, accountability and variety. Group gym training can also
            help you learn new skills, challenge yourself and have fun. Whether
            you want to lose weight, tone up, build strength or improve your
            endurance, there's a group gym class for you. From spinning to yoga,
            from bootcamp to Zumba, 
          </p>
          <div className="btn1">
          <button className="btn">get start</button>
          </div>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Midsection;
