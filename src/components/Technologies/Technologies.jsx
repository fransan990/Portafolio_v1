import { Col, Row, Container } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import "./Technologies.css"

const Technologies = () => {
    return (
        <Row>
            <Col lg={12} className="TechnologiesPosition">
                <Row>
                    <Col lg={12} className="mb-5">
                        <div className="text-center display-4">Tecnologias</div>
                        <div className="text-center display-7">Estas son algunas de las tecnologias que mas expeiencia tengo </div>
                    </Col>
                    <Col lg={12}>
                        <Row className="icons">
                            <Col xs={2} md={2}>
                                <DiHtml5 />
                                <p>HTML</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <DiCss3 />
                                <p>CSS</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <DiJsBadge />
                                <p>JavaScript</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <DiReact />
                                <p>React</p>
                            </Col>
                            <Col xs={2} md={2}>
                                <DiNodejs />
                                <p>Node</p>
                            </Col>
                            <Col xs={2} md={2}>
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