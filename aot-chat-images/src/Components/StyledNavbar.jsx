import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css';

function StyledNavbar(props) {
  return (
  <div>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">AOT2 Emojis</Navbar.Brand>
        <div className="navbar-divider"></div>
        <Nav className="me-auto">
          <Nav.Link href="#home">Saved Emojis</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default StyledNavbar;
