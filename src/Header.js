import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg nav-bg">
      <Container>
        <Navbar.Brand href="#home" className="out">
          outlook<span className="gym">gym </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="col-ul">
              home
            </Nav.Link>
            <Nav.Link href="#pricing" className="col-ul">
              blog
            </Nav.Link>
            <Nav.Link href="#features" className="col-ul">
              get a member
            </Nav.Link>
            <Nav.Link href="#pricing" className="col-ul">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
