import logoWhite from "../Visual/logoColor.png"
export default function Date() {
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: "3%" }}>
                <h2 style={{ color: "dodgerblue" }}>Description of excursion</h2><br />
                <h4>A journey through the "Golden Ring of Abkhazia" awaits you in a Mercedes Sprinter (20 seats). <br />
                    A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border <br />
                    crossing is direct.</h4>
            </div><br /><br />
            <div className="opac">

                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>1 618 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Adults' ticket</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>1 412 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Kids' ticket</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>12 hours</span> </h1>
                </div>
            </div>
        </>
    )
}