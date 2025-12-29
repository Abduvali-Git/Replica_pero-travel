import logoWhite from "../Visual/logoWhite.png"
import lastItem from "../Visual/lastItem.png"
import { useTranslation } from "react-i18next";

export default function Booking() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="booking">
            <img src={lastItem} alt="" />
            <div>
                <h1>{t("atour")}</h1>
                <input type="text" name="" value={"Abkhazia"} id="" /> <br />
                <input type="date" /><br />
                <input value={5} type="number" /><br /><br />
                <div className="heart">
                    <button className="btn">{t("book")}</button>
                    <div style={{ marginTop: "-3px" }}><img style={{ marginTop: "3px" }} src={logoWhite} alt="" /></div>
                </div>
            </div>
        </div>
    )
}