import logoColor from "../Visual/logoColor.png"
import logoWhite from "../Visual/logoWhite.png"
export default function Docs() {
    return (
        <>
            <h1 style={{ textAlign: "center", color: "dodgerblue" }}>Additional expenses (optional)</h1><br /><br /><br />
            <div className="opac">

                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Stalin's dacha</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Milk Falls</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>New Athenian Cave</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>500 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Thermal spring</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoColor} alt="" /> <span>200 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>Dinner</h4>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around",marginLeft:"3%"}}>
                <div>
                    <h1 style={{ color: 'dodgerblue' }}>Important information</h1><br /><br /><br />
                    <p>When crossing the border (Russia-Abkhazia) you must have:</p><br />
                    <div className="cont">
                        <div className="circle">
                            <img src={logoWhite} alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: 'dodgerblue' }}>Passport of a citizen of the Russian Federation</h2><br />
                        </div>
                    </div><br /><br /><br />
                    <div className="cont">
                        <div className="circle">
                            <img src={logoWhite} alt="" />
                        </div>
                        <div>
                            <h2 style={{ color: 'dodgerblue' }}>Citizens under 14 years of age require a birth certificate.</h2><br />
                            <p>Minor children cross the border accompanied <br />
                                by their parents, accompanied by a <br />
                                legal representative (notarized power of attorney indicating <br />
                                the country of departure of the child).</p>
                        </div>
                    </div>
                </div>
                <div className="greys">
                    <div>
                        <i>Entry into Abkhazia is restricted for foreign citizens, with the exception of citizens of Ukraine, the Donetsk People's Republic (DPR), and the Luhansk People's Republic (LPR).</i>
                    </div><br />
                    <div>
                        <i>When returning from Abkhazia to Russia, you do not need to take a PCR test, and you will not be quarantined (RF Government Resolution 1996-R of August 1, 2020).</i>
                    </div>
                </div>
            </div>
        </>
    )
}