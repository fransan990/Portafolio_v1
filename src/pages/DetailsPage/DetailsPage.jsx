import { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projects from '../../config/projects-config'
import clickLinkOut from "../../utils/clickLinkOut";
import "./DetailsPage.css"

const DetailsPage = () => {

    const { id_project } = useParams()
    const [filterProject, setfilterProject] = useState(projects);


    useEffect(() => {
        filtrar(id_project)
    }, []);


    const filtrar = (idProject) => {
        const foundProject = filterProject.filter((oneProject) => {
            return oneProject.id == idProject;
        });
        setfilterProject(foundProject)
    }




    return (

        <Container fluid>
            <Row>
                {filterProject.map((projectDetail, idx) => {
                    const { id, imagen, titulo, tecnologias, descripcion, institucion, tiempo, enlaceLive, color } = projectDetail

                    // let colorBoton = document.querySelector(".botonDetalles").hover(function () {
                    //     this.css("background-color", { color });
                    // })
                    // addEventListener()


                    return (

                        <Col lg={12} key={id} className="pb-5">
                            <Row>
                                <Col lg={12} className="p-5">
                                    <img src={imagen} alt="" className='img-fluid hover-shadow' />
                                </Col>
                                <Col lg={12} className="paddingColum w-75 mb-5">
                                    <h5 className='text-secondary'>{titulo}</h5>
                                    <p className='mt-4 mb-4 fw-bold fs-3'>{tecnologias}</p>
                                    <p className='w-75 mt-4 text-secondary fs-5'>{descripcion}</p>
                                </Col>
                                <Col lg={12} className="mt-5 paddingColum">
                                    <Row>
                                        <Col lg={4}>
                                            <p className='text-secondary'>Institución</p>
                                            <p className='fw-bold fs-3'>{institucion}</p>
                                        </Col>
                                        <Col lg={4}>
                                            <p className='text-secondary'>Tiempo</p>
                                            <p className='fw-bold fs-3'>{tiempo}</p>
                                        </Col>
                                        <Col lg={4}>

                                            <Button className="botonDetalles" onClick={() => clickLinkOut(enlaceLive)}> <span>Ver proyecto</span></Button>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                    )
                })}

            </Row>
        </Container>
    )

}
export default DetailsPage