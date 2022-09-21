import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"

const Biography = () => {


    const [items, setItems] = useState([])

    const filterElement = () => {
        return updateItems = biografia.filter(ele => {
            return ele.categoria === "educación"
        })

    }





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
                <Col lg={6} className="linea">
                    <div className="display-1 ">
                        <p className="h">Crear</p>

                        <p className="o">productos</p>
                        <p className="i">innovadores</p>

                    </div>

                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={7}>


                            <p className="mt-5 text-center mb-5">
                                El mundo digital es muy amplio y a mi me gustaria formar parte de el gracias a todos los conocimientos que he aprendido durante todo este tiempo, aqui os muestro mi biografia y lo que puedo ofrecer
                            </p>
                            <div className="d-flex justify-content-around">

                                {/* <Button className="btn-warning" onClick={() => filterElement("service")}>Servicios</Button> */}
                                {/* <Button className="btn-warning" onClick={() => filterElement("educación")}>Educación</Button>
                                <Button className="btn-warning" onClick={() => filterElement("experiencia")}>Experencia</Button> */}

                            </div>
                            <Row>
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
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>



    )

}
export default Biography