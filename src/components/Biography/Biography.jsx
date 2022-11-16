import { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"
const Biography = () => {

    const [items, setItems] = useState()
    const [colores, setColores] = useState()

    let updateItems

    useEffect(() => {

        updateItems = biografia.filter(ele => {

            return ele.categoria == "Educación"
        })
        setItems(updateItems)

    }, []);

    const filterElement = (categorias) => {

        updateItems = biografia.filter(ele => {
            return ele.categoria == categorias
        })

        setItems(updateItems)
    }

    const click = (id) => {
        document.querySelector("#" + id).style.backgroundColor = "red"
        alert("hola")
    }

    const buton = ['Educación', 'Experiencia', 'Servicio'];

    return (
        <Row>
            <Col lg={12}>
                {/* reparar y hacer funcion con toggle */}
                {/* <ToggleButtonGroup className="d-flex justify-content-around" type="radio" name="options" defaultValue={0}>
                    {
                        buton.map((buto, idx) => (

                            <ToggleButton key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => filterElement(buto)}>{buto}</ToggleButton>
                        ))

                    }
                </ToggleButtonGroup> */}

                <ToggleButtonGroup className="d-flex justify-content-around" type="radio" name="options" defaultValue={0}>
                    {
                        buton.map((buto, idx) => (

                            <Button key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => { filterElement(buto); click("tbg-radio-" + idx); }}>{buto}</Button>
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