import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import emailjs from 'emailjs-com';
import "./Contact.css"
import { useState } from "react";

const Contact = () => {


    //borra datos al enviar 

    const [orderDetails, setOrderDetails] = useState({})

    const handleInputChange = e => {
        setOrderDetails({
            ...orderDetails, [e.target.name]: e.target.value
        })
    }

    const enviarEmail = (e) => {


        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_opa6obq', 'template_uci8fqu', e.target, '-LcIVbhNWVgvNjhBZ')

            .then((result) => {
                alert("Enviado con exito");
            }, (error) => {
                console.log(error.text);
            });
    }

    const imageIronhack = "../../../images/IronhackNoche.jpeg"

    const { Nombre, Email, Asunto, Mensaje } = orderDetails


    return (


        //poner foto a la derecha y ponerlo bonito 

        <Container className="mt-5 mb-5" id="Contacta">
            <Row>
                <Col lg={12} className="separacionSuperiorContact">
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Row>
                                <Col lg={12}>
                                    <h3>
                                        Contacta Conmigo
                                    </h3>
                                    <div className="mt-4">
                                        Estoy disponible para trabajar en cualquier momento . Conéctate conmigo por teléfono: 648949799 o por correo electrónico: fransan990@gmail.com
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    {/* <form onSubmit={enviarEmail} className="caja">
                                        <div className="form-row mt-4">
                                            <div className="form-group col-md-6 col-lg-12">
                                                <label for="nombre"></label>
                                                <input type="text" className="form-control col-12" id="nombre" name="nombre" placeholder="Nombre *" onChange={handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6 col-lg-12">
                                                <label for="email"></label>
                                                <input type="text" className="form-control" id="email" name="email" placeholder="Email *" onChange={handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6 col-lg-12">
                                                <label for="asunto"></label>
                                                <input type="text" className="form-control" id="asunto" name="asunto" placeholder="Asunto *" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="mensaje"></label>
                                            <textarea type="text" className="form-control" id="mensaje" name="mensaje" placeholder="Escribe tu mensaje *" onChange={handleInputChange}></textarea>
                                        </div>
                                        <button type="submit" className="botonContact">Enviar Correo</button>
                                    </form> */}


                                    <Form onSubmit={enviarEmail}>

                                        <Form.Group className="mt-4 col-md-6 col-lg-12" controlId="Nombre">
                                            <Form.Label for="Nombre"></Form.Label>
                                            <Form.Control type="text" name="Nombre" value={Nombre} placeholder="Nombre *" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Form.Group className="mt-4 col-md-6 col-lg-12" controlId="Email" >
                                            <Form.Label for="Email"></Form.Label>
                                            <Form.Control type="text" name="Email" value={Email} placeholder="Email *" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Form.Group className="mt-4 col-md-6 col-lg-12" controlId="Asunto">
                                            <Form.Label for="Asunto"></Form.Label>
                                            <Form.Control type="text" name="Asunto" value={Asunto} placeholder="Asunto" onChange={handleInputChange} />
                                        </Form.Group>

                                        <FloatingLabel controlId="Mensajes">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Escribe tu mensaje *"
                                                className="mt-4 w-100"
                                                value={Mensaje}
                                                onChange={handleInputChange}
                                            />
                                        </FloatingLabel>

                                        <Button type="submit" className="botonContact">Enviar Correo</Button>

                                    </Form>
                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6}>
                            <Image
                                src={imageIronhack}
                                // roundedCircle
                                className="imagenIronhack"
                            // id="Sobre Mi"
                            />

                        </Col>

                    </Row>
                </Col>
            </Row >
        </Container >
    )


}
export default Contact