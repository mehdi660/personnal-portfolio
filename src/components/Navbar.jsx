import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarr from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <>
      <Navbarr bg="dark" data-bs-theme="dark">
        <Container>
          <Navbarr.Brand href="#home">Navbar</Navbarr.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbarr>
    </>
  );
}

export default Navbar;
