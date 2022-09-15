import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "react-bootstrap/Image";
import options from "../../config/particle-config"
import { Container, Col, Row, Button } from "react-bootstrap";
import About from "../About/About";

import "./Header.css"
import AnimatedWriting from "../AnimatedWriting/AnimatedWriting";


const Header = () => {

    const image1 = "../../../images/montañaNieve3.jpeg"
    const image2 = "../../../images/yo2.png"
    const image3 = "../../../images/reactHooks.jpeg"
    const image4 = "../../../images/IronhackNoche.jpeg"





    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (

        <Row>
            <Col lg={12}>

                <Particles
                    className="particles"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />

                <Image
                    src={image1}
                    className="image img-fluid"
                />

            </Col>
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
                                <About />
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


                            <Col lg={6} className="columnasFondoGris" >
                                <Row>
                                    <Col lg={12}>

                                        <Image
                                            src={image4}
                                            className="imagenFondoGris2"

                                        />
                                    </Col>
                                    <Col lg={12} className="mt-5">

                                        <Row>
                                            <Col lg={6} className="fw-bold"><span className='me-2'>Nombre: </span> Francisco Javier Sánchez Gómez</Col>
                                            <Col lg={6} className="fw-bold"><span className='me-2'>Correo: </span> fransan990@gmail.com</Col>
                                            <Col lg={6} className="mt-3 fw-bold"><span className='me-2'>Años: </span> 20</Col>
                                            <Col lg={6} className="mt-3 fw-bold "><span className='me-2'>Dirección: </span> Madrid</Col>
                                            <Col lg={6} className="text-left">
                                                <Button className='mt-4 colorBoton' target="_blank" href={
                                                    "https://drive.google.com/uc?export=download&id=1DSHJHPjrekWp_lu7WE0FtfPLY2sIYwNd"}>
                                                    Descargar curriculum</Button>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                            </Col>




                        </Row>
                    </Col>
                    <Col lg={12} className="fondoGris"></Col>
                    <Col lg={12}>
                        olaaaa
                    </Col>

                </Row>
            </Col>
        </Row>





    )



}
export default Header