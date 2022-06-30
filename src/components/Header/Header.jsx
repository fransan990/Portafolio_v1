import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "react-bootstrap/Image";
import options from "../../config/particle-config"
import { Container, Col, Row, } from "react-bootstrap";
import "./Header.css"


const Header = () => {

    const image1 = "../../../images/montañaNieve3.jpeg"
    const image2 = "../../../images/yo2.png"


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
            <Col lg={6} className="position-relative mx-auto m-0 text-center image2Esfera">

                <Image
                    src={image2}
                    roundedCircle
                    className="image2Tamaño"
                />


            </Col>
        </Row>





    )



}
export default Header