import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Tours() {
    const tabs = ["BUS TOUR", "JEEPING", "YACHTING", "CANYONING"];
    const [active, setActive] = useState(0); 
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="solomid">
            <div className="tours">

                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActive(index)}
                        style={{
                            borderBottom: active === index ? "2px solid dodgerblue" : "none",
                            color: active === index ? "dodgerblue" : "black",
                            paddingBottom: "4px",
                            cursor: "pointer"
                        }}
                    >{tab}</div>))}


            </div><br /><br /><br />
            <div className="inputs">
                <input value={t("abk")} type="text" />
                <input type="date" />
                <input value={t("peo")} type="text" />
            </div><br />
            <button className="btn">{t("show")}</button>
        </div>
    )
}