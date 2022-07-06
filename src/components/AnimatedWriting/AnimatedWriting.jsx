import { useTypewriter } from 'react-simple-typewriter'

const AnimatedWriting = () => {

    const { text } = useTypewriter({
        words: [' Web Developer', ' React JS Developer', ' Node JS Developer',],
        loop: 0 // Infinit
    })

    return (
        <h3>
            hola Yo soy


            <span style={{ fontWeight: 'bold' }}>
                {text}
            </span>

        </h3>
    )



}
export default AnimatedWriting