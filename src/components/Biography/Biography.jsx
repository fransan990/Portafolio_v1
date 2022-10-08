import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"

const Biography = () => {

    const [items, setItems] = useState(biografia)

    const filterElement = (categorias) => {

        alert(categorias)

        let updateItems
        for (const property in categorias) {

            updateItems = biografia.filter(ele => {
                return ele.categoria == categorias[property]
            })
        }

        //REVISAR ESTA PARTE PARA HACERLO DE OTRA MANERA

        setItems(updateItems)
    }

    const buton = ['educación', 'experiencia', 'service'];

    return (
        <Row>
            <Col lg={12}>

                <div className="d-flex justify-content-around">

                    {
                        buton.map((buto, index) => (


                            < Button className="btn-warning" onClick={() => filterElement({ buto })}>{buto}</Button>


                        ))
                    }
                </div>
            </Col>

            {/* <div className="d-flex justify-content-around">
                <Button className="btn-warning" onClick={() => filterElement("educación")}>Educación</Button>
                <Button className="btn-warning">HTML</Button>
                <Button className="btn-warning">Servidor</Button>
                <Button className="btn-warning">Cliente</Button>
                <Button className="btn-warning">React</Button>
                <Button className="btn-warning" onClick={() => setItems(biografia)}>Full</Button> */}





            <Col lg={12} className="text-start mt-5">
                <Row>

                    {
                        items.map((elem) => {
                            const { id, nombre, imagen, categoria, tecnologias, descripcion } = elem
                            return (
                                <Col lg={12}>
                                    <Row>
                                        <Col lg={12}>
                                            <p className="fw-bold">{nombre}</p>
                                        </Col>
                                        <Col lg={12}>
                                            <p>{tecnologias}</p>
                                        </Col>
                                        <Col lg={12}>


                                            <p>{descripcion}</p>

                                        </Col>

                                    </Row>
                                </Col>
                            )

                        })
                    }
                </Row>

            </Col>
        </Row >




    )

}
export default Biography