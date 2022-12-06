import { Col, Row, Container } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5, DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "./Technologies.css"
import technologies from "../../config/technologies-config";
import { useEffect } from "react"


const Technologies = () => {


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

                            <Col lg={3}>
                                <div className="icons html">

                                    <DiHtml5 />
                                    <p>HTML</p>
                                </div>

                            </Col>
                            <Col lg={3} >
                                <div className="icons css">
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