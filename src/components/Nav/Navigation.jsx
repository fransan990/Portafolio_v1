import "./Navigation.css"
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from "react-scroll"
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import clickLinkOut from "../../utils/clickLinkOut";


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

    const pages = ['Inicio', 'Sobre Mi', 'Biografia', 'Tecnologias', 'Projectos', 'Contacta'];

    return (
        <Container>
            <Navbar className={navColour ? "sticky" : "navbar"} collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Nav>
                        {pages.map((page, idx) => (

                            <Nav.Link key={idx} ><Link className='navbarSpy' activeClass="active" to={page} spy={true} smooth={true} offset={50} duration={500} >{page}</Link></Nav.Link>

                        ))}
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Button onClick={() => clickLinkOut('https://www.instagram.com/frankii18_/')}><AiFillInstagram /></Button>
                            <Button onClick={() => clickLinkOut('https://github.com/fransan990')}><BsGithub /></Button>
                            <Button onClick={() => clickLinkOut('https://www.linkedin.com/in/francisco-javier-s%C3%A1nchez-g%C3%B3mez/')}><BsLinkedin /></Button>
                            <Button variant="outline-dark" className="mx-2 btn-download" onClick={() => clickLinkOut('https://drive.google.com/uc?export=download&id=1DSHJHPjrekWp_lu7WE0FtfPLY2sIYwNd')}>Descargar curriculum</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container>

    )
}
export default Navigation