import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "En" },
    { code: "ru", lang: "Ру" },
]
export default function Start() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="perogif">
            <nav>

                <Link to="/"> <img src={logoWhite} alt="" /></Link>

                <div className='links'>
                    <Link to="/">{t("home")}</Link>
                    <Link to="/ex">{t("excursions")}</Link>
                    <Link to="/third">{t("personal")}</Link>
                </div>

                <div className="btn-container">
                    {languages.map((lng) => {
                        return (
                            <button className={lng.code === i18n.language ? "selected" : ""}
                                key={lng.code} onClick={() => changeLanguage(lng.code)}>
                                {lng.lang}
                            </button>
                        )
                    })}
                </div>

            </nav>

            <div style={{ marginLeft: "20%", marginTop: "8%" }}>
                <h2 style={{ color: "orange" }}>{t("bus")}</h2>
                <h1 style={{ fontSize: "300%" }}>{t("gold")}</h1><br />
                <div className="heart">
                    <button className="btn">{t("other")}</button>
                    <div><img src={logoWhite} alt="" /></div>
                </div>
            </div>

        </div>
    )
}