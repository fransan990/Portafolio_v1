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
        <Container id="Projectos" className="mb-5">
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
                                        const { id, imagen, titulo, nombre, enlaceGitHub, enlaceLive } = elem
                                        return (
                                            <Col lg={4} key={id}>
                                                <div className="item">
                                                    <div className="box">
                                                        <Image src={imagen} className="imageProjects" />
                                                        <div className="cover">
                                                            <h3 className="name">{nombre}</h3>
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