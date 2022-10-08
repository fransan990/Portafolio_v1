import { Container, Row, Col, Button } from "react-bootstrap"
import AnimatedWriting from "../AnimatedWriting/AnimatedWriting";
import Image from "react-bootstrap/Image";
import "./About.css"
import { FaAngular } from "react-icons/fa"
import { SiAntdesign } from "react-icons/si"
import Biography from "../Biography/Biography";



const About = () => {

    const toggleText = () => {

        let readMore_btn = document.getElementById('readMore_btn');
        let hideText = document.getElementById('hideText');
        hideText.classList.toggle('showText');

        if (hideText.classList.contains('showText')) {
            readMore_btn.innerHTML = 'Ver menos'
        }
        else {
            readMore_btn.innerHTML = 'Ver mas'
        }
    }

    const image2 = "../../../images/yo2.png"
    const image3 = "../../../images/reactHooks.jpeg"
    const image4 = "../../../images/IronhackNoche.jpeg"

    return (

        <Col lg={12} className="position-relative image2Esfera">
            <Row>

                <Col lg={6} className="mx-auto m-0 text-center">

                    <Image
                        src={image2}
                        roundedCircle
                        className="image2Tamaño"
                    />

                    <Row>
                        <Col lg={12} className="text-center">
                            <Container>
                                <Row>
                                    <Col lg={12} className="text-center">
                                        <p className="h4 mx-5 mt-3" id="Sobre Mi">
                                            Hola soy Fran soy Soy Desarrollador Web Full Stack con background en un grado superior en desarrollo web de aplicaciones y con un bootcamp de desarrollador full stack  de Ironhack
                                            <span id="hideText" className="hideText h4 mt-3">
                                                De pequeño descubrí que me apasionaba el mundo de la informática en concreto a la programación porque veía que me permitía aplicar mi creatividad creando cualquier producto propio ahora busco avanzar en las habilidades de programación y desarrollo de bases de datos me encantaría poder colaborar en cualquier proyecto que me ayude a añadir o mejorar mis habilidades así como también me ayude a avanzar en mi carrera como desarrollador.
                                            </span>
                                        </p>
                                        <button className="readMore_btn m-0 mx-auto mt-2 h4" id="readMore_btn" onClick={() => { toggleText() }}>Read More</button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>

                <Col lg={12} className="mx-5 separacionSuperior">
                    <Row>

                        <Col lg={6} className="columnasFondoGris">
                            <Row>
                                <Col lg={12}>
                                    <AnimatedWriting />


                                </Col>
                                <Col lg={12}>
                                    <Image
                                        src={image3}
                                        className="imagenFondoGris1 mt-5"

                                    />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} className="columnasFondoGris " >
                            <Row>
                                <Col lg={12} className="colocacion">
                                    <div className="display-3 mb-5 text-center">Biografia</div>
                                </Col>
                                <Col lg={12} className="mt-5">
                                    <Biography />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col lg={12} className="fondoGris"></Col>
            </Row >
        </Col >
    )

}
export default About