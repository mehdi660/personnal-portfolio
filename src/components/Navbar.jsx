import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarr from "react-bootstrap/Navbar";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";
import Dark from "./Dark";

function Navbar() {
  return (
    <header>
      <Navbarr data-bs-theme="dark">
        <Container className="d-flex justify-content-center">
          <Dark />
          <Nav className="me-auto d-flex align-items-center">
            <Avatar src={moi} alt="moi" />
            <Nav.Link className="a_nav" href="#about">
              About me
            </Nav.Link>
            <Nav.Link className="a_nav" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="a_nav" href="#project">
              Project
            </Nav.Link>
            <Nav.Link className="a_nav" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbarr>
    </header>
  );
}

export default Navbar;
