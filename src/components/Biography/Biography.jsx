import { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
// import biografia from "../../config/biography-config"
import { biografia, categories } from "../../config/biography-config";
import "./Biography.css"
const Biography = () => {

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
                            className={`col-3 button mx-2 ${idx ? "" : "selected"}`}
                            value={id}
                            onClick={clickButton}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </Col>

            <Col lg={12} className="text-start mt-5 ">
                <Row>
                    {items?.map(({ id, nombre, tecnologias, descripcion }) => {
                        return (
                            <Col lg={12} key={id}>
                                <p className="fw-bold">{nombre}</p>
                                <p className="colorGris">{tecnologias}</p>
                                <p className="colorGris">{descripcion}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
};
export default Biography