import GIF from "./components/GIF"
import Loop from "./components/Loop"
import About from "./components/About"
import Types from "./components/Types"
import Gallery from "./components/Gallery"
import ContactForm from "./components/ContactForm"
import Bottom from "./components/Bottom"
export default function HomeApp() {
    return (
        <>
            <GIF />
            <Loop />
            <About />
            <Types />
            <Gallery />
            <Loop />
            <ContactForm />
            <Bottom />
        </>
    )
}