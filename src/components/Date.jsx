import logoWhite from "../Visual/logoColor.png"
import { useTranslation } from "react-i18next";

export default function Date() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: "3%" }}>
                <h2 style={{ color: "dodgerblue" }}>{t("desc")}</h2><br />
                <h4>{t("desc3")}</h4>
            </div><br /><br />
            <div className="opac">

                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>1 618 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("adt")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>1 412 $</span> </h1>
                    <h4 style={{ marginLeft: "65px" }}>{t("kit")}</h4>
                </div>
                <div className="trans">
                    <h1 style={{ color: 'dodgerblue' }}><img src={logoWhite} alt="" /> <span>{t("hou")}</span> </h1>
                </div>
            </div>
        </>
    )
}