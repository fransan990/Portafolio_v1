import { Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./Footer.css"
const Footer = () => {


    // hacerlo con map array y ponerlo mas bonito nose como bueno si radius a los botones y eso
    return (

        <Col lg={12} className="footer">
            <div className="text-center text-white">
                <div className="p-4 pb-0">
                    <div className="mb-4">
                        <div className="btn btn-primary btn-floating m-1 twiter"> <FaTwitter /></div>
                        <div className="btn btn-primary btn-floating m-1 instagram"> <FaInstagram /></div>
                        <div className="btn btn-primary btn-floating m-1 linkedin"> <FaLinkedin /></div>
                        <div className="btn btn-primary btn-floating m-1 github"> <FaGithub /></div>
                    </div>
                </div>

                <div className="text-center p-3 bg-dark">
                    © 2022 Copyright: Francisco Javier
                </div>
            </div>
        </Col>
    )
}
export default Footer