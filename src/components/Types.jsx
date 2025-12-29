import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Types() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="types">
            <h1>{t("type")}</h1><br /><br /><br />
            <div className="fourgrid">
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>{t("tour")}</h2><br />
                        <p>{t("desc1")}</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>{t("tour")}</h2><br />
                        <p>{t("desc1")}</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>{t("tour")}</h2><br />
                        <p>{t("desc1")}</p>
                    </div>
                </div>
                <div className="cont">
                    <div className="circle">
                        <img src={logoWhite} alt="" />
                    </div>
                    <div>
                        <h2>{t("tour")}</h2><br />
                        <p>{t("desc1")}</p>
                    </div>
                </div>
            </div>
            <div className="lastmid">
                <p>{t("desc2")}</p><br />
                <Link to="/ex"> <button className="btn">{t("to")}</button></Link>
            </div>
        </div>
    )
}