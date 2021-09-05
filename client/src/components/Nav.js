
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {

return (
    <>
    <div className="navbar-container container">
<Navbar className="navbar">
    <Container>
    <Nav className="me-auto">
      <Nav.Link to="/" className="nav-item" ><Link className="Link" to="/">Home</Link></Nav.Link>
      <Nav.Link className="nav-item"><Link className="Link" to="/assistants">Assistants</Link></Nav.Link>
      <Nav.Link className="nav-item">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  
  </>
  )
}
export default NavBar;