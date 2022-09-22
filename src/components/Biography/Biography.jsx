import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"

const Biography = () => {

    const updateItems = biografia.filter(ele => {
        return ele.categoria == "educación"
    })



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

        <Col lg={12} className="text-end arriba">
            <Row>

                <Col lg={12} className="text-center pb-5 mb-5 ">
                    <h3 className="display-1">Educación</h3>
                </Col>
                <Col lg={6} className="linea">
                    <div className="display-1 margen">
                        <p className="h">Crear</p>

                        <p className="o">productos</p>
                        <p className="i">innovadores</p>

                    </div>

                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={9}>


                            <div className="d-flex justify-content-around">

                                {/* <Button className="btn-warning" onClick={() => filterElement("service")}>Servicios</Button> */}
                                {/* <Button className="btn-warning" onClick={() => filterElement("educación")}>Educación</Button>
                                <Button className="btn-warning" onClick={() => filterElement("experiencia")}>Experencia</Button> */}

                            </div>
                            <Row>
                                <Col lg={12} className="text-start mt-5">
                                    <Row>



                                        {
                                            updateItems.map((elem) => {
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
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>



    )

}
export default Biography