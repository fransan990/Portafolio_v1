import { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
import biografia from "../../config/biography-config"
import "./Biography.css"
const Biography = () => {

    const [items, setItems] = useState()

    const [valorArr, setvalorArr] = useState("tbg-radio-0")

    let updateItems

    useEffect(() => {

        filterOneElement()

    }, []);

    const filterOneElement = () => {

        updateItems = biografia.filter(ele => {
            document.querySelector("#tbg-radio-0").classList.add("primero");

            return ele.categoria == "Educación"

        })
        setItems(updateItems)
    }

    const filterElement = (categorias) => {

        updateItems = biografia.filter(ele => {
            return ele.categoria == categorias
        })

        setItems(updateItems)
    }

    // const clickColor = (id) => {

    //     setColoresArr([...coloresArr, id])

    //     const ultimo = coloresArr[coloresArr.length - 1]
    //     console.log("-------------------")
    //     console.log("ultimo valor del array", ultimo)


    //     if (ultimo != id) {
    //         document.querySelector("#" + ultimo).style.backgroundColor = "transparent"
    //         document.querySelector("#" + id).style.backgroundColor = "red"
    //         console.log("array original", coloresArr)
    //         // coloresArr.pop()
    //         // setColoresArr([...coloresArr, id])
    //         console.log("despues del cambio", coloresArr)

    //     }
    //     coloresArr.pop()
    //     setColoresArr([...coloresArr, id])
    // }
    const clickColor = (id) => {

        if (valorArr != id) {
            document.querySelector("#" + valorArr).classList.remove("primero")
            document.querySelector("#" + id).classList.toggle("primero")
            setvalorArr(id) // va por detras el useState "enqueues"

        }
    }

    // const clickColor = (id) => {

    //     setvalorArr([...valorArr, id])

    //     const ultimo = valorArr[valorArr.length - 1]
    //     console.log("valor inical", valorArr)

    //     if (valorArr != id) {
    //         document.querySelector("#" + valorArr).classList.remove("primero")
    //         document.querySelector("#" + id).classList.toggle("primero")
    //         // setvalorArr(id) // va por detras el useState "enqueues"


    //     }
    //     // console.log("valor nuevo", valorArr)

    //     valorArr.pop()
    //     setvalorArr([...valorArr, id])
    //     console.log("valor nuevo", valorArr)

    // }

    const buton = ['Educación', 'Experiencia', 'Servicio'];

    return (
        <Row>
            <Col lg={12}>

                {/* antiguo */}
                {/* <ToggleButtonGroup className="d-flex justify-content-around" type="radio" name="options" defaultValue={0}>
                    {
                        buton.map((buto, idx) => (

                            <ToggleButton key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => filterElement(buto)}>{buto}</ToggleButton>
                        ))

                    }
                </ToggleButtonGroup> */}

                <div className="d-flex justify-content-around">
                    {

                        buton.map((buto, idx) => (
                            /* <Button className="col-4" key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => { filterElement(buto); clickColor("tbg-radio-" + idx); }}>{buto}</Button> */

                            <buton className="col-4 text-center p-2 text-white cursor-pointer" key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => { filterElement(buto); clickColor("tbg-radio-" + idx); }}>{buto}</buton>
                        ))

                    }
                </div>


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