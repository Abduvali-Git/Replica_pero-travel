import { useState } from "react";
import item from "../Visual/item.png"
import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
export default function Similar() {
    

    const [visibleBlocks, setVisibleBlocks] = useState([true, true, true, true, true]);

    const toggleBlock = (index) => {
        setVisibleBlocks(prev => {
            const newState = [...prev];
            newState[index] = !newState[index]; // переключаем конкретный блок
            return newState;
        });
    };
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "3%", color: "dodgerblue" }}>Our excursions</h1><br /><br /><br />
            <div className="bigflex">
                <div className="fp">
                    <h2 style={{ color: "dodgerblue" }}>Filters</h2><br />
                    { }
                    <div className="common" onClick={() => toggleBlock(0)}>
                        <h2>Price</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[0] ? "_" : "+"}</h2>
                    </div><br />
                    { }
                    {visibleBlocks[0] && <div className="twoinp">
                        <input value={1400} type="number" />
                        <input value={4000} type="number" />
                    </div>}

                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(1)}>
                        <h2>Number of People</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[1] ? "_" : "+"}</h2>
                    </div><br />
                    { }
                    {visibleBlocks[1] && <div className="teninp">
                        <button>1 per.</button>
                        <button>2 per.</button>
                        <button>3 per.</button>
                        <button>4 per.</button>
                        <button>5 per.</button>
                        <button>6 per.</button>
                        <button>7 per.</button>
                        <button>8 per.</button>
                        <button>9 per.</button>
                        <button>10 per.</button>
                        <button>More than 10 per.</button>
                    </div>}

                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(2)}>
                        <h2>Place</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[2] ? "_" : "+"}</h2>
                    </div><br />
                    { }
                    {visibleBlocks[2] && <div className="radios">
                        <input type="radio" /><label>Abkhazia</label><br />
                        <input type="radio" /><label>Krasnaya Polyana</label><br />
                        <input type="radio" /><label>Sochi</label><br />
                        <input type="radio" /><label>Adler</label><br />
                    </div>}
                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(3)}>
                        <h2>Duration</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[3] ? "_" : "+"}</h2>
                    </div><br />
                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(4)}>
                        <h2>Date</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[4] ? "_" : "+"}</h2>
                    </div><br />
                </div>
                <div className="sp">
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>Bus Tour</h3>
                            <h2>Golden ring of Abkhazia (from Adler)</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" /> 2,5 hours</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>Adults' ticket</h5>
                                <h5>Kids' ticket</h5>
                            </div><br />
                            <div className="inside">
                                <div></div>
                                <h4>A journey through the "Golden Ring of Abkhazia" <br />
                                    awaits you in a Mercedes Sprinter (20 seats). A professional <br />
                                    guide will accompany you along <br />
                                    the route. Pick-up is from your <br />
                                    hotel or the nearest bus stop. Border crossing is direct
                                    <br />...Read more</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">More details</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>Bus Tour</h3>
                            <h2>Golden ring of Abkhazia (from Adler)</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" /> 2,5 hours</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>Adults' ticket</h5>
                                <h5>Kids' ticket</h5>
                            </div><br />
                            <div className="inside">
                                <div></div>
                                <h4>A journey through the "Golden Ring of Abkhazia" <br />
                                    awaits you in a Mercedes Sprinter (20 seats). A professional <br />
                                    guide will accompany you along <br />
                                    the route. Pick-up is from your <br />
                                    hotel or the nearest bus stop. Border crossing is direct
                                    <br />...Read more</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">More details</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>Bus Tour</h3>
                            <h2>Golden ring of Abkhazia (from Adler)</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" /> 2,5 hours</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>Adults' ticket</h5>
                                <h5>Kids' ticket</h5>
                            </div><br />
                            <div className="inside">
                                <div></div>
                                <h4>A journey through the "Golden Ring of Abkhazia" <br />
                                    awaits you in a Mercedes Sprinter (20 seats). A professional <br />
                                    guide will accompany you along <br />
                                    the route. Pick-up is from your <br />
                                    hotel or the nearest bus stop. Border crossing is direct
                                    <br />...Read more</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">More details</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>Bus Tour</h3>
                            <h2>Golden ring of Abkhazia (from Adler)</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" /> 2,5 hours</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>Adults' ticket</h5>
                                <h5>Kids' ticket</h5>
                            </div><br />
                            <div className="inside">
                                <div></div>
                                <h4>A journey through the "Golden Ring of Abkhazia" <br />
                                    awaits you in a Mercedes Sprinter (20 seats). A professional <br />
                                    guide will accompany you along <br />
                                    the route. Pick-up is from your <br />
                                    hotel or the nearest bus stop. Border crossing is direct
                                    <br />...Read more</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">More details</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
        </>
    )
}