import item2 from "../Visual/item2.png"
import { useTranslation } from "react-i18next";

export default function Infinite() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="info" >
            <div>
                <h1 style={{ color: "dodgerblue" }}>{t("route")}</h1>
                <ul>
                    <li>The city of Gagra, Colonnade, restaurant "Gagripsh", Prince <br />
                        Oldenburg Park;</li>
                    <li>Observation deck "Farewell Homeland", "Chabgar" cornice, <br />
                        Suspension bridge over the Bzyb River;</li>
                    <li>Tasting of cheese, honey, wine, chacha (included <br />
                        in the price of the excursion), Blue Lake, Yupsharsky <br />
                        Canyon ("Stone Bag"), Lake <br />
                        "Ritsa", Waterfalls "Maiden and Men's Tears".</li><br />
                    <h3>Next to choose from:</h3>
                    <li>New Athos Monastery, New Athos Cave, Man-Made <br />
                        Waterfall, Simon the Canaanite Church, <br />
                        Swan Lake.</li>
                    <li>Thermal spring in the village of Primorskoye.</li>
                </ul>
            </div>
            <img style={{ filter: "blur(3px)" }} src={item2} alt="" />
            <img src={item2} alt="" />
        </div>
    )
}