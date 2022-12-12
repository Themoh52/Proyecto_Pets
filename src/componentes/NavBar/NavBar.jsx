import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CardWidget from '../Cardwidget/CardWidget,';
import "./NavBar.css"

const NavBar=()=> {
  return (
    <Navbar className='mb-4' bg="light" expand="lg">
      <Container>
        <NavLink to="">PETS</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="#home">Sobre Nosotros</Link>
            <Link href="#NavLink">NavLink</Link>
            <NavDropdown title="Nuestros Productos" id="basic-nav-dropdown">
              <NavLink to="/categoria/Comida"><NavDropdown.Item href="#action/3.1">Comida</NavDropdown.Item></NavLink>
              <NavLink to="/categoria/Ropa"><NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item></NavLink>
              <NavLink to="/categoria/Juguetes"><NavDropdown.Item href="#action/3.3">Juguetes</NavDropdown.Item></NavLink>
            </NavDropdown>
            <NavLink to="/">
              <CardWidget/>
            </NavLink>
            1
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;