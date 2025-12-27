import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <div className="perogif">
            <nav>

                <Link to="/"> <img src={logoWhite} alt="" /></Link>

                <div className='links'>
                    <Link to="/"><a href="">Home</a></Link>
                    <Link to="/ex"><a href="">Excursions</a></Link>
                    <Link to="/third">Personal account</Link>
                </div>

            </nav>

            <div style={{ marginLeft: "20%", marginTop: "8%" }}>
                <h2 style={{ color: "orange" }}>Bus tour</h2>
                <h1 style={{ fontSize: "300%" }}>GOLDEN RING OF ABKHAZIA <br />
                    (FROM ADLER)</h1><br />
                <div className="heart">
                    <button className="btn">To other excursions</button>
                    <div><img src={logoWhite} alt="" /></div>
                </div>
            </div>

        </div>
    )
}