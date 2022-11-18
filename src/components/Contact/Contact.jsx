import { Container, Row, Col } from "react-bootstrap"
// import { FaLocationArrow } from "react-icons/fa"
import emailjs from 'emailjs-com';


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

        <Container>

            <Row>
                <Col lg={12} className="mt-5 position-relative">
                    <div className="h3 text-center mt-5">
                        Contacta Conmigo
                    </div>
                </Col>
                <Col lg={12}>
                    <Row>
                        <h1>Formulario de Contacto</h1>

                        <Col lg={6}>

                            <hr />
                            <form onSubmit={enviarEmail}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label><b>Nombre</b></label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><b>Email</b></label>
                                        <input type="text" className="form-control" id="email" name="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><b>Mensaje</b></label>
                                    <textarea type="text" className="form-control" id="mensaje" name="mensaje"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
                            </form>
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