import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projects from '../../config/projects-config'

const DetailsPage = () => {
    const { id } = useParams()
    console.log("id", id)

    const foundProject = projects.find((oneProject) => {   //  <== ADD
        return oneProject.id === id;
    });
    return (

        <Container>
            <Row>
                <p>prueba</p>
                <p>{foundProject.titulo}</p>

            </Row>
        </Container>
    )

}
export default DetailsPage