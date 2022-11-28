import { Col, Row, Container } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import "./Technologies.css"

const Technologies = () => {
    return (
        <Row>
            <Col lg={12} className="TechnologiesPosition" >
                <Row>
                    <Col lg={12} className="mb-5">
                        <h2 className="text-center">Tecnologias</h2>
                        <div className="text-center colorGris">Estas son algunas de las tecnologias que mas expeiencia tengo, sou un MERN stack developer </div>
                    </Col>
                    <Col lg={12}>
                        <Row className="icons">
                            <Col xs={3} md={3}>
                                <DiHtml5 />
                                <p>HTML</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <DiCss3 />
                                <p>CSS</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <DiJsBadge />
                                <p>JavaScript</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <DiJsBadge />
                                <p>JavaScript</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <DiReact />
                                <p>React</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <DiNodejs />
                                <p>Node</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <SiExpress />
                                <p>Express</p>
                            </Col>
                            <Col xs={2} md={3}>
                                <SiExpress />
                                <p>Express</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    )

}
export default Technologies