import logoWhite from "../Visual/logoWhite.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "En" },
    { code: "ru", lang: "Ру" },
]
export default function Our() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="perogif2" id="perogif2">
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

            <h1>{t("our")}</h1>

        </div>
    )
}