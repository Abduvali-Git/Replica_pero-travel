import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";

export default function Our() {
    return (
        <div className="perogif2" id="perogif2">
            <nav>

                <Link to="/"><img src={logoWhite} alt="" /></Link>

                <div className='links'>
                    <Link to="/"><a href="">Home</a></Link>
                    <Link to="/ex"><a href="">Excursions</a></Link>
                    <Link to="/third">Personal account</Link>


                </div>

            </nav>

            <h1>OUR EXCURSIONS</h1>

        </div>
    )
}