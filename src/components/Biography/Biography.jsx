import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"

const Biography = () => {

    const [items, setItems] = useState(biografia)

    const filterElement = (categorias) => {
        const updateItems = biografia.filter(ele => {
            return ele.categoria == categorias
        })
        setItems(updateItems)
    }

    return (
        <Row>

            <Col lg={12}>
                <div className="d-flex justify-content-around">
                    <Button className="btn-warning" onClick={() => filterElement("todo")}>Todo</Button>
                    <Button className="btn-warning">HTML</Button>
                    <Button className="btn-warning">Servidor</Button>
                    <Button className="btn-warning">Cliente</Button>
                    <Button className="btn-warning">React</Button>
                    <Button className="btn-warning" onClick={() => setItems(biografia)}>Full</Button>
                </div>
            </Col>

        </Row>

        // <Col lg={12} className="text-end arriba">
        //     <Row>
        //         <Col lg={6}>
        //             <Row>
        //                 <Col lg={9}>
        //                     <div className="d-flex justify-content-around"></div>
        //                     <Row>
        //                         <Col lg={12} className="text-start mt-5">
        //                             <Row>

        //                                 {
        //                                     updateItems.map((elem) => {
        //                                         const { id, nombre, imagen, categoria, tecnologias, descripcion } = elem
        //                                         return (
        //                                             <Col lg={12}>
        //                                                 <Row>
        //                                                     <Col lg={12}>
        //                                                         <p className="fw-bold">{nombre}</p>
        //                                                     </Col>
        //                                                     <Col lg={12}>
        //                                                         <p>{tecnologias}</p>
        //                                                     </Col>
        //                                                     <Col lg={12}>


        //                                                         <p>{descripcion}</p>

        //                                                     </Col>

        //                                                 </Row>
        //                                             </Col>
        //                                         )

        //                                     })
        //                                 }
        //                             </Row>

        //                         </Col>
        //                     </Row>
        //                 </Col>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Col>



    )

}
export default Biography