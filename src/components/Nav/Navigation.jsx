import "./Navigation.css"
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from "react-scroll"


const Navigation = () => {

    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    const pages = ['Inicio', 'Sobre Mi', 'Servicios', 'Habilidades', 'Contacta'];

    return (


        <Navbar className={navColour ? "sticky" : "navbar"} collapseOnSelect expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>

                        {pages.map((page) => (

                            <Nav.Link ><Link className='pepe' activeClass="active" to={page} spy={true} smooth={true} offset={50} duration={500} >{page}</Link></Nav.Link>

                        ))}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default Navigation