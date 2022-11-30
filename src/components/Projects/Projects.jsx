import { Container, Row, Col, Button } from "react-bootstrap"
import projects from "../../config/projects-config"
import Image from "react-bootstrap/Image";
import { FaSearch, FaGithub } from "react-icons/fa"
import { MdOutlinePreview } from "react-icons/md"
import "./Projects.css"
import { Link } from "react-router-dom";
import clickLinkOut from "../../utils/clickLinkOut";


const Projects = () => {
    return (
        <Container id="Projectos" className="mb-5 position-relative">
            <Row>
                <Col lg={12} className="text-center">
                    <h2>
                        Mis ultimos proyectos
                    </h2>
                    <p>Mis mejores projectos realizados hasta la fecha aunque tengo bastante mas y no solo proyectos tambien ejercicios realizados en React con Mongo y mucho Js</p>
                    <Row>
                        <Col lg={12} className="mt-5">
                            <Row>
                                {
                                    projects.map((elem) => {
                                        const { id, imagen, titulo, nombre, enlaceGitHub, enlaceLive } = elem
                                        return (
                                            <Col lg={4} key={id}>
                                                <div className="item">
                                                    <div className="box">
                                                        <Image src={imagen} className="imageProjects" />
                                                        <div className="cover">
                                                            <div className="name">{nombre}</div>
                                                            <p className="title">{titulo}</p>
                                                            <div className="social">
                                                                {
                                                                    nombre == "gitHub" ?
                                                                        <Button id="botonGitHub" onClick={() => clickLinkOut(enlaceGitHub)}>Ir a gitHub repositorios</Button>
                                                                        :
                                                                        <>
                                                                            <Button className='btn' ><Link to={`/detalles/${id}`}  ><FaSearch /></Link></Button>
                                                                            <Button className="btn" onClick={() => clickLinkOut(enlaceGitHub)}><FaGithub /></Button>
                                                                            <Button className="btn" onClick={() => clickLinkOut(enlaceLive)}><MdOutlinePreview /></Button>
                                                                        </>
                                                                }

                                                            </div>
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