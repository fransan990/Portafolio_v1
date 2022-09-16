import { useTypewriter } from 'react-simple-typewriter'
import { Col } from "react-bootstrap";
import "./AnimatedWriting.css"

const AnimatedWriting = () => {

    const { text } = useTypewriter({
        words: [' Web Developer', ' React JS Developer', ' Node JS Developer',],
        loop: 0
    })

    return (

        <Col lg={12} className="mt-5 mb-5">
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