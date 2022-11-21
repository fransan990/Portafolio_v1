import { Container, Row, Col } from "react-bootstrap"
// import { FaLocationArrow } from "react-icons/fa"

import emailjs from 'emailjs-com';
import "./Contact.css"

const Contact = () => {

    const enviarEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_opa6obq', 'template_uci8fqu', e.target, '-LcIVbhNWVgvNjhBZ')

            .then((result) => {
                alert("Enviado con exito");
            }, (error) => {
                console.log(error.text);
            });
    }

    return (


        //poner foto a la derecha y ponerlo bonito 

        <Container className="mt-5 mb-5" id="Contacta">
            <Row>
                <Col lg={12} className="separacionSuperiorContact">
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={12} className="position-relative">
                                    <h3>
                                        Contacta Conmigo
                                    </h3>
                                    <div className="mt-3">
                                        Estoy disponible para trabajar en cualquier momento . Conéctate conmigo por teléfono: 648949799 o por correo electrónico: fransan990@gmail.com
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <form onSubmit={enviarEmail} className="caja">
                                        <div className="form-row mt-3">
                                            <div className="form-group col-md-6 col-lg-12">
                                                <label for="npmbre"></label>
                                                <input type="text" className="form-control col-12" id="nombre" name="nombre" placeholder="Nombre *" />
                                            </div>
                                            <div className="form-group col-md-6 col-lg-12">
                                                <label for="email"></label>
                                                <input type="text" className="form-control" id="email" name="email" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="mensaje"></label>
                                            <textarea type="text" className="form-control" id="mensaje" name="mensaje" placeholder="Escribe tu mensaje *"></textarea>
                                        </div>
                                        <button type="submit" className="botonContact">Enviar Correo</button>
                                    </form>
                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6}>
                            Otro espacio foto
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container >
    )


}
export default Contact