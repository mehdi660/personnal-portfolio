import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarr from "react-bootstrap/Navbar";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";

function Navbar() {
  return (
    <header>
      <Navbarr bg="#2D2F59" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto display:flex">
            <Avatar src={moi} />
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbarr>
    </header>
  );
}

export default Navbar;
