import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
export default function Types() {
    return (
        <div className="types">
            <h1>Types of excursions</h1><br /><br /><br />
            <div className="fourgrid">
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>Tour with air baloon</h2><br />
                        <p>One of the most action-packed, affordable, and popular types of vacation. During a single trip, you can see the sights of several cities at once, at a fraction of the cost of a traditional sightseeing tour with overnight hotel stays.</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>Tour with air baloon</h2><br />
                        <p>One of the most action-packed, affordable, and popular types of vacation. During a single trip, you can see the sights of several cities at once, at a fraction of the cost of a traditional sightseeing tour with overnight hotel stays.</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>Tour with air baloon</h2><br />
                        <p>One of the most action-packed, affordable, and popular types of vacation. During a single trip, you can see the sights of several cities at once, at a fraction of the cost of a traditional sightseeing tour with overnight hotel stays.</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>Tour with air baloon</h2><br />
                        <p>One of the most action-packed, affordable, and popular types of vacation. During a single trip, you can see the sights of several cities at once, at a fraction of the cost of a traditional sightseeing tour with overnight hotel stays.</p>
                    </div>
                </div>
            </div>
            <div className="lastmid">
                <p>Choose the tour that's right for you on our website and  <br />
                    book online — skip the lines, quickly and easily!</p><br />
                <Link to="/ex"> <button className="btn">To excursions</button></Link>
            </div>
        </div>
    )
}