import { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
// import biografia from "../../config/biography-config"
import { biografia, categories } from "../../config/biography-config";
import "./Biography.css"
const Biography = () => {

    //     // const [items, setItems] = useState()

    //     // const [valorArr, setvalorArr] = useState("tbg-radio-0")

    //     // const buton = ['Educación', 'Experiencia', 'Servicio'];

    //     // let updateItems

    //     // useEffect(() => {
    //     //     setItems(filterItems("Educación"));
    //     // }, []);

    //     // const clickButton = (e) => {
    //     //     const el = e.target;
    //     //     document.querySelector(".selected").classList.remove("selected");
    //     //     el.classList.add("selected");
    //     //     setItems(filterItems(el.value));
    //     // };

    //     // const filterItems = (category) => {
    //     //     return biografia.filter(({ categoria }) => categoria === category);
    //     // };
    //     // const filterElement = (categorias) => {

    //     //     updateItems = biografia.filter(ele => {
    //     //         return ele.categoria == categorias
    //     //     })

    //     //     setItems(updateItems)
    //     // }

    //     // const clickColor = (id) => {

    //     //     if (valorArr != id) {
    //     //         document.querySelector("#" + valorArr).classList.remove("primero")
    //     //         document.querySelector("#" + id).classList.toggle("primero")
    //     //         setvalorArr(id) // va por detras el useState "enqueues"

    //     //     }
    //     // }

    //     const [items, setItems] = useState()

    //     const buttons = ["Educación", "Experiencia", "Servicio"];

    //     useEffect(() => {
    //         setItems(filterItems("Educación"));
    //     }, []);

    //     const filterItems = (category) => {
    //         return biografia.filter(({ categoria }) => categoria === category);
    //     };

    //     const clickButton = (e) => {
    //         const el = e.target;
    //         document.querySelector(".selected").classList.remove("selected");
    //         el.classList.add("selected");
    //         setItems(filterItems(el.value));
    //     };




    //     return (
    //         <Row>
    //             <Col lg={12}>

    //                 {/* antiguo */}
    //                 {/* <ToggleButtonGroup className="d-flex justify-content-around" type="radio" name="options" defaultValue={0}>
    //                     {
    //                         buton.map((buto, idx) => (

    //                             <ToggleButton key={idx} id={"tbg-radio-" + idx} value={idx} onClick={() => filterElement(buto)}>{buto}</ToggleButton>
    //                         ))

    //                     }
    //                 </ToggleButtonGroup> */}

    //                 <div className="d-flex justify-content-around">

    //                     {buttons.map((button, idx) => (
    //                         <button
    //                             className={`col-4 button text-center p-2 text-white cursor-pointer ${idx ? "" : "selected"}`}
    //                             value={button}
    //                             onClick={clickButton}
    //                         >
    //                             {button}
    //                         </button>
    //                     ))}
    //                 </div>


    //             </Col>


    //             <Col lg={12} className="text-start mt-5">
    //                 <Row>

    //                     {items?.map(({ id, nombre, tecnologias, descripcion }) => {
    //                         return (
    //                             <Col lg={12} key={id}>
    //                                 <p className="fw-bold">{nombre}</p>
    //                                 <p>{tecnologias}</p>
    //                                 <p>{descripcion}</p>
    //                             </Col>
    //                         );
    //                     })}
    //                 </Row>

    //             </Col>
    //         </Row >

    //     )

    // }

    const [items, setItems] = useState();

    const buttons = [...new Set(biografia.map(({ categoria }) => categoria))]
        .sort()
        .map((cat) => ({ name: categories[cat], id: cat }));

    useEffect(() => {
        setItems(filterItems(buttons[0].id));
    }, []);

    const filterItems = (category) => {
        debugger;
        return biografia.filter(({ categoria }) => categoria === Number(category));
    };

    const clickButton = (e) => {
        const el = e.target;
        document.querySelector(".selected").classList.remove("selected");
        el.classList.add("selected");
        setItems(filterItems(el.value));
    };

    return (
        <Row>
            <Col lg={12}>
                <div className="d-flex justify-content-around">
                    {buttons.map(({ name, id }, idx) => (
                        <button
                            className={`col-4 button ${idx ? "" : "selected"}`}
                            value={id}
                            onClick={clickButton}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </Col>

            <Col lg={12} className="text-start mt-5">
                <Row>
                    {items?.map(({ id, nombre, tecnologias, descripcion }) => {
                        return (
                            <Col lg={12} key={id}>
                                <p className="fw-bold">{nombre}</p>
                                <p>{tecnologias}</p>
                                <p>{descripcion}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
};
export default Biography