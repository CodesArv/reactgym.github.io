import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import section3img from "./asset/section3.webp";

function content() {
  return (
    <Container fluid>
      <Row className=" pt-3 hov-col img-row">
        <Col md={5} className="py-3 ">
          <img
            src={section3img}
            className="img-fluid imgborder"
            alt="loding error"
          />
        </Col>

        <Col md={7} className="py-3">
            <h4 className="text-center py-3 heading4">quick read about gym</h4>
          <p className="pt-3 font" >
            Going to the gym regularly can have many benefits for your health
            and well-being. Some of the benefits include improving your
            cardiovascular fitness, strengthening your muscles and bones,
            reducing stress and anxiety, and boosting your mood and self-esteem.
            However, going to the gym also requires some planning and
            preparation to avoid injuries and maximize your results. Here are
            some tips to help you get the most out of your gym sessions: - Set
            realistic and specific goals for yourself. For example, instead of
            saying "I want to lose weight", say "I want to lose 10 pounds in 3
            months by going to the gym 3 times a week and eating a balanced
            diet". - Choose a gym that suits your needs and preferences.
             Consider factors such as location, price, equipment, classes, staff,
            and atmosphere. You can also ask for a trial membership or a tour
            before you sign up. - Wear comfortable and appropriate clothing and
            shoes. You should wear clothes that allow you to move freely and
            breathe well, and shoes that support your feet and ankles. Avoid
            wearing jewelry, accessories, or anything that could get caught in
            the machines or cause injuries. - Warm up before you start your
            workout. Warming up helps to increase blood flow, oxygen delivery,
            and flexibility, and reduces the risk of muscle strains and sprains.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default content;
