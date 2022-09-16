import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import biografia from "../../config/biography-config"

const Biography = () => {


    // const [items, setItems] = useState(biografia)

    // const filterElement = (categorias) => {
    //     const updateItems = biografia.filter(ele => {
    //         return ele.categoria == categorias
    //     })
    //     setItems(updateItems)
    // }

    return (
        // <Row>
        //     <Col lg={12}>
        //         <div className="d-flex justify-content-around">

        //             <Button className="btn-warning" onClick={() => filterElement("service")}>Todo</Button>
        //         </div>
        //     </Col>
        //     <Col lg={12}>
        //         <Row>
        //             {
        //                 items.map((elem) => {
        //                     const { id, nombre, imagen, categoria, tecnologias, descripcion } = elem
        //                     return (
        //                         <Col lg={12}>
        //                             <Row>
        //                                 <Col lg={12}>
        //                                     <p>{nombre}</p>
        //                                 </Col>
        //                                 <Col lg={12}>
        //                                     <p>{tecnologias}</p>
        //                                 </Col>
        //                                 <Col lg={12}>


        //                                     <p>{descripcion}</p>

        //                                 </Col>

        //                             </Row>
        //                         </Col>
        //                     )

        //                 })
        //             }
        //         </Row>
        //     </Col>







        // </Row>

        <Col lg={12}>
            hola
        </Col>



    )

}
export default Biography