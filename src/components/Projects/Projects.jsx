import { Container, Row, Col, Button } from "react-bootstrap"
import projects from "../../config/projects-config"
import Card from 'react-bootstrap/Card';
import "./Projects.css"


const Projects = () => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h3 className="text-center">
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

                                                {/* reparar y el cover es el importante , poner alto tambien  */}
                                                <div class="item">
                                                    <div class="box">
                                                        <img src={imagen} className="w-100" alt="" />
                                                        <div class="cover">
                                                            <h3 class="name">Tim Cook</h3>
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