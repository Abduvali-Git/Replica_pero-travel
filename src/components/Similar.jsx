import { useState } from "react";
import item from "../Visual/item.png"
import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Similar() {

    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const [visibleBlocks, setVisibleBlocks] = useState([true, true, true, true, true]);

    const toggleBlock = (index) => {
        setVisibleBlocks(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "3%", color: "dodgerblue" }}>{t("our")}</h1><br /><br /><br />
            <div className="bigflex">
                <div className="fp">
                    <h2 style={{ color: "dodgerblue" }}>{t("fil")}</h2><br />
                    { }
                    <div className="common" onClick={() => toggleBlock(0)}>
                        <h2>{t("price")}</h2>
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
                        <h2>{t("num")}</h2>
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
                        <button>{t("than")}</button>
                    </div>}

                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(2)}>
                        <h2>{t("place")}</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[2] ? "_" : "+"}</h2>
                    </div><br />
                    { }
                    {visibleBlocks[2] && <div className="radios">
                        <input type="radio" name="place" /><label>{t("abk")}</label><br />
                        <input type="radio" name="place" /><label>{t("kras")}</label><br />
                        <input type="radio" name="place" /><label>{t("sochi")}</label><br />
                        <input type="radio" name="place" /><label>{t("adler")}</label><br />
                    </div>}
                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(3)}>
                        <h2>{t("dura")}</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[3] ? "_" : "+"}</h2>
                    </div><br />
                    <br />
                    <hr />
                    <br />
                    { }
                    <div className="common" onClick={() => toggleBlock(4)}>
                        <h2>{t("date")}</h2>
                        <h2 style={{ color: "dodgerblue" }}>{visibleBlocks[4] ? "_" : "+"}</h2>
                    </div><br />
                </div>
                <div className="sp">
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>{t("bus")}</h3>
                            <h2>{t("gold")}</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" />{t("hou")}</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>{t("adt")}</h5>
                                <h5>{t("kit")}</h5>
                            </div><br />
                            <div className="inside">
                                <h4>{t("desc3")}</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">{t("more")}</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>{t("bus")}</h3>
                            <h2>{t("gold")}</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" />{t("hou")}</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>{t("adt")}</h5>
                                <h5>{t("kit")}</h5>
                            </div><br />
                            <div className="inside">
                                <h4>{t("desc3")}</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">{t("more")}</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>{t("bus")}</h3>
                            <h2>{t("gold")}</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" />{t("hou")}</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>{t("adt")}</h5>
                                <h5>{t("kit")}</h5>
                            </div><br />
                            <div className="inside">
                                <h4>{t("desc3")}</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">{t("more")}</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />
                    <div className="comb">
                        <img src={item} alt="" />
                        <div className="mix">
                            <h3 style={{ color: "orange" }}>{t("bus")}</h3>
                            <h2>{t("gold")}</h2><br />
                            <div className="blue">
                                <h2><img src={logoWhite} alt="" /> 1618 $</h2>
                                <h2><img src={logoWhite} alt="" /> 1412 $</h2>
                                <h2><img style={{ width: "16%" }} src={logoWhite} alt="" />{t("hou")}</h2>
                            </div>
                            <div style={{ display: 'flex', marginLeft: "10px", color: "gray" }}>
                                <h5 style={{ marginRight: "100px" }}>{t("adt")}</h5>
                                <h5>{t("kit")}</h5>
                            </div><br />
                            <div className="inside">
                                <h4>{t("desc3")}</h4>
                            </div><br />
                            <div className="heart">
                                <Link to="/third"><button className="btn">{t("more")}</button></Link>
                                <div><img src={logoWhite} alt="" /></div>
                            </div>
                        </div>
                    </div><br />



                </div>
            </div>
        </>
    )
}