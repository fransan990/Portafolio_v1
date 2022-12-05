import { Col, Row, Container } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5, DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "./Technologies.css"
import technologies from "../../config/technologies-config";
import { useEffect } from "react"


const Technologies = () => {


    useEffect(() => {
        //     //     // document.querySelectorAll(".icons p").classList.add("color").setAttribute('style', 'red');
        tech()
    }, []);

    const colors = [...new Set(technologies.filter(({ categoria }) => categoria))] //no funciona pero la idea es buena 


    const tech = () => {
        // hacrlo funcion parecido a biografia para optimizar todo y poner la clase 


        // array que reciba valor del parametor y que se recorra


        let color = document.querySelectorAll(".icons p")

        color.forEach(element => {
            element.style.color = "red";
        });



    }


    return (
        <Row>
            <Col lg={12} className="TechnologiesPosition" >
                <Row>
                    <Col lg={12} className="mb-5">
                        <h2 className="text-center">Tecnologias</h2>
                        <div className="text-center colorGris">Estas son algunas de las tecnologias que mas expeiencia tengo, sou un MERN stack developer </div>
                    </Col>
                    <Col lg={10} className="mx-auto m-0 mb-5 text-center">
                        <Row>
                            {/* {
                                technologies.map(({ icono, nombre, clase }) => {
                                    return (


                                        <Col lg={3}>
                                            <div className="icons">

                                                <p className="color">{icono}</p>
                                                <p>{nombre}</p>
                                            </div>

                                        </Col>


                                    )
                                })
                            }  */}

                            <Col lg={3}>
                                <div className="icons">

                                    <DiHtml5 />
                                    <p>HTML</p>
                                </div>

                            </Col>
                            <Col lg={3} >
                                <div className="icons">
                                    <DiCss3 />
                                    <p>CSS</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="icons">
                                    <DiJsBadge />
                                    <p>JavaScript</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="icons">

                                    <BsBootstrapFill />
                                    <p>Boostrap</p>
                                </div>

                            </Col>
                            <Col lg={3}>
                                <div className="icons">
                                    <DiMongodb />
                                    <p>MongoDB</p>

                                </div>

                            </Col>
                            <Col lg={3}>
                                <div className="icons">

                                    <SiExpress />
                                    <p>Express</p>

                                </div>

                            </Col>
                            <Col lg={3}>
                                <div className="icons">


                                    <DiReact />
                                    <p>React</p>
                                </div>

                            </Col>
                            <Col lg={3}>
                                <div className="icons">

                                    <DiNodejs />
                                    <p>Node</p>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    )

}
export default Technologies