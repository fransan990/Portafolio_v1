import { useTypewriter } from 'react-simple-typewriter'
import { Container, Col, Row, } from "react-bootstrap";

const AnimatedWriting = () => {

    const { text } = useTypewriter({
        words: [' Web Developer', ' React JS Developer', ' Node JS Developer',],
        loop: 0
    })

    return (

        <Col lg={6} className="mt-5">

            <div className='display-4'>
                Yo soy

                <span style={{ fontWeight: 'bold' }}>
                    {text}
                </span>

            </div>
        </Col>


    )



}
export default AnimatedWriting