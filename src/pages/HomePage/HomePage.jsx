import "./HomePage.css"
import Navigation from "../../components/Nav/Navigation"
import Header from "../../components/Header/Header"
import About from "../../components/About/About"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"

const HomePage = () => {

    return (
        <>
            <Navigation />
            <Header />
            <About />
            <Projects />
            <Contact />

        </>

    )

}
export default HomePage