import { Container, Row, Col, Button } from "react-bootstrap"
import projects from "../../config/projects-config"
import Image from "react-bootstrap/Image";
import "./Projects.css"


const Projects = () => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h3 className="text-center mb-5">
                        Mis ultimos proyectos
                    </h3>
                    <Row>
                        <Col lg={12}>
                            <Row>
                                {
                                    projects.map((elem) => {
                                        const { id, imagen, nombre, tecnologias, descripcion } = elem
                                        return (
                                            <Col lg={4} key={id}>
                                                <div class="item">
                                                    <div class="box">
                                                        <Image src={imagen} className="imageProjects" />
                                                        <div class="cover">
                                                            <h3 class="name">{nombre}</h3>
                                                            <p class="title">Android Developer</p>
                                                            <div class="social"><i class="fa fa-facebook-official"></i><i class="fa fa-twitter"></i><i class="fa fa-instagram"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }

                            </Row>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>


    )

}
export default Projects;