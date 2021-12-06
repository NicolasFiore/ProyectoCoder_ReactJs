import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../img/logo.jpg'

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src={Logo} alt="logo" className="logo " />
                <Navbar.Brand href="#home">Fiore Compain</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bermudas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Buzos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gorras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            <CartWidget/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar
