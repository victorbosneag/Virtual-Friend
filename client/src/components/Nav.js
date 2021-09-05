
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {

return (
    <>
    <div className="navbar-container container">
<Navbar className="navbar">
    <Container>
    <Nav className="me-auto">
      <Nav.Link to="/" className="nav-item" >Home</Nav.Link>
      <Nav.Link className="nav-item">Assistants</Nav.Link>
      <Nav.Link className="nav-item">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  
  </>
  )
}
export default NavBar;