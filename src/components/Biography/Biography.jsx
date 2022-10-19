import { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"
const Biography = () => {

    const [items, setItems] = useState()

    let updateItems

    useEffect(() => {

        updateItems = biografia.filter(ele => {

            return ele.categoria == "educación"
        })
        setItems(updateItems)

    }, []);

    const filterElement = (categorias) => {

        updateItems = biografia.filter(ele => {
            return ele.categoria == categorias
        })

        setItems(updateItems)
    }

    const buton = ['educación', 'experiencia', 'service'];

    return (
        <Row>
            <Col lg={12}>

                <ToggleButtonGroup className="d-flex justify-content-around" type="radio" name="options" defaultValue={0}>
                    {
                        buton.map((buto, idx) => (

                            <ToggleButton key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => filterElement(buto)}>{buto}</ToggleButton>
                        ))

                    }
                </ToggleButtonGroup>

            </Col>


            <Col lg={12} className="text-start mt-5">
                <Row>

                    {
                        items?.map((elem) => {
                            const { id, nombre, tecnologias, descripcion } = elem
                            return (
                                <Col lg={12} key={id}>

                                    <p className="fw-bold">{nombre}</p>
                                    <p>{tecnologias}</p>
                                    <p>{descripcion}</p>

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