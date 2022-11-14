import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projects from '../../config/projects-config'

const DetailsPage = () => {
    const { id_project } = useParams()

    const [filterProject, setfilterProject] = useState(projects);


    useEffect(() => {

        filtrar(id_project)

    }, []);


    const filtrar = (idProject) => {
        const foundProject = filterProject.filter((oneProject) => {   //  <== ADD
            return oneProject.id == idProject;
        });
        setfilterProject(foundProject)
    }

    return (

        <Container fluid>
            <Row>
                {filterProject.map(projectDetail => {
                    const { id, imagen, titulo, tecnologias, descripcion } = projectDetail
                    return (
                        <Col lg={12}>
                            <Row>
                                <Col lg={12} className="p-5">
                                    <img src={imagen} alt="" className='img-fluid hover-shadow' />

                                </Col>
                                <div>{titulo}</div>
                            </Row>
                        </Col>

                    )
                })}

            </Row>
        </Container>
    )

}
export default DetailsPage